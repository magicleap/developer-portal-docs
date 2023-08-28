---

title: MLThreadDispatch.cs

---


# MLThreadDispatch.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2018-2022) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

namespace UnityEngine.XR.MagicLeap.Native
{
    using System;
    using System.Collections.Concurrent;
    using System.Threading;

    public class MLThreadDispatch
    {
        private static ConcurrentQueue<Dispatcher> actionQueue = new ConcurrentQueue<Dispatcher>();

        private static ConcurrentQueue<System.Action> mainActionQueue = new ConcurrentQueue<System.Action>();

        private static ConcurrentQueue<System.Action> graphicsActionQueue = new ConcurrentQueue<System.Action>();

        private static bool registeredForGraphicsCallbacks = false;

        private static System.Threading.Thread thread = null;

        private static ConcurrentQueue<Func<bool>> itemizedWork = new ConcurrentQueue<Func<bool>>();

        public static void ScheduleWork(Func<bool> function)
        {
            itemizedWork.Enqueue(function);
        }

        public static void ScheduleMain(System.Action callback)
        {
            if (MLDevice.MainThreadId != -1 && MLDevice.MainThreadId == System.Threading.Thread.CurrentThread.ManagedThreadId)
            {
                callback();
            }
            else
            {
                mainActionQueue.Enqueue(callback);
            }
        }

        public static void ScheduleGraphics(System.Action callback)
        {
            graphicsActionQueue.Enqueue(callback);
            if (!registeredForGraphicsCallbacks)
            {
                registeredForGraphicsCallbacks = true;
                MLGraphicsHooks.OnPreBeginRenderFrame += ExecuteOnPreBeginRenderFrameTasks;
            }
        }

        private static void ExecuteOnPreBeginRenderFrameTasks()
        {
            while (graphicsActionQueue.TryDequeue(out System.Action action))
            {
                action();
            }
        }

        public static void Call(System.Delegate callback)
        {
            if (callback != null)
            {
                System.Action call = delegate
                {
                    DispatchNoPayload newDispatch = new DispatchNoPayload(Cast<Action>(callback));
                    actionQueue.Enqueue(newDispatch);
                };

                call();
            }
        }

        public static void Call(System.Action callback)
        {
            if (callback != null)
            {
                System.Action call = delegate
                {
                    DispatchNoPayload newDispatch = new DispatchNoPayload(callback);
                    actionQueue.Enqueue(newDispatch);
                };
                call();
            }
        }

        public static void Call<A>(A a, System.Delegate callback)
        {
            if (callback != null)
            {
                System.Action<A> call = delegate (A arg1)
                {
                    DispatchPayload1<A> newDispatch = new DispatchPayload1<A>(arg1, Cast<Action<A>>(callback));
                    actionQueue.Enqueue(newDispatch);
                };

                call(a);
            }
        }

        public static void Call<A, B>(A a, B b, System.Delegate callback)
        {
            if (callback != null)
            {
                System.Action<A, B> call = delegate (A arg1, B arg2)
                {
                    DispatchPayload2<A, B> newDispatch = new DispatchPayload2<A, B>(arg1, arg2, Cast<Action<A, B>>(callback));
                    actionQueue.Enqueue(newDispatch);
                };

                call(a, b);
            }
        }

        public static void Call<A, B, C>(A a, B b, C c, System.Delegate callback)
        {
            if (callback != null)
            {
                System.Action<A, B, C> call = delegate (A arg1, B arg2, C arg3)
                {
                    DispatchPayload3<A, B, C> newDispatch = new DispatchPayload3<A, B, C>(arg1, arg2, arg3, Cast<Action<A, B, C>>(callback));
                    actionQueue.Enqueue(newDispatch);
                };

                call(a, b, c);
            }
        }

        public static void Call<A, B, C, D>(A a, B b, C c, D d, System.Delegate callback)
        {
            if (callback != null)
            {
                System.Action<A, B, C, D> call = delegate (A arg1, B arg2, C arg3, D arg4)
                {
                    DispatchPayload4<A, B, C, D> newDispatch = new DispatchPayload4<A, B, C, D>(arg1, arg2, arg3, arg4, Cast<Action<A, B, C, D>>(callback));
                    actionQueue.Enqueue(newDispatch);
                };

                call(a, b, c, d);
            }
        }

        public static void Call<A, B, C, D, E>(A a, B b, C c, D d, E e, System.Delegate callback)
        {
            if (callback != null)
            {
                System.Action<A, B, C, D, E> call = delegate (A arg1, B arg2, C arg3, D arg4, E arg5)
                {
                    DispatchPayload5<A, B, C, D, E> newDispatch = new DispatchPayload5<A, B, C, D, E>(arg1, arg2, arg3, arg4, arg5, Cast<Action<A, B, C, D, E>>(callback));
                    actionQueue.Enqueue(newDispatch);
                };

                call(a, b, c, d, e);
            }
        }

        public static void Call<A, B, C, D, E, F>(A a, B b, C c, D d, E e, F f, System.Delegate callback)
        {
            if (callback != null)
            {
                System.Action<A, B, C, D, E, F> call = delegate (A arg1, B arg2, C arg3, D arg4, E arg5, F arg6)
                {
                    DispatchPayload6<A, B, C, D, E, F> newDispatch = new DispatchPayload6<A, B, C, D, E, F>(arg1, arg2, arg3, arg4, arg5, arg6, Cast<Action<A, B, C, D, E, F>>(callback));
                    actionQueue.Enqueue(newDispatch);
                };

                call(a, b, c, d, e, f);
            }
        }

