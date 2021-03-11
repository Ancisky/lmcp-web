
const conf = {
    // 项目开发环境后端请求地址
    dev_base_url: '/server/',
    // dev_base_url: 'http://localhost:7071/', // 连接本机服务器就改成这个，注释上面的

    // 项目生产环境后端请求地址
    pro_base_url: 'http://localhost:8080/',

    neo4j:{
        // url: 'bolt://m88h0ixk7x.54http.tech:59811',
        url: 'bolt://amorsc.top',
        username: 'neo4j',
        password: '123456'
    },


}

export default conf
