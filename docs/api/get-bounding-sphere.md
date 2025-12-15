# <span class="api-title">getBoundingSphere()</span>

- **类别**：阴影与包围球
- **签名**：`getBoundingSphere(): Cesium.BoundingSphere`

返回实例化模型的整体包围球，可用于相机定位或裁剪调试。

**示例**
```ts
const sphere = primitive.getBoundingSphere()
viewer.camera.flyToBoundingSphere(sphere)
```

**注意**
- 包围球在 `loadModel()` 与实例矩阵更新时维护，确保模型已加载。


