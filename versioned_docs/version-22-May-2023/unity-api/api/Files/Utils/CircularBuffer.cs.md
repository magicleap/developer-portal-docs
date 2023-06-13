---

title: CircularBuffer.cs

---


# CircularBuffer.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2019-2022) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using System;
using System.Collections;

namespace UnityEngine.XR.MagicLeap
{
    internal class CircularBuffer<T> : IEnumerator, IEnumerable
    {
        private T[] buffer = null;
        private int bufferIndex = 0;

        private int front;
        private int back;

        private int enumeratorIndex;

        public object Current => buffer[enumeratorIndex];

        public int Capacity => buffer.Length;

        public int Count
        {
            get
            {
                if (front == -1)
                {
                    return 0;
                }

                return (front <= back) ? back - front + 1 : ((buffer.Length - front) + (back + 1));
            }
        }

        public static CircularBuffer<T> Create(params T[] objects)
        {
            CircularBuffer<T> circularBuffer = new CircularBuffer<T>(objects);
            return circularBuffer;
        }

        private CircularBuffer(params T[] objects)
        {
            this.buffer = objects;
        }

        public CircularBuffer(uint fixedSize)
        {
            buffer = new T[fixedSize];
            front = -1;
            back = -1;

            enumeratorIndex = -1;
        }

        public void Clear()
        {
            front = -1;
            back = -1;
        }

        public void Resize(uint newCapacity)
        {
            if (newCapacity == Capacity)
            {
                return;
            }

            if (Count == 0)
            {
                buffer = new T[newCapacity];
                front = -1;
                back = -1;
            }
            else
            {
                T[] newBuffer = new T[newCapacity];
                // TODO : dequeue more efficiently
                int numWastedElements = (int)newCapacity - Capacity;
                for (uint i = 0; i < numWastedElements; ++i)
                {
                    TryDequeue(out T _);
                }

                Dequeue(newBuffer);
                buffer = newBuffer;
            }
        }

        public void Enqueue(T value)
        {
            back = (back + 1) % buffer.Length;
            buffer[back] = value;

            if (back == front || front == -1)
            {
                front = (front + 1) % buffer.Length;
            }
        }

        public void Enqueue(T[] values)
        {
            // If we need to enqueue more values than the buffer size,
            // only enqueue the last buffer size number of elements.
            if (values.Length >= buffer.Length)
            {
                System.Array.Copy(values, values.Length - buffer.Length, buffer, 0, buffer.Length);
                front = 0;
                back = buffer.Length - 1;
            }
            else
            {
                if (front == -1)
                {
                    System.Array.Copy(values, 0, buffer, 0, values.Length);
                    front = 0;
                    back = values.Length - 1;
                }
                else
                {
                    int oldBack = back;
                    int remainingCapacityToEndOfBuffer = buffer.Length - back - 1;
                    if (values.Length <= remainingCapacityToEndOfBuffer)
                    {
                        System.Array.Copy(values, 0, buffer, back + 1, values.Length);
                        back += values.Length;
                        if (oldBack < front)
                        {
                            front = (back >= front) ? (back + 1) % buffer.Length : front;
                        }
                    }
                    // wraparound
                    else
                    {
                        System.Array.Copy(values, 0, buffer, back + 1, remainingCapacityToEndOfBuffer);

                        int remainingNumElementsToCopy = values.Length - remainingCapacityToEndOfBuffer;
                        System.Array.Copy(values, remainingCapacityToEndOfBuffer, buffer, 0, remainingNumElementsToCopy);

                        back = (remainingNumElementsToCopy - 1);

                        front = ((back >= front) || (oldBack < front)) ? (back + 1) % buffer.Length : front;
                    }
                }
            }
        }

        public bool TryDequeue(out T value)
        {
            if (front == -1)
            {
                value = default;
                return false;
            }

            value = buffer[front];
            if (front == back)
            {
                front = -1;
                back = -1;
            }
            else
            {
                front = (front + 1) % buffer.Length;
            }

            return true;
        }

        public int Dequeue(T[] data)
        {
            if (front == -1)
            {
                return 0;
            }

            if (front <= back)
            {
                int maxData = Math.Min(data.Length, this.Count);
                System.Array.Copy(buffer, front, data, 0, maxData);
                front += maxData;

                if (front > back)
                {
                    front = -1;
                    back = -1;
                }

                return maxData;
            }
            else
            {
                int numElementsToEndOfBuffer = buffer.Length - front;
                int numElementsDequeued = Math.Min(data.Length, numElementsToEndOfBuffer);
                System.Array.Copy(buffer, front, data, 0, numElementsDequeued);

                if (numElementsDequeued >= numElementsToEndOfBuffer)
                {
                    front = 0;
                }
                else
                {
                    front += numElementsDequeued;
                }

                if (numElementsDequeued < data.Length)
                {
                    int numElementsRemaining = back + 1;
                    int numPossibleElementsToDequeue = Math.Min(data.Length - numElementsDequeued, numElementsRemaining);
                    System.Array.Copy(buffer, 0, data, numElementsDequeued, numPossibleElementsToDequeue);

                    if (numPossibleElementsToDequeue >= numElementsRemaining)
                    {
                        front = -1;
                        back = -1;
                    }
                    else
                    {
                        front = numElementsDequeued;
                    }

                    return numElementsDequeued + numPossibleElementsToDequeue;
                }

                return numElementsDequeued;
            }
        }

        public bool MoveNext()
        {
            if (front == -1)
            {
                enumeratorIndex = -1;
                return false;
            }

            int oldEnumeratorIndex = enumeratorIndex;
            enumeratorIndex = (enumeratorIndex == -1) ? front : (enumeratorIndex + 1);
            if (front <= back)
            {
                return (enumeratorIndex >= front) && (enumeratorIndex <= back);
            }

            enumeratorIndex %= buffer.Length;
            // if front > back and enumerator has looped back to front
            if (enumeratorIndex == front && oldEnumeratorIndex == enumeratorIndex - 1)
            {
                return false;
            }
            return (enumeratorIndex >= front) || (enumeratorIndex <= back);
        }

        public void Reset()
        {
            enumeratorIndex = -1;
        }

        public IEnumerator GetEnumerator()
        {
            Reset();
            return this;
        }

        public T Peek()
        {
            return buffer[bufferIndex];
        }

        public T Get()
        {
            T result = buffer[bufferIndex];

            bufferIndex++;
            if (bufferIndex >= buffer.Length)
            {
                bufferIndex = 0;
            }

            return result;
        }
    }
}
```




