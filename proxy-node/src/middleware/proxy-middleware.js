import * as httpProxy from 'http-proxy';
import {fixBodyContent, requestHeaders} from './requestOptions';

export function ProxyMiddleware(host, options) {
  const proxy = httpProxy.createProxyServer({});
  
  proxy.on('proxyReq', function(proxyReq, req) {
    fixBodyContent(proxyReq,req);
  });

  const prepareProxyRequest = (req, res) => {
    const proxyOptions = Object.assign(
      {
        changeOrigin: true
      },
      options
    );
  
    requestHeaders(req, options)
    proxyOptions.target = host;
    return proxyOptions;
  };

  const middleware = (req, res, next) => {
    try {
      const activeProxyOptions = prepareProxyRequest(req, res);
      proxy.web(req, res, activeProxyOptions);
    } catch (err) {
      next(err);
    }
  };

  return middleware;
}
