# Model Instancing 文档

<div class="home-hero" id="home-hero">
  <div class="home-bg" data-anim="bg"></div>
  <div class="home-glow" aria-hidden="true"></div>
  <div class="pill" data-anim="pill">Cesium GPU Instancing · glTF/GLB</div>
  <h1 class="hero-title" data-anim="title">大规模模型实例化，开箱即用</h1>
  <p class="hero-subtitle" data-anim="subtitle">批量渲染、动画、拾取、高亮、包围球与材质信息，一站式 API。</p>
  <div class="hero-badge" data-anim="badge">
    <div class="badge-icon">⚡</div>
    <div class="badge-text">
      <div class="badge-title">Instancing</div>
      <div class="badge-sub">多 mesh · 多纹理 · 动画就绪</div>
    </div>
  </div>
  <div class="cta-row" data-anim="cta">
    <a class="cta primary" href="/quickstart">🚀 快速开始</a>
    <a class="cta ghost" href="/api/model-instanced-primitive">📚 查看 API</a>
  </div>
  <div class="hero-metrics" data-anim="metrics">
    <div class="metric-card">
      <div class="metric-title">性能优化</div>
      <div class="metric-desc">隔帧动画更新 · RTC 中心点 · 多 mesh 支持</div>
    </div>
    <div class="metric-card">
      <div class="metric-title">交互增强</div>
      <div class="metric-desc">精确三角形拾取 · 选中高亮 · 包围球可视化</div>
    </div>
    <div class="metric-card">
      <div class="metric-title">素材洞察</div>
      <div class="metric-desc">材质摘要 · 纹理通道 · PBR 参数提取</div>
    </div>
  </div>
</div>

## 为什么用它

- 专为 Cesium 批量渲染：`ModelInstancedPrimitive` 支持多 mesh、多纹理通道与动画。
- 高效动画：隔帧更新、循环平滑、骨骼/节点/变形目标全覆盖。
- 完整交互：精确拾取、选中高亮、包围球调试、阴影控制。
- 友好接口：方法分组、独立页面、统一示例与注意事项。

## 能力速览

- 实例管理：添加/批量更新矩阵，RTC 自适应中心。
- 动画控制：全局播放/暂停、单实例或全部实例动画切换。
- 拾取与选中：精准命中回调，选中描边颜色/强度可调。
- 调试工具：包围球可视化、材质摘要、阴影开关。

## 常用技巧

- 批量同步：修改 `getInstances()` 返回的数组后执行 `updateInstanceMatrices()`。
- 动画性能：`setAnimationUpdateInterval(2)` 隔帧更新；`setLoopTransitionDuration` 平滑循环。
- 可视调试：`setShowBoundingSphere(true)` 开启包围球；`setSelectionColor` / `setSelectionWidth` 调整高亮。
- 资源洞察：`getMaterialsInfo()` / `getMaterialsSummary()` 查看材质与纹理分布。

## 更多

- API 分组入口：`/api/model-instanced-primitive`
- 构造与资源：`new ModelInstancedPrimitive` / `loadModel`
- 动画、拾取、阴影、材质、生命周期等详细方法均有独立页面。

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  const prefersReduce = typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduce) return

  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
  tl.from('#home-hero', { opacity: 0, y: 18, duration: 0.9 })
    .from('[data-anim="pill"]', { opacity: 0, y: 10 }, '-=0.5')
    .from('[data-anim="title"]', { opacity: 0, y: 12 }, '-=0.4')
    .from('[data-anim="subtitle"]', { opacity: 0, y: 12 }, '-=0.35')
    .from('[data-anim="cta"] .cta', { opacity: 0, y: 10, stagger: 0.08 }, '-=0.25')

  gsap.from('[data-anim="metrics"] .metric-card', {
    opacity: 0,
    y: 16,
    duration: 0.7,
    stagger: 0.08,
    delay: 0.4,
    ease: 'power2.out'
  })

  gsap.to('[data-anim="bg"]', {
    opacity: 0.9,
    duration: 6,
    y: 12,
    x: 10,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true
  })

  gsap.to('.cta.primary', {
    boxShadow: '0 12px 32px rgba(14, 165, 233, 0.35)',
    duration: 1.6,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
})
</script>
