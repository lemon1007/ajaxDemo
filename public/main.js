// XMLHttpRequest.readyState属性会返回一个XMLHttpRequest代理当前所处的状态
// 0 代理被创建，但尚未调用open()方法
// 1 open()方法已被调用
// 2 send()方法已经被调用，并且头部和状态已经可获得
// 3 下载中，responseText属性已经包含部分数据
// 4 下载操作已完成


// 获取HTML样式
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/newIndex.html');
    request.onreadystatechange = () => {
        // 只有当readyState为4，即下载完成后才能开始创建填写等工作
        if (request.readyState === 4) {
            // 状态码在200-300之间均为成功
            if (request.status >= 200 && request.status < 300) {
                // 创建div
                const html = document.createElement("html")
                // 填写div内容
                html.innerHTML = request.response;
                // 将div内容写入页面
                document.body.appendChild(html)
            } else {
                alert('DIV加载失败')
            }
        }
    };
    request.send();
};


//获取css样式
getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 创建style标签
                const style = document.createElement('style');
                // 填写style内容
                style.innerHTML = request.response;
                // 将style内容插入head
                document.head.appendChild(style);
            } else {
                alert('CSS加载失败');
            }
        }
    };
    request.send();
};

// 获取JS样式
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/index.js');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 创建script标签
                const script = document.createElement("script");
                // 填写script内容
                script.innerHTML = request.response;
                // 将script内容插入body
                document.body.appendChild(script);
            } else {
                alert('JS加载失败');
            }
        }
    };
    request.send();
};

// 获取XML文件的内容
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/index.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());
            alert(text.trim());
        }
    };
    request.send();
};

// 获取JSON文件内容
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/index.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response);
            myName.textContent = object.name;
            myAge.textContent = "对象年龄：" + object.age;
            myContent.textContent = "对象内容：" + object.word;
        }
    };
    request.send();
};

// JSON的错误捕获
// let object;
// try {
//     object = {"name": "sherry"}
// } catch (error) {
//     console.log("出错了，错误详情是：");
//     console.log(error);
//     object = {'name': 'no name'}
// }
// console.log(object)

