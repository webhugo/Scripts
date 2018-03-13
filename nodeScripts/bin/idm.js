const {execSync, exec} = require('child_process');
let links = ["https://pan.baidu.com/s/1kUUFbBh", "https://pan.baidu.com/s/1kVFwsAV", "https://pan.baidu.com/s/1qYbWzes", "https://pan.baidu.com/s/1eSnMg6I", "https://pan.baidu.com/s/1eScruD0", "https://pan.baidu.com/s/1jHUb3N4", "https://pan.baidu.com/s/1dFcto3Z", "https://pan.baidu.com/s/1pKXpmKN", "https://pan.baidu.com/s/1c2GWRtA", "https://pan.baidu.com/s/1gfLA3qb", "https://pan.baidu.com/s/1dFtU0r3", "https://pan.baidu.com/s/1nv5P5vr", "https://pan.baidu.com/s/1eREBeVo", "https://pan.baidu.com/s/1eSB31OA", "https://pan.baidu.com/s/1nv9Tyqd", "https://pan.baidu.com/s/1slkIXxb", "https://pan.baidu.com/s/1bpMznzh", "https://pan.baidu.com/s/1ce2cP4", "https://pan.baidu.com/s/1bCHEBO", "https://pan.baidu.com/s/1miSmG1i", "https://pan.baidu.com/s/1i5IPC7V", "https://pan.baidu.com/s/1hrMFrMW", "https://pan.baidu.com/s/1skPeNDj", "https://pan.baidu.com/s/1eSjeaEu", "https://pan.baidu.com/s/1skIttoT", "https://pan.baidu.com/s/1qYBQjpU", "https://pan.baidu.com/s/1bEKvz4", "https://pan.baidu.com/s/1cz19U2", "https://pan.baidu.com/s/1jI6CVWE", "https://pan.baidu.com/s/1o78q21O", "https://pan.baidu.com/s/1c2k4CTy", "https://pan.baidu.com/s/1kV051DP", "https://pan.baidu.com/s/1kUWJtTt", "https://pan.baidu.com/s/1hsy9NgC", "https://pan.baidu.com/s/1nviQ4Ox", "https://pan.baidu.com/s/1dFlOUPj", "https://pan.baidu.com/s/1mi3lBhI", "https://pan.baidu.com/s/1eSjLkxc", "https://pan.baidu.com/s/1c2nSYFu", "https://pan.baidu.com/s/1slyrPBB", "https://pan.baidu.com/s/1bIPqoQ", "https://pan.baidu.com/s/1pLeJ3E7", "https://pan.baidu.com/s/1i5PCNAX", "https://pan.baidu.com/s/1pKFHdSB", "https://pan.baidu.com/s/1qXBBpvA", "https://pan.baidu.com/s/1qYhzAZa", "https://pan.baidu.com/s/1smrTf2X", "https://pan.baidu.com/s/1o9DDWym", "https://pan.baidu.com/s/1db2NbK", "https://pan.baidu.com/s/1pMJHDPL"]


let urls = links.slice(18);
let request = require('request-promise');
request = request.defaults({jar: true})//保存cookie
const cheerio = require('cheerio');
let trueLink = async (url) => {
    return new Promise((resolve) => {
        request({
            uri: `http://jlwz.cn/api/baidu.php?jlwzcn=5201241&url=${url}`,
            json: true
        })
            .then((data) => {
                console.log(data);
                resolve(data.list[0].dlink);
            });
    });
};
let download = async (url) => {
    // url = await trueLink(url);
    url = "http://d.pcs.baidu.com/file/a9e90a0db2204c8fa3180a8f7e742d4f?fid=2947097186-250528-1093166451146973&time=1516786319&rt=sh&sign=FDTAERVY-DCb740ccc5511e5e8fedcff06b081203-BbEYjah7%2BA2CDW0MDgekJwWb9EQ%3D&expires=8h&chkv=1&chkbd=0&chkpc=et&dp-logid=550378476237358238&dp-callid=0&r=255959446";
    console.log(url);
    let cmd = `"C:\\Program Files (x86)\\Internet Download Manager\\IDMan.exe" /n /d "${url}"`;
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
        await download(urls.shift());
};
(async () => {
    await download(urls.shift());
})();

//http://jlwz.cn/api/baidu.php?jlwzcn=5201241&url=
//data.list[0].dlink
