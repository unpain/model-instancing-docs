# <span class="api-title">setSelectionWidth()</span>

- **类别**：拾取与选中
- **签名**：`setSelectionWidth(width: number): void`

设置选中描边强度（0~1）。默认 0.4。

**示例**
```ts
primitive.setSelectionWidth(0.6)
```

**注意**
- 内部会将数值截断到 `[0, 1]` 范围。
- 仅影响高亮效果，不改变拾取逻辑。


