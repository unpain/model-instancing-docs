# <span class="api-title">getInstances()</span>

- **类别**：实例管理
- **签名**：`getInstances(): ModelInstanceData[]`

返回内部实例数组的引用，可直接修改元素后调用 `updateInstanceMatrices()` 推送到 GPU。

**示例**
```ts
const list = primitive.getInstances()
list[0].matrix = Cesium.Matrix4.multiplyByTranslation(
  list[0].matrix,
  new Cesium.Cartesian3(0, 0, 2),
  new Cesium.Matrix4()
)
primitive.updateInstanceMatrices()
```

**注意**
- 返回值为同一个数组引用，修改即生效；需要自行维护索引与 `id` 唯一。
- 若删除元素，请确保更新其他索引相关逻辑。


