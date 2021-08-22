import {stringify} from 'querystring';

export function requestHeaders(req, options) {
  const headers = Object.assign(options.headers || {}, req.headers);
  headers.connection = 'close';

  return headers;
}

export function fixBodyContent(proxyReq, req) {
  if (!req.body || !Object.keys(req.body).length) {
    return;
  }

  const contentType = proxyReq.getHeader('Content-Type');
  const writeBody = (bodyData) => {
    proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
    proxyReq.write(bodyData);
  };

  if (contentType.includes('application/json')) {
    writeBody(JSON.stringify(req.body));
  }

  if (contentType.includes('application/x-www-form-urlencoded')) {
    writeBody(stringify(req.body));
  }
}
