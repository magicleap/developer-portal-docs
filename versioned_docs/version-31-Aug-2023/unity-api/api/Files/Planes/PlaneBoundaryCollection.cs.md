---

title: PlaneBoundaryCollection.cs

---


# PlaneBoundaryCollection.cs









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
        public struct PlaneBoundaryCollection : IEquatable<PlaneBoundaryCollection>
        {
            public bool valid
            {
                get { return m_Boundaries.IsCreated; }
            }

            public int count
            {
                get { return m_Boundaries.Length; }
            }

            public PlaneBoundary this[int index]
            {
                get
                {
                    if (!valid)
                        throw new InvalidOperationException("This boundary collection is not valid.");

                    if (index < 0)
                        throw new ArgumentOutOfRangeException(nameof(index), "Boundary index must be greater than zero.");

                    if (index >= count)
                        throw new ArgumentOutOfRangeException(nameof(index), $"Boundary index must be less than the boundary count ({count}).");

                    return new PlaneBoundary(m_Boundaries[index], m_Pose);
                }
            }

            public Enumerator GetEnumerator()
            {
                return new Enumerator(this);
            }

            public struct Enumerator
            {
                internal Enumerator(PlaneBoundaryCollection collection)
                {
                    m_Index = -1;
                    m_Collection = collection;
                }

                public bool MoveNext()
                {
                    return ++m_Index < m_Collection.count;
                }

                public void Reset()
                {
                    m_Index = -1;
                }

                public PlaneBoundary Current
                {
                    get
                    {
                        return m_Collection[m_Index];
                    }
                }

                public void Dispose()
                {
                    m_Collection = default(PlaneBoundaryCollection);
                    m_Index = -1;
                }

                int m_Index;

                PlaneBoundaryCollection m_Collection;
            }

            public override int GetHashCode()
            {
                unchecked
                {
                    var hash = m_Boundaries.GetHashCode();
                    hash = hash * 486187739 + m_Pose.GetHashCode();
                    return hash;
                }
            }

            public override bool Equals(object obj)
            {
                return ((obj is PlaneBoundaryCollection) && Equals((PlaneBoundaryCollection)obj));
            }

            public bool Equals(PlaneBoundaryCollection other)
            {
                return
                    m_Boundaries.Equals(other.m_Boundaries) &&
                    m_Pose.Equals(other.m_Pose);
            }

            public static bool operator ==(PlaneBoundaryCollection lhs, PlaneBoundaryCollection rhs)
            {
                return lhs.Equals(rhs);
            }

            public static bool operator !=(PlaneBoundaryCollection lhs, PlaneBoundaryCollection rhs)
            {
                return !lhs.Equals(rhs);
            }

            internal unsafe PlaneBoundaryCollection(Extensions.MLPlaneBoundaries planeBoundaries, Pose planePose)
            {
                m_Boundaries = NativeArrayUnsafeUtility.ConvertExistingDataToNativeArray<Extensions.MLPlaneBoundary>(
                    planeBoundaries.boundaries,
                    (int)planeBoundaries.boundaries_count,
                    Allocator.None);

#if UNITY_EDITOR
            var safetyHandle = AtomicSafetyHandle.Create();
            NativeArrayUnsafeUtility.SetAtomicSafetyHandle(ref m_Boundaries, safetyHandle);
#endif

                m_Pose = planePose;
            }

            NativeArray<Extensions.MLPlaneBoundary> m_Boundaries;

            Pose m_Pose;
        }
    }
}
```




