import {ProxyMiddleware} from './middleware/proxy-middleware';
import assert from 'assert';

export default function proxy(
  host,
  options = {
    changeOrigin: true,
    enableLogging: true,
  },
  handlers = {}
) {
  assert(host, 'Host should not be empty');
  return new ProxyMiddleware(host, options, handlers);
}
