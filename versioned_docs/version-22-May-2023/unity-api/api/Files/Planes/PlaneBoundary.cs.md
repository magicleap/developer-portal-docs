---

title: PlaneBoundary.cs

---


# PlaneBoundary.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2021-2022) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using System;
using Unity.Collections;
using Unity.Collections.LowLevel.Unsafe;
using Unity.Jobs;

namespace UnityEngine.XR.MagicLeap
{
    public partial class PlanesSubsystem
    {
        public struct PlaneBoundary : IEquatable<PlaneBoundary>
        {
            public bool valid
            {
                get
                {
                    unsafe
                    {
                        return m_Boundary.polygon != null;
                    }
                }
            }

            public unsafe void GetPolygon(Allocator allocator, ref NativeArray<Vector2> polygonOut)
            {
                if (!valid)
                    throw new InvalidOperationException("This plane boundary is not valid.");

                if (allocator == Allocator.Temp)
                    throw new InvalidOperationException("Allocator.Temp is not supported. Use Allocator.TempJob if you wish to use a temporary allocator.");

                if (allocator == Allocator.None)
                    throw new InvalidOperationException("Allocator.None is not a valid allocator.");

                TransformMLPolygon(*m_Boundary.polygon, m_Pose, allocator, ref polygonOut);
            }

            public int polygonVertexCount { get; private set; }

            public NativeArray<Vector2> GetPolygon(Allocator allocator)
            {
                var polygon = new NativeArray<Vector2>();
                GetPolygon(allocator, ref polygon);
                return polygon;
            }

            public int holeCount
            {
                get
                {
                    return (int)m_Boundary.holes_count;
                }
            }

            public NativeArray<Vector2> GetHole(int index, Allocator allocator)
            {
                var hole = new NativeArray<Vector2>();
                GetHole(index, allocator, ref hole);
                return hole;
            }

            public unsafe void GetHole(int index, Allocator allocator, ref NativeArray<Vector2> polygonOut)
            {
                if (!valid)
                    throw new InvalidOperationException("This plane boundary is not valid.");

                if (allocator == Allocator.Temp)
                    throw new InvalidOperationException("Allocator.Temp is not supported. Use Allocator.TempJob if you wish to use a temporary allocator.");

                if (allocator == Allocator.None)
                    throw new InvalidOperationException("Allocator.None is not a valid allocator.");

                if (index < 0)
                    throw new ArgumentOutOfRangeException(nameof(index), "Hole index must be greater than zero.");

                if (index >= holeCount)
                    throw new ArgumentOutOfRangeException(nameof(index), $"Hole index must be less than or equal to holeCount ({holeCount}).");

                var holes = NativeArrayUnsafeUtility.ConvertExistingDataToNativeArray<Extensions.MLPolygon>(
                    m_Boundary.holes,
                    holeCount,
                    Allocator.None);
#if UNITY_EDITOR
            var safetyHandle = AtomicSafetyHandle.Create();
            NativeArrayUnsafeUtility.SetAtomicSafetyHandle(ref holes, safetyHandle);
#endif

                TransformMLPolygon(holes[index], m_Pose, allocator, ref polygonOut);
            }

            public override int GetHashCode()
            {
                unchecked
                {
                    var hash = m_Boundary.GetHashCode();
                    hash = hash * 486187739 + m_Pose.GetHashCode();
                    return hash;
                }
            }

            public override bool Equals(object obj)
            {
                return ((obj is PlaneBoundary) && Equals((PlaneBoundary)obj));
            }

            public bool Equals(PlaneBoundary other)
            {
                return
                    m_Boundary.Equals(other.m_Boundary) &&
                    m_Pose.Equals(other.m_Pose);
            }

            public static bool operator ==(PlaneBoundary lhs, PlaneBoundary rhs)
            {
                return lhs.Equals(rhs);
            }

            public static bool operator !=(PlaneBoundary lhs, PlaneBoundary rhs)
            {
                return !lhs.Equals(rhs);
            }

            static unsafe void TransformMLPolygon(Extensions.MLPolygon mlPolygon, Pose pose, Allocator allocator, ref NativeArray<Vector2> polygonOut)
            {
                var mlVertices = NativeArrayUnsafeUtility.ConvertExistingDataToNativeArray<Vector3>(
                    mlPolygon.vertices,
                    (int)mlPolygon.vertices_count,
                    Allocator.None);

#if UNITY_EDITOR
            var safetyHandle = AtomicSafetyHandle.Create();
            NativeArrayUnsafeUtility.SetAtomicSafetyHandle(ref mlVertices, safetyHandle);
#endif

                CreateOrResizeNativeArrayIfNecessary(mlVertices.Length, allocator, ref polygonOut);

                // The vertices are provided in session space, so we need to transform
                // them into plane-space.
                new TransformPlaneBoundaryJob
                {
                    m_InvRotation = Quaternion.Inverse(CopyPlaneResultsJob.TransformUnityRotationToML(pose.rotation)),
                    m_Position = pose.position,
                    m_VerticesIn = mlVertices,
                    m_VerticesOut = polygonOut
                }.Schedule(mlVertices.Length, 1).Complete();
            }

            internal unsafe PlaneBoundary(Extensions.MLPlaneBoundary planeBoundary, Pose pose)
            {
                m_Boundary = planeBoundary;
                m_Pose = pose;

                if (m_Boundary.polygon != null)
                {
                    polygonVertexCount = (int)(*m_Boundary.polygon).vertices_count;
                }
                else
                {
                    polygonVertexCount = 0;
                }
            }

            static void CreateOrResizeNativeArrayIfNecessary<T>(
                int length,
                Allocator allocator,
                ref NativeArray<T> array) where T : struct
            {
                if (array.IsCreated)
                {
                    if (array.Length != length)
                    {
                        array.Dispose();
                        array = new NativeArray<T>(length, allocator);
                    }
                }
                else
                {
                    array = new NativeArray<T>(length, allocator);
                }
            }

            Extensions.MLPlaneBoundary m_Boundary;

            Pose m_Pose;
        }
    }
}
```




