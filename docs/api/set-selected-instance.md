# <span class="api-title">setSelectedInstance()</span>

- **类别**：拾取与选中
- **签名**：`setSelectedInstance(instanceId: string | null): void`

按实例 `id` 记录当前选中项，传 `null` 取消选中。

**示例**
```ts
primitive.setSelectedInstance('tree-1')
```

**注意**
- 找不到对应 `id` 时会打印警告并清空选中。
- 仅修改内部索引，不触发回调；需要回调时可结合 `enablePicking`。


