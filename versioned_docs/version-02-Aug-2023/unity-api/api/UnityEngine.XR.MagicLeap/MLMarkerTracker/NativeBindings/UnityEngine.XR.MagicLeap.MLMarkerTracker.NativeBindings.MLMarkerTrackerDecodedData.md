---
title: MLMarkerTrackerDecodedData
summary: represents the decoded data encoded in the marker. markers can encode binary data, strings, urls and more. this struct represents the decoded data read from a marker. 

---

# MLMarkerTrackerDecodedData




Represents the decoded data encoded in the marker. Markers can encode binary data, strings, URLs and more. This struct represents the decoded data read from a marker.   





## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### Data {#readonly-intptr-data}

Data field contents depends on the selected detector. The Data's Type field indicates which structure this actually contains. 

```csharp

public readonly IntPtr Data;

```






-----------

### Size {#readonly-uint-size}

Length of the decoded data. 

```csharp

public readonly uint Size;

```






-----------


