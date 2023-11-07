const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://localhost:8080/',
        secure: false, //para https secure: true
        loglevel: 'debug',
        changeOrigin: true,
        pathRewrite: { '^/api': '' } 
    }
];

module.exports = PROXY_CONFIG; 