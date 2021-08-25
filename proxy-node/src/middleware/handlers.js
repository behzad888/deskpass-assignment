import {fixBodyContent} from './requestOptions';

export function mapHandlers(proxy, handlers, options, logger) {
  function Log(...args) {
    if (options.enableLogging) logger.info(...args);
  }

  //The error event is emitted if the request to the target fail.
  proxy.on('error', (error, clientRequest, response, target) => {
    Log('An error occured at %s:%s', new Date(), error.message);
    handlers.onError &&
      handlers.onError(error, clientRequest, response, target);
  });

  //This event is emitted before the data is sent.
  proxy.on('proxyReq', (proxyRequest, clientRequest, response, options) => {
    fixBodyContent(proxyRequest, clientRequest);
    Log('Request started at %s', new Date());

    handlers.onRequest &&
      handlers.onRequest(proxyRequest, clientRequest, response, options);
  });

  //This event is emitted if the request to the target got a response.
  proxy.on('proxyRes', (proxyResponse, clientRequest, response) => {
    Log(
      'Request finished at %s -> status:%s',
      new Date(),
      proxyResponse.statusCode
    );

    handlers.onResponse &&
      handlers.onResponse(proxyResponse, clientRequest, response);
  });

  //Set custom logger
  handlers.setLoggerProvider &&
    logger.setProvider(handlers.setLoggerProvider());
}
