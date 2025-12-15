# 快速开始

快速将 Model Instancing 接入到 Cesium 项目，并一眼看到全部 API 入口。

## 1) 引入与创建
```ts
import * as Cesium from 'cesium'
import { ModelInstancedPrimitive, type ModelInstanceData } from '@/utils/modelInstancing'

const instances: ModelInstanceData[] = [
  {
    id: 'tree-1',
    matrix: Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(120, 30)),
    animationIndex: 0,
    animationSpeed: 1,
    morphWeights: [0, 1, 0]
  }
]

const primitive = new ModelInstancedPrimitive(viewer, '/models/tree.glb')
await primitive.loadModel()
primitive.addInstances(instances)
viewer.scene.primitives.add(primitive)
```

## 2) 更新、拾取与高亮
```ts
// 移动实例并推送到 GPU
instances[0].matrix = Cesium.Matrix4.multiplyByTranslation(
  instances[0].matrix,
  new Cesium.Cartesian3(0, 0, 2),
  new Cesium.Matrix4()
)
primitive.updateInstanceMatrices()

// 拾取
primitive.enablePicking((inst) => console.log('picked', inst?.id))

// 选中高亮
primitive.setSelectionColor(Cesium.Color.YELLOW.withAlpha(0.8))
primitive.setSelectionWidth(2.5)
```

## 3) 常用性能配置
- 设置动画隔帧更新：`setAnimationUpdateInterval(2)`
- 平滑循环时长：`setLoopTransitionDuration(0.3)`
- RTC 自适应中心、开启/关闭阴影：`setCastShadows` / `setReceiveShadows`
- 开启包围球调试：`setShowBoundingSphere(true)`

## API 全量入口（默认展开）
以下分组直接链接到对应文档，便于快速跳转：

- 概览：[`ModelInstancedPrimitive`](/api/)
- 构造与资源：[`constructor`](/api/constructor)、[`loadModel`](/api/load-model)
- 实例管理：[`addInstance`](/api/add-instance)、[`addInstances`](/api/add-instances)、[`getInstances`](/api/get-instances)、[`updateInstanceMatrix`](/api/update-instance-matrix)、[`updateInstanceMatricesBatch`](/api/update-instance-matrices-batch)、[`updateInstanceMatrices`](/api/update-instance-matrices)
- 动画：[`getAnimations`](/api/get-animations)、[`getAnimationsInfo`](/api/get-animations-info)、[`playAnimation`](/api/play-animation)、[`pauseAnimation`](/api/pause-animation)、[`setAnimationUpdateInterval`](/api/set-animation-update-interval)、[`setLoopTransitionDuration`](/api/set-loop-transition-duration)、[`getLoopTransitionDuration`](/api/get-loop-transition-duration)、[`setInstanceAnimation`](/api/set-instance-animation)、[`setAllInstancesAnimation`](/api/set-all-instances-animation)
- 拾取与选中：[`enablePicking`](/api/enable-picking)、[`disablePicking`](/api/disable-picking)、[`setSelectedInstance`](/api/set-selected-instance)、[`setSelectedInstanceByIndex`](/api/set-selected-instance-by-index)、[`clearSelection`](/api/clear-selection)、[`getSelectedInstanceIndex`](/api/get-selected-instance-index)、[`getSelectedInstance`](/api/get-selected-instance)、[`setSelectionColor`](/api/set-selection-color)、[`setSelectionWidth`](/api/set-selection-width)
- 阴影与包围球：[`getBoundingSphere`](/api/get-bounding-sphere)、[`setShowBoundingSphere`](/api/set-show-bounding-sphere)、[`getShowBoundingSphere`](/api/get-show-bounding-sphere)、[`setCastShadows`](/api/set-cast-shadows)、[`getCastShadows`](/api/get-cast-shadows)、[`setReceiveShadows`](/api/set-receive-shadows)、[`getReceiveShadows`](/api/get-receive-shadows)
- 材质：[`getMaterialsInfo`](/api/get-materials-info)、[`getMaterialsSummary`](/api/get-materials-summary)
- 生命周期：[`destroy`](/api/destroy)、[`isDestroyed`](/api/is-destroyed)

## 需要更多？
- [查看完整示例与注意事项](/api/)
- [返回首页](/)

