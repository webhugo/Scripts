const {execSync, exec} = require('child_process');


// let urls = Array.from({ length: 20 }, (val, index) => {
//     return `https://www.bilibili.com/video/av920083/#page=${index + 1}`;
// });

let a = [
    "http://www.iqiyi.com/v_19rrepgnik.html?vfm=2008_aldbd&fv=p_02_01",
    "http://www.iqiyi.com/v_19rrepc07c.html?vfm=2008_aldbd&fv=p_02_01",
    "http://www.iqiyi.com/v_19rrern0nc.html?vfm=2008_aldbd&fv=p_02_01",
    "http://www.iqiyi.com/v_19rrerfmu8.html?vfm=2008_aldbd&fv=p_02_01",
    "http://www.iqiyi.com/v_19rrerfcc8.html?vfm=2008_aldbd&fv=p_02_01",
    "http://www.iqiyi.com/v_19rrerflo4.html?vfm=2008_aldbd&fv=p_02_01",
    "http://www.iqiyi.com/v_19rretnoow.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rretnpq8.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf5zpn8.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf5zveo.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf6cagc.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf6cvrs.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf955l4.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf96se0.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf96xkw.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf97bn8.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf96cbo.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf2yino.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf2xqjc.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf2vhtg.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf2vva0.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf2ur2k.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf3gdh4.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf3gvu8.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf3fnlk.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf3fq4k.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf3g6bc.html?vfm=2008_aldbd",
    "http://www.iqiyi.com/v_19rrf3hzfs.html?vfm=2008_aldbd",
];
let urls = a.reverse();
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