<h1 class="page-title" data-anim="page-title"><span>ModelInstancing</span></h1>

<div class="home-hero" id="home-hero">
  <div class="home-bg" data-anim="bg"></div>
  <div class="home-glow" aria-hidden="true"></div>
  <div class="pill" data-anim="pill">Cesium GPU Instancing · glTF/GLB</div>
  <h1 class="hero-title" data-anim="title">大规模模型实例化，开箱即用</h1>
  <p class="hero-subtitle" data-anim="subtitle">批量渲染、动画、拾取、高亮、包围球与材质信息，一站式 API。</p>
  <div class="instancing-showcase" data-anim="visual">
    <div class="instancing-label">Instancing Scene</div>
    <div class="instancing-grid"></div>
    <div class="instancing-tracks">
      <div class="orbit-track" style="--r:0"></div>
      <div class="orbit-track" style="--r:1"></div>
      <div class="orbit-track" style="--r:2"></div>
      <div class="orbit-particle"></div>
      <div class="orbit-particle"></div>
    </div>
    <div class="instancing-nodes">
      <!-- 源模型 -->
      <div class="model-node model-node--source" data-anim="cube" style="--i:0">
        <div class="model-mesh model-mesh--source"></div>
        <div class="node-badge">源模型</div>
      </div>
      <!-- 实例（拷贝自源模型） -->
      <div class="model-node model-node--instance" data-anim="cube" style="--i:1">
        <div class="model-mesh model-mesh--instance"></div>
        <div class="node-badge">实例</div>
      </div>
      <div class="model-node model-node--instance" data-anim="cube" style="--i:2">
        <div class="model-mesh model-mesh--instance"></div>
        <div class="node-badge">实例</div>
      </div>
      <div class="model-node model-node--instance" data-anim="cube" style="--i:3">
        <div class="model-mesh model-mesh--instance"></div>
        <div class="node-badge">实例</div>
      </div>
      <div class="model-node model-node--instance" data-anim="cube" style="--i:4">
        <div class="model-mesh model-mesh--instance"></div>
        <div class="node-badge">实例</div>
      </div>
      <div class="model-node model-node--instance" data-anim="cube" style="--i:5">
        <div class="model-mesh model-mesh--instance"></div>
        <div class="node-badge">实例</div>
      </div>
    </div>
    <div class="instancing-orbs">
      <div class="orb" data-anim="orb" style="--o:0"></div>
      <div class="orb" data-anim="orb" style="--o:1"></div>
      <div class="orb" data-anim="orb" style="--o:2"></div>
    </div>
    <div class="instancing-legend">
      <div class="legend-item">
        <span class="legend-dot primary"></span>
        <div>
          <div class="legend-title">批量实例</div>
          <div class="legend-sub">6× mesh / 3× 材质</div>
        </div>
      </div>
      <div class="legend-item">
        <span class="legend-dot secondary"></span>
        <div>
          <div class="legend-title">动画同步</div>
          <div class="legend-sub">隔帧 + 过渡插值</div>
        </div>
      </div>
      <div class="legend-item">
        <span class="legend-dot accent"></span>
        <div>
          <div class="legend-title">拾取反馈</div>
          <div class="legend-sub">三角级命中 + 高亮</div>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-badge" data-anim="badge">
    <div class="badge-icon">⚡</div>
    <div class="badge-text">
      <div class="badge-title">Instancing</div>
      <div class="badge-sub">多 mesh · 多纹理 · 动画就绪</div>
    </div>
  </div>
  <div class="cta-row" data-anim="cta">
    <a class="cta primary" href="/quickstart">🚀 快速开始</a>
    <a class="cta ghost" href="/api/">📚 查看 API</a>
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

- API 分组入口：`/api/`
- 构造与资源：`new ModelInstancedPrimitive` / `loadModel`
- 动画、拾取、阴影、材质、生命周期等详细方法均有独立页面。

