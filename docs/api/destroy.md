# <span class="api-title">destroy()</span>

- **类别**：生命周期
- **签名**：`destroy(): void`

释放所有 GPU 资源（VAO、纹理、动画纹理、拾取事件等）并清空实例列表。

**示例**
```ts
viewer.scene.primitives.remove(primitive)
primitive.destroy()
```

**注意**
- 若使用了临时 Blob 纹理 URL，会在销毁时调用 `URL.revokeObjectURL`。
- 调用后实例数组会被清空；若需再次使用请重新构造并加载模型。


