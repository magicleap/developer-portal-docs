---
title: Time
summary: apis for the mltime. 

---

# Time

APIs for the MLTime.  [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLTimeConvertMLTimeToSystemTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___time/group___time.md#mlresult-mltimeconvertmltimetosystemtime)**([MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) ml_time, struct timespec * out_timespec_time)<br></br>Converts timestamps from MLTime to system time.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLTimeConvertSystemTimeToMLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___time/group___time.md#mlresult-mltimeconvertsystemtimetomltime)**(const struct timespec * timespec_time, [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) * out_ml_time)<br></br>Converts timestamps from system time to MLTime.  |

## Detailed Description

APIs for the MLTime. 



```cpp
timespec time_spec{};
clock_gettime(CLOCK_MONOTONIC, &time_spec);
MLTime converted_ml_time{};
if (MLResult_Ok != MLTimeConvertSystemTimeToMLTime(&time_spec, &converted_ml_time)) {
  ML_LOG_ERROR("Failed to convert to MLTime timestamp");
}
```




**Shared Object:**
  * perception.magicleap*




-----------


## Functions Documentation

### MLTimeConvertMLTimeToSystemTime {#mlresult-mltimeconvertmltimetosystemtime}

```cpp
MLResult MLTimeConvertMLTimeToSystemTime(
    MLTime ml_time,
    struct timespec * out_timespec_time
)
```

Converts timestamps from MLTime to system time. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) |ml_time|Timestamp received from elsewhere in the ML system. |
| struct timespec * |out_timespec_time|Pointer to a converted equivalent timestamp as if received from clock_gettime using CLOCK_MONOTONIC.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully converted timestamp. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NULL passed for timespec_time. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to convert timestamp with unknown error.|
**Required Permissions**:

  * None 


See [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) for more details. System time is equivalent to the systems monotonic clock. This can be used to calculate duration between two MLTime values by converting them both to a timespec and subtracting the subsequent values.




**API Level:**
  * 20




-----------

### MLTimeConvertSystemTimeToMLTime {#mlresult-mltimeconvertsystemtimetomltime}

```cpp
MLResult MLTimeConvertSystemTimeToMLTime(
    const struct timespec * timespec_time,
    MLTime * out_ml_time
)
```

Converts timestamps from system time to MLTime. 

**Parameters**

|  |   |   |
|--|--|--|
| const struct timespec * |timespec_time|System clock timestamp as received from clock_gettime using CLOCK_MONOTONIC. |
| [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) * |out_ml_time|Pointer to system timestamp equivalent in MLTime.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully converted timestamp. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NULL passed for ml_time. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to convert timespec with unknown error.|
**Required Permissions**:

  * None 


See [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) for more details. System time is equivalent to the systems monotonic clock.




**API Level:**
  * 20




-----------






