import * as util from 'util';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};

// make it possible for additional log data, such date/time or custom prefix.
function _interpolate(...args) {
  const result = util.format(...args);

  return result;
}

const defaultProvider = {
  error: (...args) => console.error(_interpolate(...args)),
  warn: (...args) => console.warn(_interpolate(...args)),
  info: (...args) => console.info(_interpolate(...args)),
  http: (...args) => console.log(_interpolate(...args)),
  verbose: (...args) => console.log(_interpolate(...args)),
  debug: (...args) => console.log(_interpolate(...args)),
  silly: (...args) => console.log(_interpolate(...args)),
};

function prepareLogger() {
  let logProvider;
  //Single instance of logger provider
  function getLoggerProvider() {
    if (!logProvider) {
      logProvider = defaultProvider;
    }

    return logProvider;
  }
  function error(...args) {
    getLoggerProvider().error(...args);
  }
  function warn(...args) {
    getLoggerProvider().warn(...args);
  }
  function info(...args) {
    getLoggerProvider().info(...args);
  }
  function http(...args) {
    getLoggerProvider().http(...args);
  }
  function verbose(...args) {
    getLoggerProvider().verbose(...args);
  }
  function debug(...args) {
    getLoggerProvider().debug(...args);
  }
  function silly(...args) {
    getLoggerProvider().silly(...args);
  }

  function setProvider(provider) {
    logProvider = provider;
  }

  return {error, warn, info, http, verbose, debug, silly, setProvider};
}

const logger = prepareLogger();
export default logger;
