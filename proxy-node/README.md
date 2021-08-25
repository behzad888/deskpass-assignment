# HTTP Proxt
Powered by the popular [node-http-proxy](https://github.com/http-party/node-http-proxy)

## Project setup
```
yarn install
```
## Project start
```
yarn start
```
## Format code
```
yarn prettier
```

## Options
 - **forward?**: URL string to be parsed with the url module        
 - **agent?**: Object to be passed to http(s).request.        
 - **xfwd?**: Adds x- forward headers
 - **secure?**:  Verify SSL certificate
 - **toProxy?**: Explicitly specify if we are proxying to another proxy.
 - **prependPath?**: Specify whether you want to prepend the target's path to the proxy path
 - **ignorePath?**: Specify whether you want to ignore the proxy path of the incoming request
 - **localAddress?**: Local interface string to bind for outgoing connections
 - **changeOrigin?**: Changes the origin of the host header to the target URL
 - **preserveHeaderKeyCase?**: specify whether you want to keep letter case of response header key
 - **hostRewrite?**: Rewrites the location hostname on (301 / 302 / 307 / 308) redirects, Default: null
 - **autoRewrite?**: Rewrites the location host/ port on (301 / 302 / 307 / 308) redirects based on requested host/ port.Default: false
 - **protocolRewrite?**: Rewrites the location protocol on (301 / 302 / 307 / 308) redirects to 'http' or 'https'.Default: null
 - **cookieDomainRewrite?**: rewrites domain of set-cookie headers
 - **cookiePathRewrite?**: rewrites path of set-cookie headers. Default: false
 - **headers?**: object with extra headers to be added to target requests
 - **proxyTimeout?**: Timeout (in milliseconds) when proxy receives no response from target. Default: 120000 (2 minutes)
 - **timeout?**: Timeout (in milliseconds) for incoming requests
 - **followRedirects?**: Specify whether you want to follow redirects. Default: false
 - **selfHandleResponse?**: If set to true, none of the webOutgoing passes are called and it's your responsibility to appropriately return the response by listening and acting on the proxyRes event
 - **buffer?**: Buffer

 ## Event Handlers
  - **onError**: The error event is emitted if the request to the target fail.
  - **onRequest**: This event is emitted before the data is sent.
  - **onResponse**: This event is emitted if the request to the target got a response.
  - **setLoggerProvider**: This event is for set custom logger.

  ## Note that
  > All the client paths, query strings, headers, and url fragments will pass to the proxy by default. for example:
  ```
    http://localhost/test-path -> https://example.com/test-path
    http://localhost/?user=test -> https://example.com/?user=test
    http://localhost/#fragment1=test -> https://example.com/#fragment1=test
  ```

  > See the example.js for simple usage