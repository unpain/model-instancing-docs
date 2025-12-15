# <span class="api-title">updateInstanceMatricesBatch()</span>

- **类别**：实例管理
- **签名**：`updateInstanceMatricesBatch(updates: Array<{ index: number; matrix: Cesium.Matrix4 }>): void`

批量更新多个实例矩阵并立即调用 `updateInstanceMatrices()`，适合一次性推送多处变更。

**示例**
```ts
primitive.updateInstanceMatricesBatch([
  { index: 0, matrix: Cesium.Matrix4.IDENTITY },
  { index: 2, matrix: Cesium.Transforms.headingPitchRollToFixedFrame(
      Cesium.Cartesian3.fromDegrees(120, 30, 10),
      new Cesium.HeadingPitchRoll(0.1, 0, 0)
    ) }
])
```

**注意**
- 越界的索引会被跳过，不会抛异常。
- 适合在帧内合并多次移动，减少 GPU 传输次数。


