# <span class="api-title">setInstanceAnimation()</span>

- **类别**：动画
- **签名**：`setInstanceAnimation(instanceId: string, animationIndex: number, time?: number): void`

为指定 `id` 的实例设置动画索引与起始时间（默认 0 秒）。

**示例**
```ts
primitive.setInstanceAnimation('npc-1', 1, 0.5)
```

**注意**
- 未找到对应实例时会打印警告并清空选择。
- 不校验动画索引有效性，请确保 `animationIndex` 在 `getAnimations()` 范围内。


