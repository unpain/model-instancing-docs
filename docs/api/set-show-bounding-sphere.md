# <span class="api-title">setShowBoundingSphere()</span>

- **类别**：阴影与包围球
- **签名**：`setShowBoundingSphere(show: boolean): void`

控制是否在场景中可视化包围球，便于调试裁剪范围。

**示例**
```ts
primitive.setShowBoundingSphere(true)
```

**注意**
- 关闭时会移除已创建的包围球实体并重置缓存半径。
- 开启后会在每次更新时重新计算，实例多时可能略有开销。


