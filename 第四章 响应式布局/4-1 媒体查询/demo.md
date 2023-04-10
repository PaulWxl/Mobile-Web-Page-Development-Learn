tx前端团队网站：
## alloyteam.com 
网页宽度不同，网页的布局会自动发生变化
响应式网页：
同一套代码兼容不同的设备，页面布局会自动变化
网站没变，一直是同一个网页
布局变，内容不变

## 知识点：
媒体查询、BootStrap（框架，封装好的，直接用）（会写很少的CSS属性）（大量使用BootStrap封装好的内容）

+ 实战

## 媒体查询
检测到视口宽度--html字号---设置条件的不同设置不同的CSS样式-差异化CSS


@media (媒体特性) {
    选择器 {
        样式
    }
}(媒体查询在CSS中写)


## 响应式布局的关键就是媒体查询，根据不同的视口宽度，设置差异化的CSS
- 应该是视口宽度在某一个区间范围内，才是一行排4个，不是像之前（width：375px），这样当且仅当width为375px才能生效，所以，响应式布局不一样，用max-width和min-width去判断，

# 媒体查询书写顺序
- 由于层叠性，所以要保证各个都生效的话，需要注意媒体查询的书写顺序
- min-width： 从小到大写
- max-width:  从大到小写

/*min-width从小到大写*/
@media (max-width: 768px) {
    body {
        background-color: pink;
    }
}

@media (min-width: 992px) {
    body {
        background-color: green;
    }
}

@media (min-width: 1200px) {
    body {
        background-color: skyblue;
    }
}
- 高度也可以判断，但是一般不判断高度，只判断宽度
- 媒体特性还可以判断是竖屏还是横屏：
属性： orientation
属性值： portrait:竖屏   landscape:横屏
- max-width和min-width用的最多

# 媒体查询link写法
    <link rel="stylesheet" href="./css/common.css" media="(媒体特性)">（注意引号里面要有小括号）
- 在head中link


## 用媒体查询模拟电商站的隐藏内容
// 媒体查询，隐藏内容
@media (max-width: 768px) {
    .left {
        display: none;/*隐藏用display：none*/
    }
}


