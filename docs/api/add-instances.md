# <span class="api-title">addInstances()</span>

- **类别**：实例管理
- **签名**：`addInstances(list: ModelInstanceData[]): void`

批量添加实例，性能优于逐个推入。追加后同样需要调用 `updateInstanceMatrices()`。

**示例**
```ts
primitive.addInstances([
  { id: 'tree-1', matrix: Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(120, 30)) },
  { id: 'tree-2', matrix: Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(120.001, 30.001)) }
])
primitive.updateInstanceMatrices()
```

**注意**
- 输入数组会被直接展开存入内部状态；修改返回值需再次同步。
- 适合初次批量加载或一次性追加大量实例。


