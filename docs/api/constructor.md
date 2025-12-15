# <span class="api-title">new ModelInstancedPrimitive()</span>

- **类别**：构造与资源
- **签名**：`new ModelInstancedPrimitive(viewer: Cesium.Viewer, modelUrl: string)`

创建实例化渲染器，默认启用多 mesh 支持与阴影。构造后需调用 `loadModel()` 再加入场景。

**参数**
- `viewer`：已有的 Cesium `Viewer`。
- `modelUrl`：glTF/GLB 地址，支持本地与远程。

**最小示例**
```ts
const primitive = new ModelInstancedPrimitive(viewer, '/models/tree.glb')
primitive.addInstances(instances)
await primitive.loadModel()
viewer.scene.primitives.add(primitive)
```

**注意**
- 仅保存 URL，不会立即发起网络请求。
- 构造时会初始化包围球与内部状态，避免重复创建。


