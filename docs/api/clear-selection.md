# <span class="api-title">clearSelection()</span>

- **类别**：拾取与选中
- **签名**：`clearSelection(): void`

清除当前选中状态，将内部索引设为 `-1`。

**示例**
```ts
primitive.clearSelection()
```

**注意**
- 不会触发拾取回调，仅修改内部状态。


