# notes

构建一个简单的http服务器，代码如下：

    
    // server.js
    var http = require('http');
    var server = http.createServer(function(request, response){
        try {
            var ret = require('.' + request.url);
            response.end(ret.output);
        } catch (err) {
            response.end(err.toString());
        }   
    });
    server.listen(8080);  
    

功能很简单，创建了一个HTTP Server，监听8080端口。

回调方法里面，直接包含request.url指定的脚本，然后输出ret.output变量中的内容，结束。
让服务端跑起来：

    node server.js
    或
    node server.js &

加上&表示在后台执行。

可以用以下命令查看，有没有监听8080端口：

    netstat -tln 

下面来一个测试脚本：

    // hello.js
    exports.output = "Hello Node.js!\n";

保存为hello.js，放到server.js相同目录下，然后用下面的命令测试：
    curl http://127.0.0.1:8080/hello.js  
当然,也可以在浏览器直接访问 `http://127.0.0.1:8080/hello` 进行测试

应该会看到"`Hello Node.js!`"输出。
其中的hello.js就是对应的脚本文件名。

加上完善的错误处理（为了方便查看，部分错误处理未加），就算是真正的http服务器了。