        public static void DispatchAll()
        {
            Dispatcher callbacks;
            System.Action action;

            while (actionQueue.TryDequeue(out callbacks))
            {
                callbacks.Dispatch();
            }

            while (mainActionQueue.TryDequeue(out action))
            {
                action();
            }

            if (thread == null && !itemizedWork.IsEmpty)
            {
                thread = new Thread(ExecuteBackgroundThread);
                thread.Start();
            }
        }

        private static T Cast<T>(Delegate source) where T : class
        {
            if (source == null)
            {
                return null;
            }

            Delegate[] delegates = source.GetInvocationList();

            if (delegates.Length > 1)
            {
                Delegate[] delegatesDest = new Delegate[delegates.Length];

                for (int nn = 0; nn < delegates.Length; nn++)
                {
                    delegatesDest[nn] = Delegate.CreateDelegate(typeof(T), delegates[nn].Target, delegates[nn].Method);
                }

                return Delegate.Combine(delegatesDest) as T;
            }

            return Delegate.CreateDelegate(typeof(T), delegates[0].Target, delegates[0].Method) as T;
        }

        private static void ExecuteBackgroundThread(object obj)
        {
            Thread.CurrentThread.IsBackground = true;

            while (true)
            {
                Func<bool> function;

                if (itemizedWork.TryDequeue(out function))
                {
                    bool result = function();

                    if (!result)
                    {
                        // Not done yet. Put it at the end of the queue to try again later.
                        itemizedWork.Enqueue(function);
                    }
                }
                else
                {
                    // Yield a reasonable timeslice.
                    Thread.Sleep(5);
                }
            }
        }

        private abstract class Dispatcher
        {
            public abstract void Dispatch();
        }

        private class DispatchNoPayload : Dispatcher
        {
            private System.Action action;

            public DispatchNoPayload(System.Action action)
            {
                this.action = action;
            }

            public override void Dispatch()
            {
                this.action();
            }
        }

        private class DispatchPayload1<T> : Dispatcher
        {
            private System.Action<T> action;

            private T payload;

            public DispatchPayload1(T payload, System.Action<T> action)
            {
                this.payload = payload;
                this.action = action;
            }

            public override void Dispatch()
            {
                this.action(this.payload);
            }
        }

        private class DispatchPayload2<A, B> : Dispatcher
        {
            private System.Action<A, B> action;

            private A payload1;

            private B payload2;

            public DispatchPayload2(A payload1, B payload2, System.Action<A, B> action)
            {
                this.payload1 = payload1;
                this.payload2 = payload2;
                this.action = action;
            }

            public override void Dispatch()
            {
                this.action(this.payload1, this.payload2);
            }
        }

        private class DispatchPayload3<A, B, C> : Dispatcher
        {
            private System.Action<A, B, C> action;

            private A payload1;

            private B payload2;

            private C payload3;

            public DispatchPayload3(A payload1, B payload2, C payload3, System.Action<A, B, C> action)
            {
                this.payload1 = payload1;
                this.payload2 = payload2;
                this.payload3 = payload3;
                this.action = action;
            }

            public override void Dispatch()
            {
                this.action(this.payload1, this.payload2, this.payload3);
            }
        }

        private class DispatchPayload4<A, B, C, D> : Dispatcher
        {
            private System.Action<A, B, C, D> action;

            private A payload1;

            private B payload2;

            private C payload3;

            private D payload4;

            public DispatchPayload4(A payload1, B payload2, C payload3, D payload4, System.Action<A, B, C, D> action)
            {
                this.payload1 = payload1;
                this.payload2 = payload2;
                this.payload3 = payload3;
                this.payload4 = payload4;
                this.action = action;
            }

            public override void Dispatch()
            {
                this.action(this.payload1, this.payload2, this.payload3, this.payload4);
            }
        }

        private class DispatchPayload5<A, B, C, D, E> : Dispatcher
        {
            private System.Action<A, B, C, D, E> action;

            private A payload1;

            private B payload2;

            private C payload3;

            private D payload4;

            private E payload5;

            public DispatchPayload5(A payload1, B payload2, C payload3, D payload4, E payload5, System.Action<A, B, C, D, E> action)
            {
                this.payload1 = payload1;
                this.payload2 = payload2;
                this.payload3 = payload3;
                this.payload4 = payload4;
                this.payload5 = payload5;
                this.action = action;
            }

            public override void Dispatch()
            {
                this.action(this.payload1, this.payload2, this.payload3, this.payload4, this.payload5);
            }
        }

        private class DispatchPayload6<A, B, C, D, E, F> : Dispatcher
        {
            private System.Action<A, B, C, D, E, F> action;

            private A payload1;

            private B payload2;

            private C payload3;

            private D payload4;

            private E payload5;

            private F payload6;

            public DispatchPayload6(A payload1, B payload2, C payload3, D payload4, E payload5, F payload6, System.Action<A, B, C, D, E, F> action)
            {
                this.payload1 = payload1;
                this.payload2 = payload2;
                this.payload3 = payload3;
                this.payload4 = payload4;
                this.payload5 = payload5;
                this.payload6 = payload6;
                this.action = action;
            }

            public override void Dispatch()
            {
                this.action(this.payload1, this.payload2, this.payload3, this.payload4, this.payload5, this.payload6);
            }
        }
    }
}
```




