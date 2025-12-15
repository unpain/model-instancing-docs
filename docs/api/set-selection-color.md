# <span class="api-title">setSelectionColor()</span>

- **类别**：拾取与选中
- **签名**：`setSelectionColor(color: Cesium.Color): void`

设置选中描边颜色（Fresnel 轮廓）。

**示例**
```ts
primitive.setSelectionColor(Cesium.Color.YELLOW.withAlpha(1.0))
```

**注意**
- 颜色作用于内部高亮效果，需配合 `setSelectedInstance*` 选中目标。


