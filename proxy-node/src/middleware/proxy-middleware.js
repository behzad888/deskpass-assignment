import * as httpProxy from 'http-proxy';
import {fixBodyContent, reqHeaders} from './requestOptions';

export function ProxyMiddleware(host, options) {
  const proxy = httpProxy.createProxyServer({});
  
  proxy.on('proxyReq', function(proxyReq, req) {
    fixBodyContent(proxyReq,req);
  });

  const prepareProxyRequest = async (req, res) => {
    req.url = req.originalUrl || req.url;
    const proxyOptions = Object.assign(
      {
        changeOrigin: true
      },
      options
    );
  
    reqHeaders(req, options)
    proxyOptions.target = host;
    return proxyOptions;
  };

  const middleware = async (req, res, next) => {
    try {
      const activeProxyOptions = await prepareProxyRequest(req, res);
      proxy.web(req, res, activeProxyOptions);
    } catch (err) {
      next(err);
    }
  };

  return middleware;
}