<script setup lang="ts">
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

  gsap.from('[data-anim="page-title"]', {
    opacity: 0,
    y: -14,
    duration: 0.9,
    ease: 'power3.out'
  })
  gsap.to('[data-anim="page-title"]', {
    y: -4,
    duration: 2.4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.from('[data-anim="visual"] .instancing-label', {
    opacity: 0,
    y: 10,
    duration: 0.7,
    delay: 0.3
  })

  gsap.from('[data-anim="cube"]', {
    opacity: 0,
    scale: 0.6,
    rotationY: -20,
    rotationX: 12,
    stagger: 0.06,
    delay: 0.25,
    transformOrigin: '50% 50%'
  })

  gsap.to('[data-anim="cube"]', {
    keyframes: [
      { y: -6, x: 6, rotationY: 10, rotationX: -6, duration: 2.2 },
      { y: 4, x: -4, rotationY: -8, rotationX: 4, duration: 2.4 }
    ],
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: (i) => i * 0.05
  })

  gsap.to('[data-anim="orb"]', {
    x: (_, el) => (parseInt(el.style.getPropertyValue('--o')) - 1) * 22,
    y: (_, el) => (parseInt(el.style.getPropertyValue('--o')) - 1) * -16,
    scale: 1.05,
    duration: 2.6,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  const showcase = document.querySelector('.instancing-showcase')
  if (showcase) {
    const nodes = gsap.utils.toArray<HTMLElement>('[data-anim="cube"]')
    const orbs = gsap.utils.toArray<HTMLElement>('[data-anim="orb"]')
    const resetTilt = () => {
      gsap.to(showcase, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.5, ease: 'power2.out' })
      gsap.to(nodes, { x: 0, y: 0, duration: 0.6, ease: 'power2.out' })
      gsap.to(orbs, {
        x: (_, el) => (parseInt(el.style.getPropertyValue('--o')) - 1) * 22,
        y: (_, el) => (parseInt(el.style.getPropertyValue('--o')) - 1) * -16,
        duration: 0.6,
        ease: 'sine.inOut'
      })
    }

    const handleMove = (e: MouseEvent) => {
      const rect = showcase.getBoundingClientRect()
      const dx = (e.clientX - rect.left) / rect.width - 0.5
      const dy = (e.clientY - rect.top) / rect.height - 0.5
      gsap.to(showcase, {
        rotateY: dx * 8,
        rotateX: dy * -8,
        x: dx * 6,
        y: dy * 6,
        duration: 0.35,
        ease: 'power2.out'
      })
      nodes.forEach((node, i) => {
        gsap.to(node, { x: dx * (6 + i), y: dy * (4 + i * 0.5), duration: 0.35, ease: 'power2.out' })
      })
      orbs.forEach((orb, i) => {
        gsap.to(orb, {
          x: (i - 1) * 22 + dx * 10,
          y: (i - 1) * -16 + dy * 10,
          duration: 0.6,
          ease: 'sine.out'
        })
      })
      gsap.to('.orbit-track', {
        rotation: (i) => (i - 1) * 18 + dx * 40 + dy * -30,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
      gsap.to('.orbit-particle', {
        x: (_, idx) => (idx ? 28 : -18) + dx * 26,
        y: (_, idx) => (idx ? 12 : -10) + dy * 22,
        duration: 0.45,
        ease: 'power2.out'
      })
    }

    showcase.addEventListener('mousemove', handleMove)
    showcase.addEventListener('mouseleave', resetTilt)
  }

  gsap.utils.toArray<HTMLElement>('.legend-item').forEach((item) => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, { scale: 1.03, borderColor: 'rgba(56, 189, 248, 0.3)', duration: 0.25 })
    })
    item.addEventListener('mouseleave', () => {
      gsap.to(item, { scale: 1, borderColor: 'rgba(255, 255, 255, 0.05)', duration: 0.3 })
    })
  })

  const handleScroll = () => {
    const progress = Math.min(1, Math.max(0, window.scrollY / window.innerHeight))
    gsap.to('.instancing-orbs', { y: progress * -22, duration: 0.45, ease: 'sine.out' })
    gsap.to('.instancing-grid', { opacity: 0.78 + progress * 0.18, duration: 0.45, ease: 'sine.out' })
    gsap.to('.orbit-track', { rotation: (i) => (i - 1) * 18 + progress * 32, duration: 0.5, ease: 'sine.out' })
    gsap.to('.orbit-particle', {
      x: progress * 18,
      y: progress * -14,
      duration: 0.5,
      ease: 'power1.out'
    })
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
})
</script>

