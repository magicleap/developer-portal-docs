---
title: MLConvert

---

# MLConvert



**NameSpace:** 
[UnitySDKEditorTests](/versioned_docs/version-31-Aug-2023/unity-api/api/UnitySDKEditorTests/UnitySDKEditorTests.md) 





Inherits from: <br></br>[NativeBindingsTests](/versioned_docs/version-31-Aug-2023/unity-api/api/UnitySDKEditorTests/UnitySDKEditorTests.NativeBindingsTests.md)




## Public Methods

### void Floats_Vector3_ToUnity_Test {#void-floats-vector3-tounity-test}

```csharp
public void Floats_Vector3_ToUnity_Test(
    float x,
    float y,
    float z,
    bool transformFromRUF,
    Vector3 result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float |x||
| float |y||
| float |z||
| bool |transformFromRUF||
| Vector3 |result||






-----------

### void From_GUID_To_MLUUID_Test {#void-from-guid-to-mluuid-test}

```csharp
public void From_GUID_To_MLUUID_Test(
    Guid @ case,
    MagicLeapNativeBindings.MLUUID result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Guid @ |case||
| [MagicLeapNativeBindings.MLUUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLUUID.md) |result|Universally unique identifier |






-----------

### void From_MLQuaternionf_To_Quaternion_Test {#void-from-mlquaternionf-to-quaternion-test}

```csharp
public void From_MLQuaternionf_To_Quaternion_Test(
    Quaternion @ case,
    bool transformFromRUF,
    MagicLeapNativeBindings.MLQuaternionf result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Quaternion @ |case||
| bool |transformFromRUF||
| [MagicLeapNativeBindings.MLQuaternionf](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLQuaternionf.md) |result|Quaternion in native format. |






-----------

### void From_Matrix4x4_To_Array_Test {#void-from-matrix4x4-to-array-test}

```csharp
public void From_Matrix4x4_To_Array_Test(
    Matrix4x4 @ case,
    float [] converted,
    float [] result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Matrix4x4 @ |case||
| float [] |converted||
| float [] |result||






-----------

### void From_Matrix4x4_To_MLTransform_Test {#void-from-matrix4x4-to-mltransform-test}

```csharp
public void From_Matrix4x4_To_MLTransform_Test(
    Matrix4x4 @ case,
    bool transformFromRUF,
    MagicLeapNativeBindings.MLTransform result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Matrix4x4 @ |case||
| bool |transformFromRUF||
| [MagicLeapNativeBindings.MLTransform](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLTransform.md) |result|Information used to transform from one coordinate frame to another. |






-----------

### void From_Vector3_To_MLVec3f_Test {#void-from-vector3-to-mlvec3f-test}

```csharp
public void From_Vector3_To_MLVec3f_Test(
    Vector3 @ case,
    bool transformFromRUF,
    Vector3 result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Vector3 @ |case||
| bool |transformFromRUF||
| Vector3 |result||






-----------

### void MLQuaternionf_ToUnity_Test {#void-mlquaternionf-tounity-test}

```csharp
public void MLQuaternionf_ToUnity_Test(
    MagicLeapNativeBindings.MLQuaternionf @ case,
    bool transformFromRUF,
    Quaternion result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MagicLeapNativeBindings.MLQuaternionf](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLQuaternionf.md) @ |case|Quaternion in native format. |
| bool |transformFromRUF||
| Quaternion |result||






-----------

### void MLUUID_To_GUID_ToUnity_Test {#void-mluuid-to-guid-tounity-test}

```csharp
public void MLUUID_To_GUID_ToUnity_Test(
    MagicLeapNativeBindings.MLUUID @ case,
    Guid result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MagicLeapNativeBindings.MLUUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLUUID.md) @ |case|Universally unique identifier |
| Guid |result||






-----------

### void MLVec2f_ToUnity_Test {#void-mlvec2f-tounity-test}

```csharp
public void MLVec2f_ToUnity_Test(
    MagicLeapNativeBindings.MLVec2f @ case,
    bool transformFromRUF,
    Vector2 result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MagicLeapNativeBindings.MLVec2f](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec2f.md) @ |case|2D vector represented with X and Y floats. |
| bool |transformFromRUF||
| Vector2 |result||






-----------

### void MLVec3f_ToUnity_Test {#void-mlvec3f-tounity-test}

```csharp
public void MLVec3f_ToUnity_Test(
    MagicLeapNativeBindings.MLVec3f @ case,
    bool transformFromRUF,
    Vector3 result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MagicLeapNativeBindings.MLVec3f](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec3f.md) @ |case|3D vector in native format. |
| bool |transformFromRUF||
| Vector3 |result||






-----------

### void Matrix4x4_ToUnity_Test {#void-matrix4x4-tounity-test}

```csharp
public void Matrix4x4_ToUnity_Test(
    MagicLeapNativeBindings.MLTransform @ case,
    bool transformFromRUF,
    Matrix4x4 result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MagicLeapNativeBindings.MLTransform](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLTransform.md) @ |case|Information used to transform from one coordinate frame to another. |
| bool |transformFromRUF||
| Matrix4x4 |result||






-----------

### void NativeBindings_MLColor32_struct_size {#void-nativebindings-mlcolor32-struct-size}

```csharp
public void NativeBindings_MLColor32_struct_size()
```






-----------

### void NativeBindings_MLColor4f_struct_size {#void-nativebindings-mlcolor4f-struct-size}

```csharp
public void NativeBindings_MLColor4f_struct_size()
```






-----------

### void NativeBindings_MLMat4f_struct_size {#void-nativebindings-mlmat4f-struct-size}

```csharp
public void NativeBindings_MLMat4f_struct_size()
```






-----------

### void NativeBindings_MLQuaternionf_struct_size {#void-nativebindings-mlquaternionf-struct-size}

```csharp
public void NativeBindings_MLQuaternionf_struct_size()
```






-----------

### void NativeBindings_MLRectf_struct_size {#void-nativebindings-mlrectf-struct-size}

```csharp
public void NativeBindings_MLRectf_struct_size()
```






-----------

### void NativeBindings_MLRecti_struct_size {#void-nativebindings-mlrecti-struct-size}

```csharp
public void NativeBindings_MLRecti_struct_size()
```






-----------

### void NativeBindings_MLTransformDerivatives_struct_size {#void-nativebindings-mltransformderivatives-struct-size}

```csharp
public void NativeBindings_MLTransformDerivatives_struct_size()
```






-----------

### void NativeBindings_MLTransform_struct_size {#void-nativebindings-mltransform-struct-size}

```csharp
public void NativeBindings_MLTransform_struct_size()
```






-----------

### void NativeBindings_MLUUID_struct_size {#void-nativebindings-mluuid-struct-size}

```csharp
public void NativeBindings_MLUUID_struct_size()
```






-----------

### void NativeBindings_MLVec2f_struct_size {#void-nativebindings-mlvec2f-struct-size}

```csharp
public void NativeBindings_MLVec2f_struct_size()
```






-----------

### void NativeBindings_MLVersion_struct_size {#void-nativebindings-mlversion-struct-size}

```csharp
public void NativeBindings_MLVersion_struct_size()
```






-----------

### void NativeBindings_MLXYZf_struct_size {#void-nativebindings-mlxyzf-struct-size}

```csharp
public void NativeBindings_MLXYZf_struct_size()
```






-----------

### void NativeBindings_Vec3f_Struct_Size {#void-nativebindings-vec3f-struct-size}

```csharp
public void NativeBindings_Vec3f_Struct_Size()
```






-----------

### void Native_Matrix4x4_ToUnity_Test {#void-native-matrix4x4-tounity-test}

```csharp
public void Native_Matrix4x4_ToUnity_Test(
    MagicLeapNativeBindings.MLMat4f @ case,
    Matrix4x4 result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MagicLeapNativeBindings.MLMat4f](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLMat4f.md) @ |case|4x4 matrix in native format. |
| Matrix4x4 |result||






-----------

### void Quaternion_ToUnity_Test {#void-quaternion-tounity-test}

```csharp
public void Quaternion_ToUnity_Test(
    Quaternion @ case,
    bool transformFromRUF,
    Quaternion result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Quaternion @ |case||
| bool |transformFromRUF||
| Quaternion |result||






-----------

### void Vector3_ToUnity_Test {#void-vector3-tounity-test}

```csharp
public void Vector3_ToUnity_Test(
    Vector3 @ case,
    bool transformFromRUF,
    Vector3 result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Vector3 @ |case||
| bool |transformFromRUF||
| Vector3 |result||






-----------

## Public Attributes

### Floats_Vector3_ToUnity_Test_Cases {#object-floats-vector3-tounity-test-cases}

```csharp

public static object [] Floats_Vector3_ToUnity_Test_Cases =
        {
            new object[] { 0f, 0f, 0f, true, new Vector3(0, 0, 0) },
            new object[] { 0f, 0f, 1f, true, new Vector3(0, 0, -1) },
            new object[] { 0f, 0f, 1f, false, new Vector3(0, 0, 1) },
        };

```






-----------

### From_GUID_To_MLUUID_Test_Cases {#object-from-guid-to-mluuid-test-cases}

```csharp

public static object [] From_GUID_To_MLUUID_Test_Cases =
        {
            new object[]
            {
                Guid.Parse("7c43e915-4bb7-4a8c-87ca-b9f7e021ff75"), new MagicLeapNativeBindings.MLUUID()
                {
                    TimeLow = 2084825365, TimeMid = 19383, TimeHiAndVersion = 19084, ClockSeqHiAndReserved = 135, ClockSeqLow = 202, Node0 = 185,
                    Node1 = 247, Node2 = 224, Node3 = 33, Node4 = 255, Node5 = 117,
                }
            },
            new object[]
            {
                Guid.Parse("daf8f6c4-a0b8-4c74-9849-5eaf2a80f33b"), new MagicLeapNativeBindings.MLUUID()
                {
                    TimeLow = 3673749188, TimeMid = 41144, TimeHiAndVersion = 19572, ClockSeqHiAndReserved = 152, ClockSeqLow = 73, Node0 = 94,
                    Node1 = 175, Node2 = 42, Node3 = 128, Node4 = 243, Node5 = 59,
                }
            },
            new object[]
            {
                Guid.Parse("c9a440b1-7548-440c-a7ab-bca92124aebc"), new MagicLeapNativeBindings.MLUUID()
                {
                    TimeLow = 3382984881, TimeMid = 30024, TimeHiAndVersion = 17420, ClockSeqHiAndReserved = 167, ClockSeqLow = 171, Node0 = 188,
                    Node1 = 169, Node2 = 33, Node3 = 36, Node4 = 174, Node5 = 188,
                }
            },
        };

```






-----------

### From_MLQuaternionf_To_Quaternion_Test_Cases {#object-from-mlquaternionf-to-quaternion-test-cases}

```csharp

public static object [] From_MLQuaternionf_To_Quaternion_Test_Cases =
        {
            new object[] { Quaternion.identity, false, MagicLeapNativeBindings.MLQuaternionf.Identity() },
            new object[] { Quaternion.identity, true, new MagicLeapNativeBindings.MLQuaternionf { X = 0, Y = 0, Z = 0, W = -1 } },
            new object[] { new Quaternion(0, 0, 0, 0), true, new MagicLeapNativeBindings.MLQuaternionf { X = 0, Y = 0, Z = 0, W = 0 }, },
            new object[] { new Quaternion(0, 0, 1, 1), true, new MagicLeapNativeBindings.MLQuaternionf { X = 0, Y = 0, Z = -1, W = -1 }, },
            new object[] { new Quaternion(0, 0, 1, 1), false, new MagicLeapNativeBindings.MLQuaternionf { X = 0, Y = 0, Z = 1, W = 1 }, },
        };

```






-----------

### From_Matrix4x4_To_Array_Test_Cases {#object-from-matrix4x4-to-array-test-cases}

```csharp

public static object [] From_Matrix4x4_To_Array_Test_Cases =
        {
            new object[] { Matrix4x4.zero, new float[16],
                new[] { 0f, 0.0f, 0.0f, 0.0f, 0.0f, 0f, 0.0f, 0.0f, 0.0f, 0.0f, 0f, 0.0f, 0.0f, 0.0f, 0.0f, 0f } },
            new object[] { Matrix4x4.identity, new float[16],
                new[] { 1f, 0.0f, 0.0f, 0.0f, 0.0f, 1f, 0.0f, 0.0f, 0.0f, 0.0f, 1f, 0.0f, 0.0f, 0.0f, 0.0f, 1f } },
        };

```






-----------

### From_Matrix4x4_To_MLTransform_Test_Cases {#object-from-matrix4x4-to-mltransform-test-cases}

```csharp

public static object [] From_Matrix4x4_To_MLTransform_Test_Cases =
        {
            new object[] { Matrix4x4.identity, true, MagicLeapNativeBindings.MLTransform.Identity() },
            
            new object[] { Matrix4x4.TRS(Vector3.forward, Quaternion.identity, Vector3.one), true,
                new MagicLeapNativeBindings.MLTransform ()
                {
                    Position = new MagicLeapNativeBindings.MLVec3f() {Z = -1f},
                    Rotation = new MagicLeapNativeBindings.MLQuaternionf() {W = -1f}
                }},
            
            new object[] { Matrix4x4.TRS(new Vector3 (10f, 5, 1f), Quaternion.Euler(90f, 180f, 45f), Vector3.one), true,
                new MagicLeapNativeBindings.MLTransform ()
                {
                    Position = new MagicLeapNativeBindings.MLVec3f() {X = 10f, Y = 5f , Z = -1f},
                    Rotation = new MagicLeapNativeBindings.MLQuaternionf() { X = -0.270598024f, Y = -0.65328151f, Z = -0.65328151f, W = 0.270598054f }
                } },
                
            new object[] { Matrix4x4.TRS(Vector3.forward, Quaternion.identity, Vector3.one), false, 
                MagicLeapNativeBindings.MLTransform.Identity() },
        };

```






-----------

### From_Vector3_To_MLVec3f_Test_Cases {#object-from-vector3-to-mlvec3f-test-cases}

```csharp

public static object [] From_Vector3_To_MLVec3f_Test_Cases =
        {
            new object[] { new Vector3(0, 0, 0), true, new Vector3(0, 0, 0) },
            new object[] { new Vector3(0, 0, 1), true, new Vector3(0, 0, -1) },
            new object[] { new Vector3(0, 0, 1), false, new Vector3(0, 0, 1) },
        };

```






-----------

### MLQuaternionf_ToUnity_Test_Cases {#object-mlquaternionf-tounity-test-cases}

```csharp

public static object [] MLQuaternionf_ToUnity_Test_Cases =
        {
            new object[] { new MagicLeapNativeBindings.MLQuaternionf() { X = 0, Y = 0, Z = 0, W = 1 }, true, new Quaternion(0, 0, 0, -1) },
            new object[] { MagicLeapNativeBindings.MLQuaternionf.Identity(), true, new Quaternion(0, 0, 0, -1) },
            new object[] { new MagicLeapNativeBindings.MLQuaternionf() { X = 1, Y = 1, Z = 1, W = 1 }, true, new Quaternion(0, 0, -1, -1) },
            new object[] { new MagicLeapNativeBindings.MLQuaternionf() { X = 1, Y = 1, Z = 1, W = 1 }, false, new Quaternion(0, 0, 1, 1) },
        };

```






-----------

### MLUUID_To_GUID_ToUnity_Test_Cases {#object-mluuid-to-guid-tounity-test-cases}

```csharp

public static object [] MLUUID_To_GUID_ToUnity_Test_Cases =
        {
            new object[]
            {
                new MagicLeapNativeBindings.MLUUID()
                { TimeLow = 2084825365, TimeMid = 19383, TimeHiAndVersion = 19084, ClockSeqHiAndReserved = 135, ClockSeqLow = 202, Node0 = 185,
                    Node1 = 247, Node2 = 224, Node3 = 33, Node4 = 255, Node5 = 117, },
                Guid.Parse("7c43e915-4bb7-4a8c-87ca-b9f7e021ff75"),
            },
            new object[]
            {
                new MagicLeapNativeBindings.MLUUID()
                { TimeLow = 3673749188, TimeMid = 41144, TimeHiAndVersion = 19572, ClockSeqHiAndReserved = 152, ClockSeqLow = 73, Node0 = 94,
                    Node1 = 175, Node2 = 42, Node3 = 128, Node4 = 243, Node5 = 59, },
                Guid.Parse("daf8f6c4-a0b8-4c74-9849-5eaf2a80f33b"),
            },
            new object[]
            {
                new MagicLeapNativeBindings.MLUUID()
                { TimeLow = 3382984881, TimeMid = 30024, TimeHiAndVersion = 17420, ClockSeqHiAndReserved = 167, ClockSeqLow = 171, Node0 = 188,
                    Node1 = 169, Node2 = 33, Node3 = 36, Node4 = 174, Node5 = 188, },
                Guid.Parse("c9a440b1-7548-440c-a7ab-bca92124aebc"),
            },
        };

```






-----------

### MLVec2f_ToUnity_Test_Cases {#object-mlvec2f-tounity-test-cases}

```csharp

public static object [] MLVec2f_ToUnity_Test_Cases =
        {
            new object[] { new MagicLeapNativeBindings.MLVec2f { X = 0, Y = 0 }, true, new Vector2(0, 0) },
            new object[] { new MagicLeapNativeBindings.MLVec2f { X = 0, Y = 1 }, true, new Vector2(0, 1) },
            new object[] { new MagicLeapNativeBindings.MLVec2f { X = 0, Y = 1 }, false, new Vector2(0, 1) },
        };

```






-----------

### MLVec3f_ToUnity_Test_Cases {#object-mlvec3f-tounity-test-cases}

```csharp

public static object [] MLVec3f_ToUnity_Test_Cases =
        {
            new object[] { new MagicLeapNativeBindings.MLVec3f { X = 0, Y = 0, Z = 0 }, true, new Vector3(0, 0, 0) },
            new object[] { new MagicLeapNativeBindings.MLVec3f { X = 0, Y = 0, Z = 1 }, true, new Vector3(0, 0, -1) },
            new object[] { new MagicLeapNativeBindings.MLVec3f { X = 0, Y = 0, Z = 1 }, false, new Vector3(0, 0, 1) },
        };

```






-----------

### Matrix4x4_ToUnity_Test_Cases {#object-matrix4x4-tounity-test-cases}

```csharp

public static object [] Matrix4x4_ToUnity_Test_Cases =
        {
            new object[] { MagicLeapNativeBindings.MLTransform.Identity(), true, Matrix4x4.identity },
            new object[] { MagicLeapNativeBindings.MLTransform.Identity(), false, Matrix4x4.identity },
        };

```






-----------

### Native_Matrix4x4_ToUnity_Test_Cases {#object-native-matrix4x4-tounity-test-cases}

```csharp

public static object [] Native_Matrix4x4_ToUnity_Test_Cases =
        {
            new object[]
            {
                new MagicLeapNativeBindings.MLMat4f
                {
                    MatrixColmajor = new float[]
                    {
                        1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1
                    }
                },
                Matrix4x4.identity
            },
        };

```






-----------

### Quaternion_ToUnity_Test_Cases {#object-quaternion-tounity-test-cases}

```csharp

public static object [] Quaternion_ToUnity_Test_Cases =
        {
            new object[] { new Quaternion(0, 0, 0, 1), true, new Quaternion(0, 0, 0, -1) },
            new object[] { Quaternion.identity, true, new Quaternion(0, 0, 0, -1) },
            new object[] { new Quaternion(0, 0, 1, 1), true, new Quaternion(0, 0, -1, -1) },
            new object[] { new Quaternion(0, 0, 1, 1), false, new Quaternion(0, 0, 1, 1) },
        };

```






-----------

### Vector3_ToUnity_Test_Cases {#object-vector3-tounity-test-cases}

```csharp

public static object [] Vector3_ToUnity_Test_Cases =
        {
            new object[] { new Vector3(0, 0, 0), true, new Vector3(0, 0, 0) },
            new object[] { new Vector3(0, 0, 1), true, new Vector3(0, 0, -1) },
            new object[] { new Vector3(0, 0, 1), false, new Vector3(0, 0, 1) },
        };

```






-----------


