# <span class="api-title">isDestroyed()</span>

- **类别**：生命周期
- **签名**：`isDestroyed(): boolean`

与 Cesium `Primitive` 接口保持一致，当前固定返回 `false`，用于占位兼容。

**示例**
```ts
if (!primitive.isDestroyed()) {
  viewer.scene.primitives.remove(primitive)
  primitive.destroy()
}
```

**注意**
- 该方法不会检查资源是否已释放，只做接口兼容。销毁后无需再次调用。


