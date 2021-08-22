import * as httpProxy from 'http-proxy';
import {mapHandlers} from './handlers';
import logger from './logger';
import {fixBodyContent, requestHeaders} from './requestOptions';

export function ProxyMiddleware(host, options, handlers) {
  const proxy = httpProxy.createProxyServer({});
  logger.info('%s: Proxy created -> %s ', new Date(), host);
  mapHandlers(proxy, handlers, options);

  const prepareProxyRequest = (req, res) => {
    const proxyOptions = Object.assign({}, options);

    requestHeaders(req, options);
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