<style scoped>
.page-title {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 22px;
  margin: 4px auto 10px;
  border-radius: 16px;
  background: linear-gradient(120deg, rgba(56, 189, 248, 0.16), rgba(129, 140, 248, 0.2));
  box-shadow:
    0 14px 34px rgba(59, 130, 246, 0.22),
    inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  color: #0f172a;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
}

.page-title::after {
  content: 'GPU Instancing';
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(224, 242, 254, 0.8);
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(14, 165, 233, 0.12);
  box-shadow: inset 0 0 0 1px rgba(14, 165, 233, 0.25);
}

.page-title span {
  background: linear-gradient(120deg, #1e3a8a, #4338ca 50%, #0ea5e9 90%);
  -webkit-background-clip: text;
  color: transparent;
}
 :root.dark .page-title span {
  background: linear-gradient(120deg,rgb(234, 167, 251),rgb(40, 110, 240) 45%,rgb(2, 240, 137) 80%);
  -webkit-background-clip: text;
  color: transparent;
}

.pill {
  background: linear-gradient(90deg, rgba(56, 189, 248, 0.9), rgba(139, 92, 246, 0.9));
  color: #e0f2fe;
  box-shadow: 0 6px 24px rgba(59, 130, 246, 0.25);
}

.hero-title {
  background: linear-gradient(120deg, #1f3b9a, #4338ca 45%, #0ea5e9 80%);
  -webkit-background-clip: text;
  color: transparent;
}

.hero-subtitle {
  color: var(--hero-text-secondary);
}

.home-hero {
  position: relative;
  overflow: hidden;
  --hero-text-primary: #0b172a;
  --hero-text-secondary: rgba(11, 27, 54, 0.88);
  color: var(--hero-text-primary);
}

.instancing-showcase {
  position: relative;
  margin: 24px 0 12px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  background: linear-gradient(145deg, rgba(160, 183, 237, 0.8), rgba(29, 131, 247, 0.35));
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.45), inset 0 0 0 1px rgba(255, 255, 255, 0.02);
  transform-style: preserve-3d;
  perspective: 1200px;
  transition: box-shadow 0.3s ease;
}

.instancing-label {
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--hero-text-secondary);
  margin-bottom: 10px;
}

.instancing-grid {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(transparent 24px, rgba(148, 163, 184, 0.08) 25px),
    linear-gradient(90deg, transparent 24px, rgba(148, 163, 184, 0.08) 25px);
  background-size: 48px 48px;
  mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.9), transparent 70%);
  pointer-events: none;
}

.instancing-tracks {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.orbit-track {
  position: absolute;
  inset: 12%;
  border-radius: 999px;
  border: 1.4px dashed rgba(125, 211, 252, 0.45);
  filter: drop-shadow(0 0 12px rgba(56, 189, 248, 0.3));
  transform: rotate(calc(var(--r) * 14deg));
  opacity: 0.9;
}

.orbit-track:nth-child(2) {
  inset: 18%;
  border-color: rgba(168, 85, 247, 0.45);
}

.orbit-track:nth-child(3) {
  inset: 24%;
  border-color: rgba(59, 130, 246, 0.45);
}

.orbit-particle {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: radial-gradient(circle, #fcd34d, #f59e0b);
  top: 24%;
  left: 36%;
  filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.9));
}

