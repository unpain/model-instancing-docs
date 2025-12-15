# <span class="api-title">getMaterialsSummary()</span>

- **类别**：材质
- **签名**：`getMaterialsSummary(): { totalMaterials; totalMeshes; materialsWithTextures; pbrMaterials; unlitMaterials }`

返回材质总数、含纹理数量、PBR / Unlit 统计等摘要信息。

**示例**
```ts
const summary = primitive.getMaterialsSummary()
console.log(summary.totalMaterials, summary.pbrMaterials)
```

**注意**
- 模型未加载时返回各项为 0 的默认对象。
- 可用于快速检测资源情况或在控制台打印诊断。


