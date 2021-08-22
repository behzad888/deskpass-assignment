import * as httpProxy from 'http-proxy';
import {mapHandlers} from './handlers';
import Logger from './logger';
import {fixBodyContent, requestHeaders} from './requestOptions';

export function ProxyMiddleware(host, options, handlers) {
  const proxy = httpProxy.createProxyServer({});
  const logger = Logger();
  mapHandlers(proxy, handlers || {}, options, logger);
  logger.info('%s: Proxy created -> %s ', new Date(), host);

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
