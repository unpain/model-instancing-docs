# <span class="api-title">getSelectedInstanceIndex()</span>

- **类别**：拾取与选中
- **签名**：`getSelectedInstanceIndex(): number`

返回当前选中的实例索引，未选中时为 `-1`。

**示例**
```ts
const idx = primitive.getSelectedInstanceIndex()
```

**注意**
- 索引对应 `getInstances()` 的顺序，如有删除请同步调整。


