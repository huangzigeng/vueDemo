import axios from 'axios'

window.api = document.domain === 'weixin.51huimaobao.cn' ? 'http://api.51huimaibao.cn' : 'http://api.yuhongrocky.cn'
window.host = document.domain === 'weixin.51huimaobao.cn' ? 'http://weixin.51huimaibao.cn' : 'http://weixin.yuhongrocky.cn'

const http = function (config) {
    axios({
        baseURL: window.api + config.url,
        timeout: 5000,
        params: config.params,
        body: config.data,
        method: config.method || 'get'
    }).then((res) => {
        console.log(res)
    }, (err) => {
        console.log(err)
    })
}

http.get = function (config) {
    return http({
        url: config.url,
        params: config.params
    })
}

http.post = function (config) {
    return http({
        url: config.url,
        body: config.params,
        method: 'post'
    })
}

http.put = function (config) {
    return http({
        url: config.url,
        body: config.params,
        method: 'put'
    })
}

http.delete = function (config) {
    return http({
        url: config.url,
        body: config.params,
        method: 'delete'
    })
}

export default http
