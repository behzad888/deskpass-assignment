import * as httpProxy from 'http-proxy';

export function ProxyMiddleware(host, options) {
  const proxy = httpProxy.createProxyServer({});
  const prepareProxyRequest = async (req) => {
    req.url = req.originalUrl || req.url;
    const proxyOptions = Object.assign({}, options);
    proxyOptions.target = host;
    return proxyOptions;
  };
  
  const middleware = async (req, res, next) => {
    try {
      const activeProxyOptions = await prepareProxyRequest(req);
      debugger
      proxy.web(req, res, activeProxyOptions);
    } catch (err) {
      next(err);
    }
  };

  return middleware;
}
