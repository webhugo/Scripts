let request = require('request-promise');
request = request.defaults({jar: true})//保存cookie
let csrftoken;
let objects;
let read = (id, time) => {
    request(
        {
            method: 'PUT',
            uri: "https://www.shanbay.com/api/v2/news/user/articles/iuoin/",
            body: {
                "operation": "finish",
                "used_time": 264.2
            },
            headers: {
                "Referer": "https://www.shanbay.com/news/articles/iuoin",
                "X-CSRFToken": csrftoken,
                "content-type": "application/json"
            },
            json: true
        })
        .then((body) => {
            console.log(body);
            return request(
                {
                    uri: "https://www.shanbay.com/api/v2/news/articles/wbhkq/",
                    headers: {
                        // "Referer": "https://www.shanbay.com/api/v2/news/articles/wbhkq/",
                        "X-CSRFToken": csrftoken
                    },
                    json: true
                })
        })
        .then((body) => {
            console.log(body);
        })
};
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
    })
    .then(() => {
        return request({
            uri: "https://www.shanbay.com/api/v2/news/articles/?ipp=10&page=1",
            json: true
        })
    })
    .then((body) => {
        objects = body.data.objects;
        objects.forEach(obj => {
            console.log(obj.title_en);
            let id = obj.id;
            //用长度充当时间
            let length = obj.length;
            console.log(id);
            console.log(length);
            read(id, length);
        });

    });


