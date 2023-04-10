const express = require('express')
const app = express()

app.get('/home', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    // response.setHeader('Access-Control-Allow-headers', '*')


    //响应一个页面
    //__dirname加绝对路径
    response.sendFile(__dirname + '/demo ehang应用.html')
})


//监听端口
app.listen(8000, () => console.log('8000端口已开始监听。'))