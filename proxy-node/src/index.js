import {ProxyMiddleware} from './middleware/proxy-middleware';
import assert from 'assert';

export default function proxy(host, options, handlers) {
  assert(host, 'Host should not be empty');
  return new ProxyMiddleware(
    host,
    Object.assign({changeOrigin: true, enableLogging: true}, options || {}),
    handlers
  );
}
