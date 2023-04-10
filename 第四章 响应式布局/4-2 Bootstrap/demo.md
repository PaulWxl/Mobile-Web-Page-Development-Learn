##  Bootstrap

- 响应式布局，可以自己写媒体查询，也可以通过BootStrap框架去完成，这个框架封装了做响应式网页布局的功能
# 网站：bootcss.com 
- 用稳定版V3 这种框架的套路（意思就是Vue和React也是）都是，有源码和生产环境的版本（dist），工作时都用生产环境的版本（dist），源码不推荐直接看，工作一段时间再看比较好。

## 使用BootStrap框架快速开发响应式网页
- BootStrap是由Twitter公司开发维护的前端UI框架，它提供了大量编写好的CSS，HTML,JS样式（三件套），快速编写网页的常见的交互效果。

## 使用步骤
- 1. 引入样式表
 -    
  <link rel="stylesheet" href="./bootstrap-3.4.1-dist/css/bootstrap.min.css">
 - min.css比css体积小，是压缩之后的文件，全都挤在一行，和css完全一样，用户加载效率会高，省流量

- 2. 调用类名
  - container： 响应式布局版心类

# BootStrap核心：栅格系统
- 把屏幕分成相等的12份，每个屏幕占几份
 # 核心类名： 
- 大屏： col-lg-一个盒子占的份数 >=1200px
- 中屏： col-md-一个盒子占的份数 >=992px
- 小屏： col-sm-一个盒子占的份数 >=768px
- 超小屏： col-xs-一个盒子占的份数 <768px

<!--直接加container类名，产生版心的效果：居中且被指定宽度-->
    <!-- 需求：大屏：一行排列四个内容 
              中屏： 一行排列两个内容-->
    <div class="container">
        <div class="col-lg-3 col-md-6">1</div><!--12/4 = 3，一个内容占3份-->
        <!-- 第一个内容占3份，第二个，第三个，第四个也是占3份，所以也要添加一样的类名 -->
        <div class="col-lg-3 col-md-6">2</div>
        <div class="col-lg-3 col-md-6">3</div>
        <div class="col-lg-3 col-md-6">4</div>
    </div> 



# 栅格系统相关的类名
- BootStrap中的源码很多内间距或者外间距喜欢设置的是15px， 如果想去掉边距，可以加row类名，row类名的源码是margin的左右边距设置的是-15px
-   <!-- 栅格系统相关的类名 -->
    <div class="container">
        1
    </div>

    <div class="container">
        <div class="row">2</div><!--加row类名可以消除边距-->
    </div>

- <!--BootStrap-表格>
# 关键：学会查询文档，找到对应的效果，复制类名
# 给table加类名 注意：一定要先加table 再加table-其他类名
- 条纹状表格： table-striped
- 带边框的表格： table-bordered
- 鼠标悬停:   table-hover


- <!--BootStrap-按钮>
# 关键：学会查询文档，找到对应的效果，复制类名
- 为 <a>、<button> 或 <input> 元素添加按钮类（button class）即可使用 Bootstrap 提供的样式。
- <button class="btn btn-default">默认</button>
        <button class="btn btn-default  ">默认</button>
        <button class="btn btn-success btn-lg ">成功</button>
        <button class="btn btn-info  ">一般信息</button>
        <button class="btn btn-primary btn-lg ">首选项</button>
        <button class="btn btn-warning ">警告</button>
        <button class="btn btn-danger btn-lg ">危险</button>
        <button class="btn btn-link ">链接</button>


# 按钮尺寸： 
使用 
.btn-lg: 大按钮、
.btn-sm：小按钮 、 
.btn-xs： 超小按钮
就可以获得不同尺寸的按钮。
# 禁用状态
- 为 <button> 元素添加 disabled 属性，使其表现出禁用状态。
- disabled="disabled"
# 重点： 会查询文档，根据不同的状态去找



## 组件
- 组件
Bootstrap 自带了大量可复用的组件，包括
- 两类： 
- 1. 字体图标
- 2. 网页区域
 - 包括： 下拉菜单、导航、警告框、弹出框等更多功能。

# 使用方法
- 1. 引入BootStrap样式表
- 2. 复制结构，修改内容

下拉菜单、路径导航
- 
    <!-- 组件：
         1. 下拉菜单
         2. 路径导航 -->

         <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              部门
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>


          <ol class="breadcrumb">
            <li><a href="#">首页</a></li>
            <li><a href="#">用户</a></li>
            <li><a href="#">部门</a></li>
            <li><a href="#">登录</a></li>
            <li class="active">Data</li>
          </ol>




## BootStrap字体图标
- 1. 引入样式表
- 2. 复制类名,注意类名和iconfont一样，是两个，上面已经写好了两个，直接复制就好了


-  <!-- BootStrap字体图标 -->
          <div class="box">
            <i class="glyphicon glyphicon-list-alt "></i>
            <span class="glyphicon glyphicon-list "></span>
  
          </div>





# BootStrap中的JS插件 实现交互效果
# JavaScript 插件
- jQuery 插件为 Bootstrap 的组件赋予了“生命”。可以简单地一次性引入所有插件，或者逐个引入到你的页面中。

- 1. body中用script标签引入两个js文件，一个是jquery.js， 一个是bootstrap.min.js
# 注意，必须先引入jquery.js， 再引入bootstrap.min.js，因为bootstrap.min.js中用到了jquery.js中的内容
2. 复制结构，修改内容（CSS）






# BootStrap插件 轮播图 Carousel
- <!-- BootStrap插件 轮播图 Carousel -->
          <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              <li data-target="#carousel-example-generic" data-slide-to="3"></li>
            </ol>
          
            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img src="./uploads/banner_1.jpg" alt="...">
                <div class="carousel-caption">
                  ...
                </div>
              </div>

              <div class="item">
                <img src="./uploads/banner_2.jpg" alt="...">
                <div class="carousel-caption">
                  ...
                </div>
              </div>
              
              <div class="item">
                <img src="./uploads/banner_3.jpg" alt="..." >
                <div class="carousel-caption">
                  ...
                </div>
              </div>

              <div class="item">
                <img src="./uploads/banner_4.jpg" alt="..." >
                <div class="carousel-caption">
                  ...
                </div>
              </div>
              
            </div>
          
            <!-- Controls -->
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

- li是小圆点