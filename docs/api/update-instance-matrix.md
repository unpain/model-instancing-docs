# <span class="api-title">updateInstanceMatrix()</span>

- **类别**：实例管理
- **签名**：`updateInstanceMatrix(index: number, matrix: Cesium.Matrix4): void`

用新矩阵覆盖指定索引的实例（仅更新内存）。需要随后调用 `updateInstanceMatrices()` 将变更写入 GPU。

**示例**
```ts
primitive.updateInstanceMatrix(0, Cesium.Matrix4.IDENTITY)
primitive.updateInstanceMatrices()
```

**注意**
- 仅在索引有效时生效，越界调用会被忽略。
- 若使用 `id` 作为主键，可结合 `findIndex` 查到对应索引后再调用。


