---
title: MLMediaDRMEventCallbacks
summary: callbacks for notifying client about mlmediadrm events. 

---

# MLMediaDRMEventCallbacks

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



Callbacks for notifying client about MLMediaDRM events.  [More...](#detailed-description)


`#include <ml_media_drm.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md#uint32-t-version)**  |
| void(*)(MLHandle media_drm, const MLMediaDRMEventInfo *event_info) | **[on_event](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md#void-on-event)** <br></br>This callback function is invoked when specific MLMediaDrm events happen.  |
| void(*)(MLHandle media_drm, const MLMediaDRMExpirationUpdateInfo *update_info) | **[on_expiration_update](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md#void-on-expiration-update)** <br></br>This callback function is invoked when a drm session expiration update occurs.  |
| void(*)(MLHandle media_drm, const MLMediaDRMKeyStatusInfo *key_status_info) | **[on_key_status_change](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_callbacks.md#void-on-key-status-change)** <br></br>This callback function is invoked when the keys in a drm session change states.  |

## Detailed Description

```cpp
struct MLMediaDRMEventCallbacks;
```

Callbacks for notifying client about MLMediaDRM events. 

User of MLMediaDRM should implement this.




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### on_event {#void-on-event}

```cpp
void(*)(MLHandle media_drm, const MLMediaDRMEventInfo *event_info) on_event;
```

This callback function is invoked when specific MLMediaDrm events happen. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_drm, const MLMediaDRMEventInfo *event_info) | )(MLHandle media_drm, const MLMediaDRMEventInfo *event_info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_drm|MediaDRM instance on which callback was set. |
|  |event_info|MediaDRM info as [MLMediaDRMEventInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_info.md). |




-----------

### on_expiration_update {#void-on-expiration-update}

```cpp
void(*)(MLHandle media_drm, const MLMediaDRMExpirationUpdateInfo *update_info) on_expiration_update;
```

This callback function is invoked when a drm session expiration update occurs. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_drm, const MLMediaDRMExpirationUpdateInfo *update_info) | )(MLHandle media_drm, const MLMediaDRMExpirationUpdateInfo *update_info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_drm|MediaDRM instance on which callback was set. |
|  |update_info|Updated session info as [MLMediaDRMEventInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_event_info.md). |
If this callback is not defined, then MLMediaDRMEventType_ExpirationUpdate event is notified through on_event callback, without the expiration time.





-----------

### on_key_status_change {#void-on-key-status-change}

```cpp
void(*)(MLHandle media_drm, const MLMediaDRMKeyStatusInfo *key_status_info) on_key_status_change;
```

This callback function is invoked when the keys in a drm session change states. 


| Type | Description |
|--|--|
| void(*)(MLHandle media_drm, const MLMediaDRMKeyStatusInfo *key_status_info) | )(MLHandle media_drm, const MLMediaDRMKeyStatusInfo *key_status_info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |media_drm|MediaDRM instance on which callback was set. |
|  |key_status_info|Changed key status as [MLMediaDRMKeyStatusInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_d_r_m_key_status_info.md). |
If this callback is not defined, then MLMediaDRMEventType_KeysChange event is notified through on_event callback, without the key(s) status information.





-----------