.orbit-particle:nth-of-type(2) {
  background: radial-gradient(circle, #a855f7, #7c3aed);
  top: 62%;
  left: 68%;
  filter: drop-shadow(0 0 10px rgba(124, 58, 237, 0.95));
}

.home-hero {
  background: radial-gradient(circle at 30% 20%, rgba(14, 165, 233, 0.12), transparent 45%), #f8fafc;
  --hero-text-primary: #0f172a;
  --hero-text-secondary: rgba(15, 23, 42, 0.72);
  color: var(--hero-text-primary);
}

.instancing-grid {
  background:
    linear-gradient(transparent 24px, rgba(215, 223, 233, 0.14) 25px),
    linear-gradient(90deg, transparent 24px, rgba(100, 116, 139, 0.14) 25px);
  mask-image: radial-gradient(circle at center, rgba(255, 255, 255, 1), transparent 70%);
}

.instancing-tracks {
  opacity: 1;
}

.orbit-track {
  border-color: rgba(59, 130, 246, 0.5);
  filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.35));
}

.orbit-track:nth-child(2) {
  border-color: rgba(168, 85, 247, 0.55);
}

.orbit-track:nth-child(3) {
  border-color: rgba(14, 165, 233, 0.55);
}

.orbit-particle {
  filter: drop-shadow(0 0 12px rgba(245, 158, 11, 0.95));
}

.node {
  background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.34), rgba(14, 165, 233, 0.2));
  border-color: rgba(15, 23, 42, 0.1);
  box-shadow:
    0 16px 32px rgba(15, 23, 42, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.24);
}

.node-face {
  background:
    linear-gradient(145deg, rgba(59, 130, 246, 0.2), rgba(14, 165, 233, 0.2)),
    radial-gradient(circle at 70% 20%, rgba(14, 165, 233, 0.35), transparent 42%),
    radial-gradient(circle at 20% 80%, rgba(129, 140, 248, 0.35), transparent 48%);
  border-color: rgba(255, 255, 255, 0.5);
}

.instancing-legend .legend-item {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(15, 23, 42, 0.1);
  color: var(--hero-text-primary);
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.16);
}
:root.dark .instancing-legend .legend-item {
  background: linear-gradient(to right, rgb(101, 9, 171), rgb(2, 98, 233));
  border-color: rgba(226, 232, 240, 0.16);
  color: #e8f0ff;
  box-shadow: 0 10px 20px rgba(2, 91, 215, 0.28);
}

.legend-title {
  color: var(--hero-text-primary);
}

.legend-sub {
  color: var(--hero-text-secondary);
}

:root.dark .hero-title {
  background: linear-gradient(120deg,rgb(234, 167, 251),rgb(40, 110, 240) 45%,rgb(2, 240, 137) 80%);
  -webkit-background-clip: text;
  color: transparent;
}

.hero-subtitle {
  color: rgba(15, 23, 42, 0.82);
  text-shadow: 0 1px 3px rgba(15, 23, 42, 0.14);
}

