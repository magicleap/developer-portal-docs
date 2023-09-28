---
title: ConvexHullGenerator

---

# ConvexHullGenerator










## Public Methods

### void GiftWrap {#void-giftwrap}

Computes a convex hull using the Gift Wrap method. 

```csharp
public static void GiftWrap(
    NativeArray< Vector2 > points,
    Allocator allocator,
    ref NativeArray< Vector2 > convexHullOut
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| NativeArray&lt; Vector2 &gt; |points||
| Allocator |allocator||
| ref NativeArray&lt; Vector2 &gt; |convexHullOut||






**Returns**: 



-----------

### void GrahamScan {#void-grahamscan}

```csharp
public static void GrahamScan(
    NativeArray< Vector2 > points,
    Allocator allocator,
    ref NativeArray< Vector2 > convexHullOut
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| NativeArray&lt; Vector2 &gt; |points||
| Allocator |allocator||
| ref NativeArray&lt; Vector2 &gt; |convexHullOut||






-----------


