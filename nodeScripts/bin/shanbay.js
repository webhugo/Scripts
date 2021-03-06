let request = require('request-promise');
request = request.defaults({jar: true})//保存cookie
const cheerio = require('cheerio');
let csrftoken;
let objects;
let read = (id, time) => {
    request(
        {
            method: 'PUT',
            uri: `https://www.shanbay.com/api/v2/news/user/articles/${id}/`,
            body: {
                "operation": "finish",
                "used_time": time
            },
            headers: {
                "Referer": `https://www.shanbay.com/news/articles/${id}`,
                "X-CSRFToken": csrftoken,
                "content-type": "application/json"
            },
            json: true
        })
        .then((body) => {
            console.log(body);
            return request(
                {
                    uri: `https://www.shanbay.com/api/v2/news/articles/${id}/`,
                    headers: {
                        "X-CSRFToken": csrftoken
                    },
                    json: true
                })
        })
        .then((body) => {
            console.log(body.data.is_finished);
        })
};
let start = async () => {
    return new Promise(resolve => {

        request({
            uri: "https://www.shanbay.com/api/v2/news/articles/?ipp=10&page=1",
            json: true
        })
            .then((body) => {
                objects = body.data.objects;
                let time = setInterval(() => {
                    if (objects.length === 0) {
                        clearInterval(time);
                        resolve();
                        return;
                    }
                    let obj = objects.shift();
                    let id = obj.id;
                    // 用长度充当时间
                    let length = obj.length;
                    read(id, length);
                }, 1000);
            });
    })


};
(async function () {
    request(
        {
            method: 'PUT',
            uri: "https://www.shanbay.com/api/v1/account/login/web/",
            resolveWithFullResponse: true,
            formData: {
                'username': '18940874730',
                'password': 'csc201592049',
            }
        })
        .then((httpResponse) => {
            let cookies = httpResponse.headers['set-cookie'];
            csrftoken = cookies[1].split("=")[1].split(';')[0];
            console.log(csrftoken);
        })
        .then(async () => {
            await start();
            console.log("again");
            await start();
        });
})();



