---
title: Perception
summary: apis for the perception system. 

---

# Perception

APIs for the Perception system.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md)**  |
| struct | **[MLPerceptionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md)**  |
| struct | **[MLTransformDerivatives](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_transform_derivatives.md)** <br></br>Velocity and acceleration derivatives for a related transform.  |
| struct | **[MLSnapshotStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_snapshot_static_data.md)** <br></br>Static information about the snapshot system.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlcoordinateframeuid)**  |
| typedef struct [MLPerceptionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md) | **[MLPerceptionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlperceptionsettings)**  |
| typedef struct [MLTransformDerivatives](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_transform_derivatives.md) | **[MLTransformDerivatives](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mltransformderivatives)** <br></br>Velocity and acceleration derivatives for a related transform.  |
| typedef struct [MLSnapshotStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_snapshot_static_data.md) | **[MLSnapshotStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshotstaticdata)** <br></br>Static information about the snapshot system.  |
| typedef struct [MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) | **[MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot)**  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 27](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#enums-anonymous-enum-27)** <br></br> { <br></br>[MLResultAPIPrefix_Snapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#enums-mlresultapiprefix-snapshot) = ( 0x87b8  << 16)<br></br>} |
| enum | **[MLSnapshotResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#enums-mlsnapshotresult)** <br></br> { <br></br>[MLSnapshotResult_DerivativesNotCalculated](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#enums-mlsnapshotresult-derivativesnotcalculated) = MLResultAPIPrefix_Snapshot,<br></br> [MLSnapshotResult_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#enums-mlsnapshotresult-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPerceptionInitSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptioninitsettings)**([MLPerceptionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md) * out_settings)<br></br>Initializes the perception system with the passed in settings.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPerceptionStartup](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionstartup)**([MLPerceptionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md) * settings)<br></br>Starts the perception system.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPerceptionShutdown](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionshutdown)**()<br></br>Shuts down the perception system and cleans up all resources used by it.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPerceptionGetSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptiongetsnapshot)**([MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) ** out_snapshot)<br></br>Pulls in the latest state of all persistent transforms and all enabled trackers extrapolated to the next frame time.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPerceptionGetPredictedSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptiongetpredictedsnapshot)**([MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) timestamp, [MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) ** out_snapshot)<br></br>Pulls in the state of all persistent transforms and all enabled trackers extrapolated to the provided timestamp.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLPerceptionReleaseSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionreleasesnapshot)**([MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) * snap)<br></br>Releases specified `#MLSnapshot` object.  |
| void | **[MLTransformDerivativesInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#void-mltransformderivativesinit)**([MLTransformDerivatives](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_transform_derivatives.md) * inout_data)<br></br>Intializes the default values for [MLTransformDerivatives](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_transform_derivatives.md).  |
| void | **[MLSnapshotStaticDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#void-mlsnapshotstaticdatainit)**([MLSnapshotStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_snapshot_static_data.md) * inout_data)<br></br>Intializes the default values for [MLSnapshotStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_snapshot_static_data.md).  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSnapshotGetStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlsnapshotgetstaticdata)**([MLSnapshotStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_snapshot_static_data.md) * out_static_data)<br></br>Get the static data pertaining to the snapshot system.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSnapshotGetTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlsnapshotgettransform)**(const [MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) * snapshot, const [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) * id, [MLTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_transform.md) * out_transform)<br></br>Get transform between world origin and the coordinate frame "id.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSnapshotGetTransformWithDerivatives](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlsnapshotgettransformwithderivatives)**(const [MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) * snapshot, const [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) * id, [MLTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_transform.md) * out_transform, [MLTransformDerivatives](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_transform_derivatives.md) * out_derivatives)<br></br>Get transform between world origin and the coordinate frame "id as well as any derivatives that have been calculated.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSnapshotGetPoseInBase](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlsnapshotgetposeinbase)**(const [MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) * snapshot, const [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) * base_id, const [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) * id, [MLPose](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_pose.md) * out_pose)<br></br>Get transform between coordinate frame 'base_id' and the coordinate frame "id as well as any derivatives that have been calculated.  |
| const char * | **[MLSnapshotGetResultString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#const-char-mlsnapshotgetresultstring)**([MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) result_code)<br></br>Returns an ASCII string representation for each result code.  |

## Detailed Description

APIs for the Perception system. 




**Shared Object:**
  * perception.magicleap*




-----------
## Enums Documentation

### Anonymous Enum 27 {#enums-anonymous-enum-27}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLResultAPIPrefix_Snapshot |  ( 0x87b8  << 16)| Defines the prefix for MLSnapshotResult codes. |








-----------

### MLSnapshotResult {#enums-mlsnapshotresult}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLSnapshotResult_DerivativesNotCalculated |  MLResultAPIPrefix_Snapshot| Derivatives not calculated for requested coordinate frame. |
| MLSnapshotResult_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Return values for Snapshot API calls. 





-----------


## Types Documentation

### MLCoordinateFrameUID {#struct-mlcoordinateframeuid}

```cpp
typedef struct MLCoordinateFrameUID MLCoordinateFrameUID;
```


A unique identifier which represents a coordinate frame. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md)



-----------

### MLPerceptionSettings {#struct-mlperceptionsettings}

```cpp
typedef struct MLPerceptionSettings MLPerceptionSettings;
```


Settings for initializing the perception system. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md)



-----------

### MLTransformDerivatives {#struct-mltransformderivatives}

```cpp
typedef struct MLTransformDerivatives MLTransformDerivatives;
```

Velocity and acceleration derivatives for a related transform. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_transform_derivatives.md)


**API Level:**
  * 8




-----------

### MLSnapshotStaticData {#struct-mlsnapshotstaticdata}

```cpp
typedef struct MLSnapshotStaticData MLSnapshotStaticData;
```

Static information about the snapshot system. 

Initalize this structure with MLSnapshotStaticDataInit and populate with [MLSnapshotGetStaticData()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlsnapshotgetstaticdata).



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_snapshot_static_data.md)


**API Level:**
  * 30




-----------

### MLSnapshot {#struct-mlsnapshot}

```cpp
typedef struct MLSnapshot MLSnapshot;
```


Opaque snapshot of system state. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot)



