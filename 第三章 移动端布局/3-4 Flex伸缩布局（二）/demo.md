- flex布局 
- 用flex布局实现图文的垂直排列 
- 可以把主轴改到竖直方向 修改默认主轴的方向
# flex-direction 修改主轴的方向
- 常用属性值： column 列 垂直
- 父元素： display:flex
- 再设置 flex-direction: column
# 本质原因： 子集默认按照主轴的方向排列
- 如果改变了主轴的方向 自动改变侧轴的方向

- 如果想通过flex布局的justify-content/或者 align-items实现盒子的水平居中或垂直居中 需要先判断主轴的方向

# 弹性布局 的 表现: 父级使用了flex布局之后 子级的尺寸可以自动伸缩，可以变化
- 按照可以放下的范围 会自动对子集进行缩放

# 弹性盒子 换行显示： flex-wrap
- 属性值 为 wrap
- 默认是 nowrap 不换行 

- 换行后 如果想调整行的间距 就使用如下：
# 调整行对齐方式 align-content
- 属性值 和 justify-content 基本一致 只是没有space-evenly




 
