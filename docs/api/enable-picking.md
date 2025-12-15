# <span class="api-title">enablePicking()</span>

- **类别**：拾取与选中
- **签名**：`enablePicking(callback: ModelInstancePickCallback): void`

在画布上注册左键拾取，使用精确三角形检测，命中后调用回调并记录选中索引。

**示例**
```ts
primitive.enablePicking((inst) => {
  console.log('picked', inst?.id)
})
```

**注意**
- 若已存在事件处理器会先自动清理再绑定。
- 精确拾取在实例较多时会先用包围球预筛，性能随实例数上升，请按需启用。