-----------


## Functions Documentation

### MLPerceptionInitSettings {#mlresult-mlperceptioninitsettings}

```cpp
MLResult MLPerceptionInitSettings(
    MLPerceptionSettings * out_settings
)
```

Initializes the perception system with the passed in settings. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLPerceptionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md) * |out_settings|Initializes the perception system with these settings.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to initialize the perception settings due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully initialized the perception settings. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to initialize the perception settings due to an unknown error.|
**Required Permissions**:

  * None 






-----------

### MLPerceptionStartup {#mlresult-mlperceptionstartup}

```cpp
MLResult MLPerceptionStartup(
    MLPerceptionSettings * settings
)
```

Starts the perception system. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLPerceptionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_perception_settings.md) * |settings|The perception system starts with these settings.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully started perception system. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to start perception system due to an unknown failure.|
**Required Permissions**:

  * None 


This function should be called before any perception functions are called.





-----------

### MLPerceptionShutdown {#mlresult-mlperceptionshutdown}

```cpp
MLResult MLPerceptionShutdown()
```

Shuts down the perception system and cleans up all resources used by it. 


**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully shut down the perception system. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to shut down the perception system because of an uknown failure.|
**Required Permissions**:

  * None 


This function should be called prior to exiting the program if a call to `[MLPerceptionStartup()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionstartup)` was called.





-----------

### MLPerceptionGetSnapshot {#mlresult-mlperceptiongetsnapshot}

```cpp
MLResult MLPerceptionGetSnapshot(
    MLSnapshot ** out_snapshot
)
```

Pulls in the latest state of all persistent transforms and all enabled trackers extrapolated to the next frame time. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) ** |out_snapshot|Pointer to a pointer containing an [MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) on success.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created snapshot. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|out_snapshot parameter was not valid (null). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 


