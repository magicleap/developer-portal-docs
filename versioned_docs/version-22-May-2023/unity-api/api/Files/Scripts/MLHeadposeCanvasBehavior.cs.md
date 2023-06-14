---

title: MLHeadposeCanvasBehavior.cs

---


# MLHeadposeCanvasBehavior.cs









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

namespace UnityEngine.XR.MagicLeap
{
    [AddComponentMenu("XR/MagicLeap/MLHeadposeCanvasBehavior")]
    [RequireComponent(typeof(Canvas))]
    public class MLHeadposeCanvasBehavior : MonoBehaviour
    {
        [Tooltip("The forwards distance from the camera that this object should be placed.")]
        public float CanvasDistanceForwards = 1.5f;

        [Tooltip("The upwards distance from the camera that this object should be placed.")]
        public float CanvasDistanceUpwards = 0.0f;

        [Tooltip("The speed at which this object changes its position.")]
        public float PositionLerpSpeed = 5f;

        [Tooltip("The speed at which this object changes its rotation.")]
        public float RotationLerpSpeed = 5f;

        // The canvas that is attached to this object.
        private Canvas _canvas;

        // The camera this object will be in front of.
        private Camera _camera;

        void Awake()
        {
            _canvas = GetComponent<Canvas>();
            _camera = _canvas.worldCamera;

            // Disable this component if
            // it failed to initialize properly.
            if (_canvas == null)
            {
                Debug.LogError("Error: HeadposeCanvas._canvas is not set, disabling script.");
                enabled = false;
                return;
            }
            if (_camera == null)
            {
                Debug.LogError("Error: HeadposeCanvas._camera is not set, disabling script.");
                enabled = false;
                return;
            }
        }

        void Update()
        {
            // Move the object CanvasDistance units in front of the camera.
            float posSpeed = Time.deltaTime * PositionLerpSpeed;
            Vector3 posTo = _camera.transform.position + (_camera.transform.forward * CanvasDistanceForwards) + (_camera.transform.up * CanvasDistanceUpwards);
            transform.position = Vector3.SlerpUnclamped(transform.position, posTo, posSpeed);

            // Rotate the object to face the camera.
            float rotSpeed = Time.deltaTime * RotationLerpSpeed;
            Quaternion rotTo = Quaternion.LookRotation(transform.position - _camera.transform.position);
            transform.rotation = Quaternion.Slerp(transform.rotation, rotTo, rotSpeed);
        }
    }
}
```




