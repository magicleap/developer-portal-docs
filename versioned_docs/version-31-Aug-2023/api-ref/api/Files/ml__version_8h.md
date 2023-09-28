---
title: ml_version.h

---

# ml_version.h



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MLSDK_VERSION_MAJOR](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__version_8h.md#defines-mlsdk-version-major)**  |
|  | **[MLSDK_VERSION_MINOR](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__version_8h.md#defines-mlsdk-version-minor)**  |
|  | **[MLSDK_VERSION_REVISION](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__version_8h.md#defines-mlsdk-version-revision)**  |
|  | **[MLSDK_VERSION_BUILD_ID](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__version_8h.md#defines-mlsdk-version-build-id)**  |
|  | **[MLSDK_STRINGIFYX](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__version_8h.md#defines-mlsdk-stringifyx)**(x)  |
|  | **[MLSDK_STRINGIFY](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__version_8h.md#defines-mlsdk-stringify)**(x)  |
|  | **[MLSDK_VERSION_NAME](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__version_8h.md#defines-mlsdk-version-name)**  |





## Macros Documentation

### MLSDK_VERSION_MAJOR {#defines-mlsdk-version-major}

```cpp
#define MLSDK_VERSION_MAJOR 0
```






-----------

### MLSDK_VERSION_MINOR {#defines-mlsdk-version-minor}

```cpp
#define MLSDK_VERSION_MINOR 0
```






-----------

### MLSDK_VERSION_REVISION {#defines-mlsdk-version-revision}

```cpp
#define MLSDK_VERSION_REVISION 0
```






-----------

### MLSDK_VERSION_BUILD_ID {#defines-mlsdk-version-build-id}

```cpp
#define MLSDK_VERSION_BUILD_ID "0"
```






-----------

### MLSDK_STRINGIFYX {#defines-mlsdk-stringifyx}

```cpp
#define MLSDK_STRINGIFYX(
    x
)
MLSDK_STRINGIFY(x)
```


**Parameters**

|  |   |   |
|--|--|--|
|  |x||




-----------

### MLSDK_STRINGIFY {#defines-mlsdk-stringify}

```cpp
#define MLSDK_STRINGIFY(
    x
)
#x
```


**Parameters**

|  |   |   |
|--|--|--|
|  |x||




-----------

### MLSDK_VERSION_NAME {#defines-mlsdk-version-name}

```cpp
#define MLSDK_VERSION_NAME MLSDK_STRINGIFYX(MLSDK_VERSION_MAJOR) \
  "." MLSDK_STRINGIFYX(MLSDK_VERSION_MINOR) \
  "." MLSDK_STRINGIFYX(MLSDK_VERSION_REVISION) \
  "." MLSDK_VERSION_BUILD_ID
```






-----------

## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2017 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement,
// located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying
// this distribution may also be found in the top-level NOTICE file
// appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

#pragma once

#define MLSDK_VERSION_MAJOR 0
#define MLSDK_VERSION_MINOR 0
#define MLSDK_VERSION_REVISION 0
#define MLSDK_VERSION_BUILD_ID "0"
#define MLSDK_STRINGIFYX(x) MLSDK_STRINGIFY(x)
#define MLSDK_STRINGIFY(x) #x
#define MLSDK_VERSION_NAME \
  MLSDK_STRINGIFYX(MLSDK_VERSION_MAJOR) \
  "." MLSDK_STRINGIFYX(MLSDK_VERSION_MINOR) \
  "." MLSDK_STRINGIFYX(MLSDK_VERSION_REVISION) \
  "." MLSDK_VERSION_BUILD_ID
```