Returns a [MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) with this latest state. This snap should be used for the duration of the frame being constructed and then released with a call to `[MLPerceptionReleaseSnapshot()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionreleasesnapshot)`.





-----------

### MLPerceptionGetPredictedSnapshot {#mlresult-mlperceptiongetpredictedsnapshot}

```cpp
MLResult MLPerceptionGetPredictedSnapshot(
    MLTime timestamp,
    MLSnapshot ** out_snapshot
)
```

Pulls in the state of all persistent transforms and all enabled trackers extrapolated to the provided timestamp. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) |timestamp|Timestamp representing the time for which to predict poses. |
| [MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) ** |out_snapshot|Pointer to a pointer containing an [MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) on success.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created snapshot. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidTimestamp|Timestamp is either more than 100ms in the future or too old for cached state. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Output parameter was not valid (null). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 


This timestamp typically comes from out_frame_info.predicted_display_time out parameter from the MLGraphicsBeginFrameEx function.

Returns a [MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) with this latest state. This snap should be used for the duration of the frame being constructed and then released with a call to `[MLPerceptionReleaseSnapshot()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptionreleasesnapshot)`.




**API Level:**
  * 27




-----------

### MLPerceptionReleaseSnapshot {#mlresult-mlperceptionreleasesnapshot}

```cpp
MLResult MLPerceptionReleaseSnapshot(
    MLSnapshot * snap
)
```

Releases specified `#MLSnapshot` object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) * |snap|Pointer to a valid snap object.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released snapshot. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|snapshot parameter was not valid (null). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 


This function should be called exactly once for each call to `[MLPerceptionGetSnapshot()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptiongetsnapshot)`.





-----------

### MLTransformDerivativesInit {#void-mltransformderivativesinit}

```cpp
static inline void MLTransformDerivativesInit(
    MLTransformDerivatives * inout_data
)
```

Intializes the default values for [MLTransformDerivatives](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_transform_derivatives.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLTransformDerivatives](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_transform_derivatives.md) * |inout_data|The object that will be initialized with default values. |



**API Level:**
  * 8




-----------

### MLSnapshotStaticDataInit {#void-mlsnapshotstaticdatainit}

```cpp
static inline void MLSnapshotStaticDataInit(
    MLSnapshotStaticData * inout_data
)
```

Intializes the default values for [MLSnapshotStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_snapshot_static_data.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSnapshotStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_snapshot_static_data.md) * |inout_data|The object that will be initialized with default values. |



**API Level:**
  * 30




-----------

### MLSnapshotGetStaticData {#mlresult-mlsnapshotgetstaticdata}

```cpp
MLResult MLSnapshotGetStaticData(
    MLSnapshotStaticData * out_static_data
)
```

Get the static data pertaining to the snapshot system. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSnapshotStaticData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_snapshot_static_data.md) * |out_static_data|Target to populate the data about snapshot system.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain static data due to invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Obtained static data successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain static data due to internal error.|
**Required Permissions**:

  * None 





**API Level:**
  * 30




-----------

### MLSnapshotGetTransform {#mlresult-mlsnapshotgettransform}

```cpp
MLResult MLSnapshotGetTransform(
    const MLSnapshot * snapshot,
    const MLCoordinateFrameUID * id,
    MLTransform * out_transform
)
```

Get transform between world origin and the coordinate frame "id. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) * |snapshot|A snapshot of tracker state. Can be obtained with [MLPerceptionGetSnapshot()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptiongetsnapshot). |
| const [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) * |id|Look up the transform between the current origin and this coordinate frame id. |
| [MLTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_transform.md) * |out_transform|Valid pointer to a [MLTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_transform.md). To be filled out with requested transform data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain transform due to invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Obtained transform successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PoseNotFound|Coordinate Frame is valid, but not found in the current pose snapshot. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain transform due to internal error.|
**Required Permissions**:

  * None 






-----------

### MLSnapshotGetTransformWithDerivatives {#mlresult-mlsnapshotgettransformwithderivatives}

