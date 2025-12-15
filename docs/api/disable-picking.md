# <span class="api-title">disablePicking()</span>

- **类别**：拾取与选中
- **签名**：`disablePicking(): void`

销毁内部 `ScreenSpaceEventHandler`，停止拾取并释放事件监听。

**示例**
```ts
primitive.disablePicking()
```

**注意**
- 建议在页面卸载或不需要交互时调用，避免额外的拾取计算。


