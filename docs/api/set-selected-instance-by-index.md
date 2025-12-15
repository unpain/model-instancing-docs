# <span class="api-title">setSelectedInstanceByIndex()</span>

- **类别**：拾取与选中
- **签名**：`setSelectedInstanceByIndex(instanceIndex: number): void`

直接按索引记录当前选中实例，传 `-1` 可清空。

**示例**
```ts
primitive.setSelectedInstanceByIndex(0)
```

**注意**
- 越界索引会被重置为未选中并输出警告。
- 常与 UI 列表联动：点击列表项后调用本方法。


