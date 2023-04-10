- less
- 更方便地写CSS,提高了效率，方便CSS代码的迁移
- 下载插件： Easy LESS
- 在less文件中引入其他less文件
- 语法：
- @import 'less文件名'; 
- 注意必须要加分号，而且@import后面必须要加空格
- 必须写在第一行
- @import './demo2.less';
@import './demo.less';
- 而且可以同时引入多个less文件
- 定义变量
- @变量名：值;
- 使用： CSS属性： @变量名
- @import './demo2.less';
@import './demo.less';

@colora: green;

.father {
    color: @colora;
    .son {
        color: @colora;
    }
}

.box {
    background-color: @colora;
    .aaa {
        color: @colora;
    }
}
- 计算：
- 除了加减乘不用加括号，其他都要用括号
- 移动端适配rem时注意写括号
- .xtx-main-nav {
    width: 200 + 10px;
    height: 200 + 20px;

    width: (68 / 37.5rem);
    height: (34 / 37.5rem);
}
- .xtx-main-nav {
  width: 210px;
  height: 220px;
  width: 1.81333333rem;
  height: 0.90666667rem;
}
- less文件的注释：
- 单行注释： //
- 多行注释： /* */
- less文件中的多行注释才在CSS文件中有效。
- 关于less文件的CSS的导出：
- 默认是关于这个less文件的同级目录下输出CSS文件
- 修改方法： 设置 -> 搜索Easy -> 在setting.json中编辑 ->  添加代码（注意，所有的json文件，必须是双引号）
- 在"less.compile"的大括号中输出
-   "out": "./css/"
- 单独一个less文件输出到别的CSS文件夹中
- 在这个less文件的最头部写上
- // out: ./css/demo.css
- 有些less文件禁止导出CSS
- 在这个less文件的最头部写上
- // out:false