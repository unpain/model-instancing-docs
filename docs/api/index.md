# ModelInstancedPrimitive API

快速导航到各功能组的单独方法页，并给出常用起步示例。

## 快速开始

```ts
import { ModelInstancedPrimitive } from '@/utils/modelInstancing'

const primitive = new ModelInstancedPrimitive(viewer, '/models/tree.glb')
primitive.addInstances(instances)
await primitive.loadModel()
viewer.scene.primitives.add(primitive)
```

## 分组导航

- **构造与资源**
  - [`new ModelInstancedPrimitive`](./constructor.md)
  - [`loadModel`](./load-model.md)
- **实例管理**
  - [`addInstance`](./add-instance.md)
  - [`addInstances`](./add-instances.md)
  - [`getInstances`](./get-instances.md)
  - [`updateInstanceMatrix`](./update-instance-matrix.md)
  - [`updateInstanceMatricesBatch`](./update-instance-matrices-batch.md)
  - [`updateInstanceMatrices`](./update-instance-matrices.md)
- **动画**
  - [`getAnimations`](./get-animations.md)
  - [`getAnimationsInfo`](./get-animations-info.md)
  - [`playAnimation`](./play-animation.md)
  - [`pauseAnimation`](./pause-animation.md)
  - [`setAnimationUpdateInterval`](./set-animation-update-interval.md)
  - [`setLoopTransitionDuration`](./set-loop-transition-duration.md)
  - [`getLoopTransitionDuration`](./get-loop-transition-duration.md)
  - [`setInstanceAnimation`](./set-instance-animation.md)
  - [`setAllInstancesAnimation`](./set-all-instances-animation.md)
- **拾取与选中**
  - [`enablePicking`](./enable-picking.md)
  - [`disablePicking`](./disable-picking.md)
  - [`setSelectedInstance`](./set-selected-instance.md)
  - [`setSelectedInstanceByIndex`](./set-selected-instance-by-index.md)
  - [`clearSelection`](./clear-selection.md)
  - [`getSelectedInstanceIndex`](./get-selected-instance-index.md)
  - [`getSelectedInstance`](./get-selected-instance.md)
  - [`setSelectionColor`](./set-selection-color.md)
  - [`setSelectionWidth`](./set-selection-width.md)
- **阴影与包围球**
  - [`getBoundingSphere`](./get-bounding-sphere.md)
  - [`setShowBoundingSphere`](./set-show-bounding-sphere.md)
  - [`getShowBoundingSphere`](./get-show-bounding-sphere.md)
  - [`setCastShadows`](./set-cast-shadows.md)
  - [`getCastShadows`](./get-cast-shadows.md)
  - [`setReceiveShadows`](./set-receive-shadows.md)
  - [`getReceiveShadows`](./get-receive-shadows.md)
- **材质**
  - [`getMaterialsInfo`](./get-materials-info.md)
  - [`getMaterialsSummary`](./get-materials-summary.md)
- **生命周期**
  - [`destroy`](./destroy.md)
  - [`isDestroyed`](./is-destroyed.md)

## 常用类型速览

- `ModelInstanceData`
  - `id: string`、`matrix: Cesium.Matrix4`（必填）
  - `name?`、`properties?` 自定义元数据
  - 动画：`animationIndex?`、`animationTime?`、`animationSpeed?`、`animationLoop?`
  - Morph：`morphWeights?: number[]`
- `ModelInstancePickCallback = (instance: ModelInstanceData | null) => void`

## 典型组合

- **批量更新矩阵**：修改 `getInstances()` 返回的数组后执行 `updateInstanceMatrices()`。
- **性能优化**：动画场景可用 `setAnimationUpdateInterval(2)` 隔帧更新。
- **拾取与高亮**：`enablePicking(cb)` + `setSelectionColor()` / `setSelectionWidth()`。

## 本地预览与自查

1. 安装依赖（任选）：`pnpm install` / `npm install`。
2. 启动文档站点：`pnpm dev` 或 `npm run dev`，访问终端提示的地址。
3. 检查侧边栏分组是否完整、方法页标题是否应用品牌色加粗（`api-title`）。
4. 随机抽查方法页，核对签名、示例与参数描述是否与代码一致。