```cpp
MLResult MLSnapshotGetTransformWithDerivatives(
    const MLSnapshot * snapshot,
    const MLCoordinateFrameUID * id,
    MLTransform * out_transform,
    MLTransformDerivatives * out_derivatives
)
```

Get transform between world origin and the coordinate frame "id as well as any derivatives that have been calculated. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) * |snapshot|A snapshot of tracker state. Can be obtained with [MLPerceptionGetSnapshot()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptiongetsnapshot). |
| const [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) * |id|Look up the transform between the current origin and this coordinate frame id. |
| [MLTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_transform.md) * |out_transform|Valid pointer to a [MLTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_transform.md). To be filled out with requested transform data. |
| [MLTransformDerivatives](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_transform_derivatives.md) * |out_derivatives|Valid pointer to a [MLTransformDerivatives](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_transform_derivatives.md). To be filled out with the derivatives of the transform if available.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain transform due to invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Obtained transform successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PoseNotFound|Coordinate Frame is valid, but not found in the current pose snapshot. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain transform due to internal error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSnapshotResult_DerivativesNotCalculated|Derivatives are not available for the requested coordinate Frame.|
**Required Permissions**:

  * None 





**API Level:**
  * 8




-----------

### MLSnapshotGetPoseInBase {#mlresult-mlsnapshotgetposeinbase}

```cpp
MLResult MLSnapshotGetPoseInBase(
    const MLSnapshot * snapshot,
    const MLCoordinateFrameUID * base_id,
    const MLCoordinateFrameUID * id,
    MLPose * out_pose
)
```

Get transform between coordinate frame 'base_id' and the coordinate frame "id as well as any derivatives that have been calculated. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLSnapshot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#struct-mlsnapshot) * |snapshot|A snapshot of tracker state. Can be obtained with [MLPerceptionGetSnapshot()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlperceptiongetsnapshot). |
| const [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) * |base_id|The coordinate frame in which to locate 'id'. |
| const [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) * |id|The coordinate frame which needs to be located in the base_id coordinate frame. |
| [MLPose](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_pose.md) * |out_pose|Valid pointer to a [MLPose](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_pose.md). To be filled out with requested pose data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain transform due to invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Obtained transform successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PoseNotFound|Coordinate Frame is valid, but not found in the current pose snapshot. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain transform due to internal error.|
**Required Permissions**:

  * None 




```cpp
// Get the CFUID for World Origin
MLSnapshotStaticData snapshot_static_data = {};
MLSnapshotStaticDataInit(&snapshot_static_data);
MLSnapshotGetStaticData(&snapshot_static_data);

// Get the CFUID for Headset Origin
MLHeadTrackingStaticData head_static_data_ = {};
MLHeadTrackingGetStaticData(head_tracker_, &head_static_data_);

// Get the CFUID for left eye
MLEyeTrackingStaticData eye_static_data_ = {};
MLEyeTrackingGetStaticData(eye_tracker_, &eye_static_data_);

MLPose left_eye_center = {};
MLSnapshot *snapshot = nullptr;
bool gaze_in_device_coordinate_frame = true;
MLPerceptionGetSnapshot(&snapshot);
if(gaze_in_device_coordinate_frame) {  // Left eye gaze in device coordinate frame.
  MLSnapshotGetPoseInBase(snapshot, &head_static_data_.coord_frame_head, &eye_static_data_.left_center, &left_eye_center);
}
else {  // Left eye gaze in world origin coordinate frame.
  MLSnapshotGetPoseInBase(snapshot, &snapshot_static_data.coord_world_origin, &eye_static_data_.left_center, &left_eye_center);
}
MLPerceptionReleaseSnapshot(snapshot);
```




**API Level:**
  * 30




-----------

### MLSnapshotGetResultString {#const-char-mlsnapshotgetresultstring}

```cpp
const char * MLSnapshotGetResultString(
    MLResult result_code
)
```

Returns an ASCII string representation for each result code. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |result_code|MLResult type to be converted to string.|
**Required Permissions**:

  * None 


This call returns strings for all of the global MLResult and MLSnapshotResult codes.



**Return**: ASCII string containing readable version of the result code.



-----------






