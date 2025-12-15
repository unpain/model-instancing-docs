# <span class="api-title">setAnimationUpdateInterval()</span>

- **类别**：动画
- **签名**：`setAnimationUpdateInterval(interval: number): void`

控制动画纹理与骨骼更新的帧间隔。`interval` 为 1 表示每帧更新，2/3 可隔帧以提升性能。

**示例**
```ts
primitive.setAnimationUpdateInterval(2) // 隔一帧更新
```

**注意**
- 内部会对值取 `Math.max(1, floor(interval))`，因此不会小于 1。
- 过大间隔可能导致动画卡顿，请结合场景平衡性能。


