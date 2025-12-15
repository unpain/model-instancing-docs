# <span class="api-title">playAnimation()</span>

- **类别**：动画
- **签名**：`playAnimation(): void`

设置动画全局播放开关为开启，下一帧起继续累积时间。

**示例**
```ts
primitive.playAnimation()
```

**注意**
- 不会重置各实例的起始时间，仅恢复播放状态。
- 若模型含骨骼但无节点动画，内部会输出调试警告。


