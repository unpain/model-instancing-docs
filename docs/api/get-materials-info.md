# <span class="api-title">getMaterialsInfo()</span>

- **类别**：材质
- **签名**：`getMaterialsInfo(): MaterialInfo[]`

提取每个材质的名称、纹理通道、PBR 参数等详细信息，适合在 UI 中展示材质列表。

**示例**
```ts
const materials = primitive.getMaterialsInfo()
console.log(materials)
```

**注意**
- 模型未加载时返回空数组。
- 数据来源于 glTF 材质定义，未做额外推断。


