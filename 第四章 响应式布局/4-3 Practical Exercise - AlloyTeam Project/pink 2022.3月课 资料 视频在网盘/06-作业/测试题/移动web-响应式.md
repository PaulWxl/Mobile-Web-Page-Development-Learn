### 第一题

下列选项中对bootstrap中的能让元素只在小屏设备隐藏的类是( b)

A： hidden-xs

 B： hidden-sm

 C： hidden-md

 D： hidden-lg

### 第二题

下列选项中能清除父容器左右15px内边距的类是(  C  )

A： container

 B： col-md-1

 C： container-fluid

 D： row

### 第三题

下列关于bootstrap的使用描述错误的是(  C  )

A： Bootstrap下载的包里面有css，js，font文件夹

 B： <!--[if lt IE 9]> 这个是针对低版本ie浏览器的兼容处理

 C： Bootstrap只能通过浏览器下载的本地文件形式引入项目里面

 D： 引入了对应的bootstrap.css就可以直接使用它提供的一些类

### 第四题

在超大屏上面每行显示4个元素， 中等屏幕上显示3个元素，小屏上显示2个元素，超小屏幕上显示1个元素。下列关于不同屏幕下类名的书写正确的是(   C )

A:

```html
<div class="row">
     <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">1</div>
</div>
```

B:

```html
<div class="row">
      <div class="col-lg-4 col-md-3 col-sm-2 col-xs-1">1</div>
</div>
```

C:

```html
<div class="row">
      <div class="col-lg-3 col-md-4 col-sm-2 col-xs-1">1</div>
</div>
```

D:

```html
<div class="row">
      <div class="col-lg-3">1</div>
</div>
```

### 第五题

```html
<style>
    @media screen and (min-width: 320px) {
        html {
            font-size: 50px;
        }
    }

    @media screen and (min-width: 640px) {
        html {
            font-size: 100px;
        }
    }

    .top {
        height: 1rem;
        font-size: .5rem;
        background-color: green;
        color: #fff;
        text-align: center;
        line-height: 1rem;
    }
</style>
</head>

<body>
    <div class="top">购物车</div>
</body>
```

上面案例中的top元素在屏幕宽度为500px和700px时 字体大小分别是多少( d   )

 A： 25px 25px

 B： 50px 50px

 C： 16px 16px

 D： 25px 50px

### 第六题

关于Bootstrap的选项错误的是(  b  )

 A： Bootstrap 的初始化代码使用的是 normalize.css

 B： Bootstrap 是移动设备优先的，为了确保适当的绘制和触屏缩放，需要在 head标签之中添加 viewport 元数据标签

 C： 处于中等屏幕时，使用.col-md-表示，.container 最大宽度1170px

 D： 列偏移，col-*-offset-实现原理是使用margin-left进行实现的

### 第七题

以下代码中，哪一个可以使用媒体查询判断宽度（768px~992px）并引入对应css文件(  c  )

A： <link rel="stylesheet" href="one.css">

 B： <link rel="stylesheet" media="screen and ( min-width:992px )" href="two.css">

 C： <link rel="stylesheet" media="screen and ( max-width:992px ) and ( min-width:768px )" href="three.css">

 D： <link rel="stylesheet" media="screen and ( min-width:992px ) and ( max-width:768px )" href="three.css">

### 第八题 [多选]

bootstrap的类col-sm-4描述正确的是( b   )

 A： 仅仅在小屏设备生效

 B： 在小屏设备及以上设备生效

 C： 生效时宽度占1/3

 D： 生效时宽度占1/4

### 第九题 [多选]

下列关于布局容器的描述正确的是( a   )

A： Bootstrap预先定义好了两个容器样式类：.container, .container-fluid

 B： container类，已经通过媒体查询处理了屏幕范围

 C： container-fluid，宽度为百分百，适合于单独移动端开发

 D： container类不是响应式

### 第十题  [多选]

下列关于栅格系统介绍的描述正确的是( b   )

A： 格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局

 B： 栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列

 C： 屏幕变化，container变化，12等份的每一份变化，我们的界面元素的大小依据每一等份来设置，那么也就实现了屏幕适配

 D： 栅格系统就是container类
