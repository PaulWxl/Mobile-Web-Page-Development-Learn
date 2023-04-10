- CSS3动画效果
- 先定义动画（在CSS中）
- 法一： 
- @keyframes 动画名称 {
    from {

    }
    to {

    }
}


- 法二：
- @keyframes 动画名称 {
    0% {

    }（注意不用加括号）

    20% {

    }

    40% {

    }
    
    100% {


    }
}
- 法二为百分比，具体百分比并没有要求
- 动画本质：帧的连续运动
- 帧： keyframe
- 所以，定义动画用的是 @keyframes（注意加s，复数）
- 注意定义完动画后，必须调用动画
- 在该元素的CSS中写：
- animation: 动画名称 动画持续时间（单位为秒,写法和过渡一样）
- 动画名称不能乱起，最好还是能做到见名称知道意思
- animation是一个复合属性，除了 动画名称和持续时间之外，还有 速度曲线(linear 了解)，分步动画（steps(n)）,重复次数（可以写数字，也可以写infinite，表示无限次数），延迟时间（秒），除了最开始的动画名称和持续时间

# 精灵图逐帧动画关键代码
- .box3 {
    width: 80px;
    height: 70px;
    border: 1px solid #000;
    margin: 200px auto;


    background-image: url(../精灵图逐帧动画2.png);
    animation: move3 1s steps(9) infinite;
}
@keyframes move3 {
    from {
        background-position: 0 0;
    }
    to {
        background-position: 0 -630px;
    }
}


- @keyframes move2 {
    from {
        background-position: 0 0;
    }
    to {
        background-position: -1260px 0;
    }
}
.box2 {
    width: 180px;
    height: 300px;
    border: 1px solid #000;
    margin: 200px auto;

    background-image: url(../精灵图逐帧动画1.png);

    // 添加动画
    // 7是精灵图中图的个数，要使用分步动画
    // infinite是无限的意思
    animation: move2 2s steps(7) infinite;
}