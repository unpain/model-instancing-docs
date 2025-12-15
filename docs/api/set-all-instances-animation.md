# <span class="api-title">setAllInstancesAnimation()</span>

- **类别**：动画
- **签名**：`setAllInstancesAnimation(animationIndex: number, randomOffset?: boolean): void`

为所有实例统一设置动画索引，可选随机起始时间以降低同步感。

**示例**
```ts
primitive.setAllInstancesAnimation(0, true) // 为所有实例播放动画0并随机起点
```

**注意**
- 若索引越界会打印警告并返回。
- `randomOffset` 为 `true` 时起始时间落在动画时长内，适合大规模群体动画。


