# <span class="api-title">setLoopTransitionDuration()</span>

- **类别**：动画
- **签名**：`setLoopTransitionDuration(duration: number): void`

设置循环动画结束前的平滑过渡时长（秒）。默认 0.3，设为 0 则使用硬切换。

**示例**
```ts
primitive.setLoopTransitionDuration(0.5) // 末尾 0.5s 淡入到首帧
```

**注意**
- 内部对值执行 `Math.max(0, duration)`，避免负数。
- 平滑过渡对四元数旋转使用 SLERP，其余通道线性插值。


