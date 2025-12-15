# <span class="api-title">getSelectedInstance()</span>

- **类别**：拾取与选中
- **签名**：`getSelectedInstance(): ModelInstanceData | null`

根据内部选中索引返回对应实例数据，未选中时返回 `null`。

**示例**
```ts
const inst = primitive.getSelectedInstance()
if (inst) {
  console.log(inst.id)
}
```

**注意**
- 返回引用可直接修改，如需同步到 GPU 请调用 `updateInstanceMatrices()`。


