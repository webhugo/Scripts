const {execSync, exec} = require('child_process');


// let urls = Array.from({ length: 20 }, (val, index) => {
//     return `https://www.bilibili.com/video/av920083/#page=${index + 1}`;
// });
let urls = [
    'https://www.mgtv.com/b/317663/4219889.html?cxid=95kqkw8n6'
];
let download = (url) => {
    let param = "";
    if (url.indexOf("youtub") !== -1) {
        //设置代理
        param = "-x 127.0.0.1:1080"
    }

    let cmd = `you-get ${param} ${url}`;
    console.log(cmd);
    let done = false;
    while (!done) {
        try {
            execSync(cmd, {encoding: 'utf-8', stdio: [0, 1, 2], cwd: 'C:\\Users\\chsha\\Downloads'});
            done = true;
        } catch (e) {
            console.log(e)
        }
    }
    if (urls.length > 0)
        download(urls.shift());
};
download(urls.shift());