.hero-metrics .metric-card {
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow:
    0 10px 26px rgba(15, 23, 42, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.metric-title {
  color: #0b172a;
  font-weight: 700;
}

.metric-desc {
  color: rgba(11, 27, 54, 0.9);
  font-weight: 600;
}

.page-title {
  background: linear-gradient(120deg, rgba(59, 130, 246, 0.3), rgba(14, 165, 233, 0.32));
  color: #0b1b36;
  border-color: rgba(148, 163, 184, 0.5);
  box-shadow:
    0 12px 28px rgba(148, 163, 184, 0.42),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
}

.page-title span {
  background: linear-gradient(120deg, #0f172a, #4338ca 50%, #0ea5e9 90%);
  -webkit-background-clip: text;
  color: transparent;
}

.instancing-label,
.metric-title,
.badge-title,
.legend-title {
  color: var(--hero-text-primary);
}

.hero-metrics .metric-desc,
.badge-sub,
.hero-subtitle,
.legend-sub {
  color: var(--hero-text-secondary);
}

.pill {
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.9), rgba(14, 165, 233, 0.95));
  color: #f8fafc;
  box-shadow: 0 10px 26px rgba(59, 130, 246, 0.28);
}

.instancing-showcase,
.instancing-grid,
.orbit-track,
.orbit-particle {
  mix-blend-mode: normal;
}

@media (prefers-color-scheme: dark) {
  :root.dark .home-hero {
    --hero-text-primary: #e2e8f0;
    --hero-text-secondary: rgba(226, 232, 240, 0.82);
    color: var(--hero-text-primary);
  }
  :root.dark .metric-title,
  :root.dark .badge-title {
    color: #e8f0ff;
    font-weight: 700;
  }
  :root.dark .metric-desc,
  :root.dark .badge-sub {
    color: rgba(232, 240, 255, 0.9);
    font-weight: 600;
  }
}

:root.dark .home-hero {
  --hero-text-primary: #e2e8f0;
  --hero-text-secondary: rgba(226, 232, 240, 0.82);
  color: var(--hero-text-primary);
  background: radial-gradient(circle at 30% 20%, rgba(14, 165, 233, 0.12), transparent 45%),rgba(6, 0, 12, 0.2);
}
:root.dark .metric-title,
:root.dark .badge-title {
  color: #e8f0ff;
  font-weight: 700;
}
:root.dark .metric-desc,
:root.dark .badge-sub {
  color: rgba(232, 240, 255, 0.88);
  font-weight: 600;
}
:root.dark .hero-badge {
  background: rgba(20, 27, 44, 0.9);
  border: 1px solid rgba(226, 232, 240, 0.16);
  box-shadow:
    0 12px 26px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}
:root.dark .hero-metrics .metric-card {
  background: rgba(20, 27, 44, 0.86);
  border: 1px solid rgba(226, 232, 240, 0.16);
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
.home-hero {
  background: radial-gradient(circle at 30% 20%, rgba(14, 165, 233, 0.12), transparent 45%), #f8fafc;
}

:root.dark .instancing-showcase {
  border-color: rgba(15, 23, 42, 0.06);
  background: linear-gradient(145deg, rgba(235, 120, 248, 0.9), rgba(2, 91, 215, 0.6));
  box-shadow:
    0 12px 36px rgba(148, 163, 184, 0.35),
    inset 0 0 0 1px rgba(148, 163, 184, 0.15);
}

.instancing-grid {
  background:
    linear-gradient(transparent 24px, rgba(100, 116, 139, 0.08) 25px),
    linear-gradient(90deg, transparent 24px, rgba(100, 116, 139, 0.08) 25px);
  mask-image: radial-gradient(circle at center, rgba(255, 255, 255, 0.92), transparent 72%);
}

.node {
  background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.22), rgba(14, 165, 233, 0.14));
  border-color: rgba(15, 23, 42, 0.05);
  box-shadow:
    0 8px 20px rgba(148, 163, 184, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.16);
}

.node-face {
  background:
    linear-gradient(145deg, rgba(59, 130, 246, 0.12), rgba(14, 165, 233, 0.12)),
    radial-gradient(circle at 70% 20%, rgba(14, 165, 233, 0.25), transparent 42%),
    radial-gradient(circle at 20% 80%, rgba(129, 140, 248, 0.25), transparent 48%);
  border-color: rgba(255, 255, 255, 0.35);
}

.instancing-legend .legend-item {
  background: rgba(255, 255, 255, 0.7);
  border-color: rgba(148, 163, 184, 0.3);
  color: #0f172a;
}

.legend-title {
  color: var(--hero-text-primary);
}

.legend-sub {
  color: var(--hero-text-secondary);
}

.hero-subtitle {
  color: var(--hero-text-secondary);
}

.page-title {
  background: linear-gradient(120deg, rgba(59, 130, 246, 0.14), rgba(14, 165, 233, 0.14));
  color: #0f172a;
  border-color: rgba(148, 163, 184, 0.4);
}

