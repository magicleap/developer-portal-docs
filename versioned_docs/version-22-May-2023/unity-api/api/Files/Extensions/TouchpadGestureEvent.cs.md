---

title: TouchpadGestureEvent.cs

---


# TouchpadGestureEvent.cs









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
using System.Runtime.InteropServices;
using UnityEngine.XR.InteractionSubsystems;

namespace UnityEngine.XR.MagicLeap
{
    public partial class GestureSubsystem
    {
        public static partial class Extensions
        {
            [StructLayout(LayoutKind.Sequential)]
            public struct TouchpadGestureEvent : IEquatable<TouchpadGestureEvent>
            {
                public GestureId id { get { return m_Id; } }

                public GestureState state { get { return m_State; } }

                public byte controllerId { get { return m_ControllerId; } }

                public float angle { get { return m_Angle; } }

                public InputSubsystem.Extensions.TouchpadGesture.Direction direction { get { return m_Direction; } }

                public float distance { get { return m_Distance; } }

                public Vector3 positionAndForce { get { return m_PositionAndForce; } }

                public float radius { get { return m_Radius; } }

                public float speed { get { return m_Speed; } }

                public InputSubsystem.Extensions.TouchpadGesture.Type type { get { return m_Type; } }

                public static TouchpadGestureEvent GetDefault()
                {
                    return new TouchpadGestureEvent(GestureId.invalidId, GestureState.Invalid,
                        0, 0.0f, InputSubsystem.Extensions.TouchpadGesture.Direction.None, 0.0f, Vector3.zero,
                        0.0f, 0.0f, InputSubsystem.Extensions.TouchpadGesture.Type.None);
                }

                public TouchpadGestureEvent(GestureId id, GestureState state, byte controllerId, float angle,
                    InputSubsystem.Extensions.TouchpadGesture.Direction direction, float distance, Vector3 positionAndForce,
                    float radius, float speed, InputSubsystem.Extensions.TouchpadGesture.Type type)
                {
                    m_Id = id;
                    m_State = state;
                    m_ControllerId = controllerId;
                    m_Angle = angle;
                    m_Direction = direction;
                    m_Distance = distance;
                    m_PositionAndForce = positionAndForce;
                    m_Radius = radius;
                    m_Speed = speed;
                    m_Type = type;
                }

                public override string ToString()
                {
                    return string.Format(
                        "Touchpad Gesture:\n\tgestureId: {0}\n\tgestureState: {1}\n\tcontrollerId: {2}\n\tangle: {3}\n\tdirection: {4}\n\tdistance: {5}\\n\tpositionAndForce: {6}\n\tradius: {7}\n\tspeed: {8}\n\ttype: {9}",
                        id, state, controllerId, angle, direction, distance, positionAndForce, radius, speed, type);
                }

                public override bool Equals(object obj)
                {
                    if (ReferenceEquals(null, obj)) return false;
                    return obj is TouchpadGestureEvent && Equals((TouchpadGestureEvent)obj);
                }

                public override int GetHashCode()
                {
                    unchecked
                    {
                        var hashCode = m_Id.GetHashCode();
                        hashCode = (hashCode * 486187739) + ((int)m_State).GetHashCode();
                        hashCode = (hashCode * 486187739) + ((int)m_ControllerId).GetHashCode();
                        hashCode = (hashCode * 486187739) + ((int)m_Angle).GetHashCode();
                        hashCode = (hashCode * 486187739) + ((int)m_Direction).GetHashCode();
                        hashCode = (hashCode * 486187739) + ((int)m_Distance).GetHashCode();
                        hashCode = (hashCode * 486187739) + m_PositionAndForce.GetHashCode();
                        hashCode = (hashCode * 486187739) + ((int)m_Radius).GetHashCode();
                        hashCode = (hashCode * 486187739) + ((int)m_Speed).GetHashCode();
                        hashCode = (hashCode * 486187739) + ((int)m_Type).GetHashCode();

                        return hashCode;
                    }
                }

                public static bool operator ==(TouchpadGestureEvent lhs, TouchpadGestureEvent rhs)
                {
                    return lhs.Equals(rhs);
                }

                public static bool operator !=(TouchpadGestureEvent lhs, TouchpadGestureEvent rhs)
                {
                    return !lhs.Equals(rhs);
                }

                public bool Equals(TouchpadGestureEvent other)
                {
                    return
                        m_Id == other.id &&
                        m_State == other.state &&
                        m_ControllerId == other.controllerId &&
                        m_Angle == other.angle &&
                        m_Direction == other.direction &&
                        m_Distance == other.distance &&
                        m_PositionAndForce == other.positionAndForce &&
                        m_Radius == other.radius &&
                        m_Speed == other.speed &&
                        m_Type == other.type;
                }

                GestureId m_Id;
                GestureState m_State;
                byte m_ControllerId;
                float m_Angle;
                InputSubsystem.Extensions.TouchpadGesture.Direction m_Direction;
                float m_Distance;
                Vector3 m_PositionAndForce;
                float m_Radius;
                float m_Speed;
                InputSubsystem.Extensions.TouchpadGesture.Type m_Type;
            }
        }



    }
}
```




