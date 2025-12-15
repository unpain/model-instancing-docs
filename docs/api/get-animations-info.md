# <span class="api-title">getAnimationsInfo()</span>

- **类别**：动画
- **签名**：`getAnimationsInfo(): Array<{ index; name; duration; channelCount; samplerCount; channels; affectedNodes; hasSkinning; hasMorphTargets }>`

返回包含通道、插值、受影响节点、是否包含骨骼/变形目标等详细信息，适合调试或 UI 细节展示。

**示例**
```ts
const detail = primitive.getAnimationsInfo()
console.table(detail)
```

**注意**
- 若模型无动画，返回空数组。
- 节点名称来自 glTF `nodes`，若缺失会回退为 `Node_x`。


