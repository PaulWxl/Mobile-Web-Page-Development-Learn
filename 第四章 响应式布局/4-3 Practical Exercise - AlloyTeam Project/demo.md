# 实战-BootStrap-AlloyTeam项目
- 注意，引入样式表(CSS),应该先引入BootStrap的CSS，再引入common.css,注意base.css已经包含在bootstrap.min.css中了，所以不用再引入base.css了


1. 先引入样式表（先引入bootstrap.min.css，再引入common.css）
2. 引入两个js文件（先引入jquery.js，再引入bootstrap.min.js）


# banner图-高度
# 因为导航在轮播图上，所以先做轮播图，注意img的高度设置的是父元素高度的100%，所以对img设置height：100%， 注意为了层叠掉原本的，所以加了一个!important，媒体查询修改item的高度即可
- <!-- banner图 -->
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
            <img src="./img/banner_1.jpg" alt="...">
            <div class="carousel-caption">
              ...
            </div>
          </div>
          <div class="item">
            <img src="./img/banner_2.jpg" alt="...">
            <div class="carousel-caption">
              ...
            </div>
          </div>
          <div class="item">
            <img src="./img/banner_3.jpg" alt="...">
            <div class="carousel-caption">
              ...
            </div>
          </div>
          <div class="item">
            <img src="./img/banner_4.jpg" alt="...">
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
    <!-- banner图 -->





# 注意，两行注释（相同的内容），注释之间放代码
# 头部-组件-导航条  注意，通过浏览器右键检查去删代码，不要的删除掉，直接在VSCODE中不方便删除，先折叠，再删除
- <!-- 头部 -->
    <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Brand</a>
          </div>
      
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#">Link</a></li>
              
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
    <!-- 头部 -->


# 头部-样式
# 现在要求头部（导航）压在banner图的上方 因为在浏览器的最顶端，所以应该是固定定位，也可以用框架里面的《固定在顶部》，加类名navbar-fixed-top，注意，想要导航水平居中，所以可以把container-fluid改成container
- <!-- 头部 -->
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Brand</a>
          </div>
      
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#">Link</a></li>
              
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
    <!-- 头部 -->

## 定制 BootStrap项目导航
# 定制折叠效果 默认是很小的屏才会折叠成图标，现在需要是只要小于992px，就应该折叠，所以需要用到《定制》,定制，可以更改后直接下载，然后再重新引入样式表。 注意，不知道在哪里可以用所有浏览器都自带的页面查找功能，Ctrl+F，grid system是栅格系统
-     <link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css">




## AlloyTeam-开源项目-标题文字
# 框架里面应该对h标题标签和p标签美化过了，注意，如果只想调标签的样式，在《全局CSS样式》里面找，h标题也是有类名的，可以添加class（h1/h2/h3）,注意如果想让标题文字和上面轮播图有一定的间隔，如果是给h3加，加的是margin-top，如果是给父元素project加，就是paddint-top
# 注意文字对齐是text-align:center ， 这个属性应该很好用的，别忘了，别老是margin: 0 auto。text-align 并不控制块元素自己的对齐，只控制它的行内内容的对齐。注意和margin: 0 auto 的区别。
## 标签相关的样式，可以在《全局CSS样式》-《排版》里面找到
-     <h3 class="h2">Ehang Studio / 易航工作室</h3>
- <!-- 开源项目区域 -->

     <!-- 1.标题文字 -->
    <div class="project ">
        <h3 class="h2">Ehang Studio / <small>易航工作室</small></h3>
        <p >种类众多的部门，期待你发光发热</p>
    </div>
     <!-- 1.标题文字 -->
     
    <!-- 开源项目区域 -->





## AlloyTeam-开源项目-栅格布局
# 4个div在不同的视口宽度之下，占不同的份数，注意，这里是把标题文字和栅格布局都放在开源项目区域。因为，4个盒子都要做成响应式，所以要给4个盒子都要添加对应的类名。（col-...-占的份数）
## 注意，4个盒子之间的间距不是由盒子拉开的，是内容之间拉开的，所以不能给每个div加margin-right，（栅格布局的本质是百分比布局，定义了col-...-份数这些类）。要让内容拉开距离。不能给每个div设置外边距，因为栅格布局每个盒子的宽度已经固定了，是百分比布局，所以会破坏结构。这里是通过给a标签设置
# 看到的视觉效果的间距不是div的间距，而是内容的间距，这几个div只负责响应式的布局，切记不能在div身上加边距，都往内容身上加边距（给a加边距），这是一个基本准则！
# 如果不想要container自带的padding左右的15px，可以加类名row去掉（margin左右-15px）,所以row应该嵌套4个div
- <!-- 2.栅格布局 -->
        
        <!-- 因为4个盒子都是居中对齐的，先来一个版心 -->
        <div class="container">
            <!-- 去掉container的padding左右的15px，加类名row -->
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3"><a href="#">1</a></div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3"><a href="#">1</a></div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3"><a href="#">1</a></div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3"><a href="#">1</a></div>
            </div>
            
        </div>

        <!-- 2.栅格布局 -->



## ## AlloyTeam-开源项目-内容
- <!-- 2.栅格布局 -->
        
        <!-- 因为4个盒子都是居中对齐的，先来一个版心 -->
        <div class="container">
            <!-- 去掉container的padding左右的15px，加类名row -->
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a href="#">平面设计部</a></div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a href="#">办公室部</a></div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a href="#">开发部</a></div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a href="#">新媒体部</a></div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a href="#">运营部</a></div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a href="#">影音部</a></div>
                
                <!-- <div class="container">
                    <div class="col-xs-12"><a href="#">1</a></div>
                </div> -->
            </div>
            
        </div>

        <!-- 2.栅格布局 -->



## BootStrap-全局样式
# 辅助类和响应式工具 辅助类：快速浮动，清除浮动。响应式工具： 隐藏效果可以直接加类名。针对不同的视口区间，让某个盒子是显示还是隐藏，这些类名不用记，表格知道在哪里找，会查询就可以了。
# 注意，不是所有网站都可以改成响应式布局，比如：电商站（淘宝，京东），是不适合像腾讯全端这样全部都是响应式的布局，记住一个原则：企业站或者是内容非常非常少的网站。可以做成响应式布局。如果把电商站改成响应式，根本做不到。电商站做到的效果是：电脑端是一个网站，手机端是另一个网站。电脑端和手机端独立成两个网站开发的，是基本原则。但凡你进公司是电商的，要电脑端和手机端两个网站独立开发，做不成响应式布局。只有企业站和内容特别特别少的网站才能做成响应式布局。电脑端就像基础班你做《品优购》一样，手机端就像做《移动适配》那两天，做《B站》和《游乐园》一样，做宽高等比缩放就可以了。



## BootStrap属于UI框架，目标：知道 UI框架的作用，UI框架概念。将常见效果进行统一封装后形成的一套代码, 例如：BootStrap。作用：基于框架开发，效率高，稳定性高。
