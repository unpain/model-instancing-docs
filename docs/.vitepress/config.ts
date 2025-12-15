import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Model Instancing',
  description: 'Cesium GPU 实例化工具使用说明',
  themeConfig: {
    nav: [
      { text: '指南', link: '/' },
      { text: '文档', link: '/quickstart' },
      { text: 'API', link: '/api/' }
    ],
    sidebar: {
      '/api/': [
        {
          text: '概览',
          items: [
            { text: 'ModelInstancedPrimitive', link: '/api/' }
          ]
        },
        {
          text: '构造与资源',
          items: [
            { text: 'new ModelInstancedPrimitive', link: '/api/constructor' },
            { text: 'loadModel', link: '/api/load-model' }
          ]
        },
        {
          text: '实例管理',
          items: [
            { text: 'addInstance', link: '/api/add-instance' },
            { text: 'addInstances', link: '/api/add-instances' },
            { text: 'getInstances', link: '/api/get-instances' },
            { text: 'updateInstanceMatrix', link: '/api/update-instance-matrix' },
            { text: 'updateInstanceMatricesBatch', link: '/api/update-instance-matrices-batch' },
            { text: 'updateInstanceMatrices', link: '/api/update-instance-matrices' }
          ]
        },
        {
          text: '动画',
          items: [
            { text: 'getAnimations', link: '/api/get-animations' },
            { text: 'getAnimationsInfo', link: '/api/get-animations-info' },
            { text: 'playAnimation', link: '/api/play-animation' },
            { text: 'pauseAnimation', link: '/api/pause-animation' },
            { text: 'setAnimationUpdateInterval', link: '/api/set-animation-update-interval' },
            { text: 'setLoopTransitionDuration', link: '/api/set-loop-transition-duration' },
            { text: 'getLoopTransitionDuration', link: '/api/get-loop-transition-duration' },
            { text: 'setInstanceAnimation', link: '/api/set-instance-animation' },
            { text: 'setAllInstancesAnimation', link: '/api/set-all-instances-animation' }
          ]
        },
        {
          text: '拾取与选中',
          items: [
            { text: 'enablePicking', link: '/api/enable-picking' },
            { text: 'disablePicking', link: '/api/disable-picking' },
            { text: 'setSelectedInstance', link: '/api/set-selected-instance' },
            { text: 'setSelectedInstanceByIndex', link: '/api/set-selected-instance-by-index' },
            { text: 'clearSelection', link: '/api/clear-selection' },
            { text: 'getSelectedInstanceIndex', link: '/api/get-selected-instance-index' },
            { text: 'getSelectedInstance', link: '/api/get-selected-instance' },
            { text: 'setSelectionColor', link: '/api/set-selection-color' },
            { text: 'setSelectionWidth', link: '/api/set-selection-width' }
          ]
        },
        {
          text: '阴影与包围球',
          items: [
            { text: 'getBoundingSphere', link: '/api/get-bounding-sphere' },
            { text: 'setShowBoundingSphere', link: '/api/set-show-bounding-sphere' },
            { text: 'getShowBoundingSphere', link: '/api/get-show-bounding-sphere' },
            { text: 'setCastShadows', link: '/api/set-cast-shadows' },
            { text: 'getCastShadows', link: '/api/get-cast-shadows' },
            { text: 'setReceiveShadows', link: '/api/set-receive-shadows' },
            { text: 'getReceiveShadows', link: '/api/get-receive-shadows' }
          ]
        },
        {
          text: '材质',
          items: [
            { text: 'getMaterialsInfo', link: '/api/get-materials-info' },
            { text: 'getMaterialsSummary', link: '/api/get-materials-summary' }
          ]
        },
        {
          text: '生命周期',
          items: [
            { text: 'destroy', link: '/api/destroy' },
            { text: 'isDestroyed', link: '/api/is-destroyed' }
          ]
        }
      ],
      '/': [],
      '/quickstart': [
        {
          text: '文档',
          items: [
            { text: '快速开始', link: '/quickstart' }
          ]
        },
        {
          text: '概览',
          items: [
            { text: 'ModelInstancedPrimitive', link: '/api/' }
          ]
        },
        {
          text: '构造与资源',
          items: [
            { text: 'constructor', link: '/api/constructor' },
            { text: 'loadModel', link: '/api/load-model' }
          ]
        },
        {
          text: '实例管理',
          items: [
            { text: 'addInstance', link: '/api/add-instance' },
            { text: 'addInstances', link: '/api/add-instances' },
            { text: 'getInstances', link: '/api/get-instances' },
            { text: 'updateInstanceMatrix', link: '/api/update-instance-matrix' },
            { text: 'updateInstanceMatricesBatch', link: '/api/update-instance-matrices-batch' },
            { text: 'updateInstanceMatrices', link: '/api/update-instance-matrices' }
          ]
        },
        {
          text: '动画',
          items: [
            { text: 'getAnimations', link: '/api/get-animations' },
            { text: 'getAnimationsInfo', link: '/api/get-animations-info' },
            { text: 'playAnimation', link: '/api/play-animation' },
            { text: 'pauseAnimation', link: '/api/pause-animation' },
            { text: 'setAnimationUpdateInterval', link: '/api/set-animation-update-interval' },
            { text: 'setLoopTransitionDuration', link: '/api/set-loop-transition-duration' },
            { text: 'getLoopTransitionDuration', link: '/api/get-loop-transition-duration' },
            { text: 'setInstanceAnimation', link: '/api/set-instance-animation' },
            { text: 'setAllInstancesAnimation', link: '/api/set-all-instances-animation' }
          ]
        },
        {
          text: '拾取与选中',
          items: [
            { text: 'enablePicking', link: '/api/enable-picking' },
            { text: 'disablePicking', link: '/api/disable-picking' },
            { text: 'setSelectedInstance', link: '/api/set-selected-instance' },
            { text: 'setSelectedInstanceByIndex', link: '/api/set-selected-instance-by-index' },
            { text: 'clearSelection', link: '/api/clear-selection' },
            { text: 'getSelectedInstanceIndex', link: '/api/get-selected-instance-index' },
            { text: 'getSelectedInstance', link: '/api/get-selected-instance' },
            { text: 'setSelectionColor', link: '/api/set-selection-color' },
            { text: 'setSelectionWidth', link: '/api/set-selection-width' }
          ]
        },
        {
          text: '阴影与包围球',
          items: [
            { text: 'getBoundingSphere', link: '/api/get-bounding-sphere' },
            { text: 'setShowBoundingSphere', link: '/api/set-show-bounding-sphere' },
            { text: 'getShowBoundingSphere', link: '/api/get-show-bounding-sphere' },
            { text: 'setCastShadows', link: '/api/set-cast-shadows' },
            { text: 'getCastShadows', link: '/api/get-cast-shadows' },
            { text: 'setReceiveShadows', link: '/api/set-receive-shadows' },
            { text: 'getReceiveShadows', link: '/api/get-receive-shadows' }
          ]
        },
        {
          text: '材质',
          items: [
            { text: 'getMaterialsInfo', link: '/api/get-materials-info' },
            { text: 'getMaterialsSummary', link: '/api/get-materials-summary' }
          ]
        },
        {
          text: '生命周期',
          items: [
            { text: 'destroy', link: '/api/destroy' },
            { text: 'isDestroyed', link: '/api/is-destroyed' }
          ]
        }
      ]
    }
  }
})