.page-title span {
  background: linear-gradient(120deg, #0f172a, #4f46e5 50%, #0ea5e9 90%);
  -webkit-background-clip: text;
}

.pill {
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.85), rgba(14, 165, 233, 0.9));
  color: #f8fafc;
  box-shadow: 0 8px 22px rgba(59, 130, 246, 0.25);
}

.instancing-showcase,
.instancing-grid,
.orbit-track,
.orbit-particle {
  mix-blend-mode: normal;
}

.instancing-nodes {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  perspective: 900px;
  margin-top: 6px;
}

.model-node {
  position: relative;
}

.model-mesh {
  position: relative;
  width: 26px;
  height: 20px;
  margin: 0 auto 2px;
  border-radius: 6px;
  background: linear-gradient(160deg, rgba(59, 130, 246, 0.95), rgba(14, 165, 233, 0.9));
  box-shadow:
    0 0 0 1px rgba(248, 250, 252, 0.5),
    0 6px 12px rgba(15, 23, 42, 0.35);
}

.model-mesh::before,
.model-mesh::after {
  content: '';
  position: absolute;
  inset: 18% 18% 32%;
  border-radius: 3px;
  border: 1px solid rgba(248, 250, 252, 0.5);
  box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.2);
}

.model-mesh::after {
  inset: 40% 12% 10%;
  opacity: 0.7;
}

.model-mesh--source {
  width: 52px;
  height: 40px;
  background: linear-gradient(150deg, rgba(234, 179, 8, 0.2), rgba(234, 179, 8, 0.9));
  box-shadow:
    0 12px 26px rgba(234, 179, 8, 0.6),
    0 0 0 1px rgba(254, 249, 195, 0.9);
}

.model-mesh--instance {
  width: 52px;
  height: 40px;
  background: linear-gradient(150deg, rgba(59, 130, 246, 0.95), rgba(14, 165, 233, 0.95));
}

.node-badge {
  position: absolute;
  left: 72px;
  top: 48px;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: transparent;
  color: var(--hero-text-primary);
}

.model-node--instance {
  opacity: 0.96;
}

.model-node {
  position: relative;
  padding: 6px 0 18px;
  transform-style: preserve-3d;
}

.node-glow,
.node-face {
  display: none;
}

.instancing-orbs {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.orb {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: radial-gradient(circle, #22d3ee, #0ea5e9);
  filter: drop-shadow(0 0 10px rgba(14, 165, 233, 0.9));
  top: 16%;
  left: 18%;
}

.orb:nth-child(2) {
  top: 36%;
  left: 76%;
}

.orb:nth-child(3) {
  top: 74%;
  left: 46%;
}

.instancing-legend {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin-top: 14px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  box-shadow: 0 0 12px currentColor;
}

.legend-dot.primary { color: #38bdf8; }
.legend-dot.secondary { color: #a855f7; }
.legend-dot.accent { color: #f59e0b; }

.legend-title {
  font-size: 13px;
  color: var(--hero-text-primary);
}

.legend-sub {
  font-size: 12px;
  color: var(--hero-text-secondary);
}

.metric-title {
  color: #0b172a;
  font-weight: 700;
}

.metric-desc {
  color: rgba(11, 27, 54, 0.9);
  font-weight: 600;
}

.badge-title {
  color: #0b172a;
  font-weight: 700;
}

.badge-sub {
  color: rgba(11, 27, 54, 0.9);
  font-weight: 600;
}
.metric-title,
.badge-title {
  color: #0b172a;
}
.metric-desc,
.badge-sub {
  color: rgba(11, 27, 54, 0.9);
}

.hero-badge {
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow:
    0 12px 28px rgba(15, 23, 42, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.55);
}

.badge-title {
  color: #0b1b36;
}

.badge-sub {
  color: rgba(11, 27, 54, 0.82);
}

@media (max-width: 900px) {
  .instancing-showcase {
    padding: 14px;
  }
  .node {
    height: 70px;
  }
}
</style>
