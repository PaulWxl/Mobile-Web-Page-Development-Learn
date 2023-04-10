- rem移动端适配单位
- 可以在pxcook中直接使用2x 然后rem 基数为对应视口宽度的font-size即可 (一般为37.5px) 可以直接测量出rem
- 1rem = 1html的字号大小
- 相对单位
- 原理：
- @media (width: 375px) {
            html {
                font-size: 37.5px;
            }
        }
- 一般html的字号大小设置为视口宽度的1/10
- 代码中的rem计算： 如果不用pxcook直接测量，用设计图中的px除以对应的1html的字号大小
- 方法： 在body前面的附近引入:  <script src="./js/flexible.js"></script>
- 阿里写的适配文件，不用一直@media
