# <span class="api-title">updateInstanceMatrices()</span>

- **类别**：实例管理
- **签名**：`updateInstanceMatrices(): void`

将当前实例矩阵写入 GPU 缓冲区，并重新计算 RTC 中心点。所有位置/旋转/缩放变更后都需要调用。

**示例**
```ts
// 修改实例矩阵后
primitive.updateInstanceMatrices()
```

**注意**
- 内部会执行 Y-up 转 Z-up 的转换并重建矩阵数组。
- 若实例数量为 0 或尚未创建 buffer，则直接返回不做处理。


