# <span class="api-title">loadModel()</span>

- **类别**：构造与资源
- **签名**：`async loadModel(): Promise<void>`

解析 GLB / glTF，提取几何、材质、动画与纹理，并准备 GPU 资源。将 primitive 添加到场景前必须调用。

**示例**
```ts
const primitive = new ModelInstancedPrimitive(viewer, '/models/robot.glb')
primitive.addInstances(instances)
await primitive.loadModel()
viewer.scene.primitives.add(primitive)
```

**注意**
- 异常会直接抛出（如模型过小、解析失败），外层可用 `try/catch`。
- 会预先提取动画数据，再解析几何，确保着色器能按动画特性编译。
- 解析完成后可调用材质与动画相关接口。


