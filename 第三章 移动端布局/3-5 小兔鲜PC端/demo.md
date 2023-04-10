- 小兔鲜PC端
- 接手别人的项目 先找版心- 以后要用版心 直接用这个别人写好的类
# 如果协作别人的代码 需要看一下别人的代码是怎么实现功能的 要在别人代码的基础上进行写代码
- 注意别人是怎么取类名的 要尽可能方法一致
- 注意padding和margin要区分一下 
# 注意padding margin 不同取值个数的用法
- padding先写 background-color后写
# 二手项目不像一手项目那样 肆意妄为 想咋写咋写 而是基于人家的再去写

- 版心：居中
- 可以用版心嵌套需要的元素
# 注意flex:整数 布局方法 表示把父元素分成这么多份 然后每个占其中的几份
- .overflow div {
    flex:1
}
- 注意这种用法： 可以生成div 1-8 如下：
# div*8{$}  数字是1-8可以生成

- 伪类选择器的用法
- 类选择器 结合 后代选择器 结合 伪类选择器
- nth-child() {}
- first-child {}
# .overflow div:nth-child(1) {}
# .overflow div:first-child {}

- 类名的取法
- xtx_body
- 版心 wrapper
- 侧边栏 aside
- 主体内容 main
- 用户账户概览 overview
- 版心把 侧边栏 主题内容 用户账户概览 都包裹住了



