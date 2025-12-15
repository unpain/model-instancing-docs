# <span class="api-title">getAnimations()</span>

- **类别**：动画
- **签名**：`getAnimations(): Array<{ index: number; name: string; duration: number }>`

返回模型中全部动画的索引、名称与时长，便于构建 UI 选择器。

**示例**
```ts
const options = primitive.getAnimations()
// [{ index: 0, name: 'Idle', duration: 2.4 }, ...]
```

**注意**
- 动画信息来自 `loadModel()` 解析阶段；确保模型已加载。


