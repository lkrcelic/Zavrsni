const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/gestikulator',
    createProxyMiddleware({
      target: 'http://localhost:8080',  // Replace with your API server URL
      changeOrigin: true,
      pathRewrite: {
        "^/api/gestikulator": "/",
      },
    })
  );

  app.use(
    '/api/python',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: {
        "^/api/python": "/",
      },
    })
  );
};
