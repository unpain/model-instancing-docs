# <span class="api-title">addInstance()</span>

- **类别**：实例管理
- **签名**：`addInstance(instance: ModelInstanceData): void`

向内部实例数组追加一个实例，随后需要调用 `updateInstanceMatrices()` 将矩阵写入 GPU。

**参数**
- `instance`：至少包含 `id` 与 `matrix`，可带动画或自定义属性。

**示例**
```ts
primitive.addInstance({
  id: 'tree-1',
  matrix: Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(120, 30))
})
primitive.updateInstanceMatrices()
```

**注意**
- 不做去重校验，请自行保证 `id` 唯一。
- 若使用动画，请提前设置 `animationIndex` / `animationSpeed`。


