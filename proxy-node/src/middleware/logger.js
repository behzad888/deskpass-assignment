import * as util from 'util';

// make it possible for additional log data, such date/time or custom prefix.
function _interpolate(...args) {
  const result = util.format(...args);

  return result;
}

const defaultProvider = {
  error: console.error,
  warn: console.warn,
  info: console.info,
  http: console.log,
  verbose: console.log,
  debug: console.log,
  silly: console.log,
};

function logger() {
  let logProvider;

  //The logger provider should be a single instance because some 3rd party libraries work this way.
  function getLoggerProvider() {
    if (!logProvider) {
      logProvider = defaultProvider;
    }

    return logProvider;
  }
  function error(...args) {
    getLoggerProvider().error(_interpolate(...args));
  }
  function warn(...args) {
    getLoggerProvider().warn(_interpolate(...args));
  }
  function info(...args) {
    getLoggerProvider().info(_interpolate(...args));
  }
  function http(...args) {
    getLoggerProvider().http(_interpolate(...args));
  }
  function verbose(...args) {
    getLoggerProvider().verbose(_interpolate(...args));
  }
  function debug(...args) {
    getLoggerProvider().debug(_interpolate(...args));
  }
  function silly(...args) {
    getLoggerProvider().silly(_interpolate(...args));
  }

  //You can set any logging provider like winston, log-level, npmlog, etc...
  function setProvider(provider) {
    logProvider = provider;
  }

  return {error, warn, info, http, verbose, debug, silly, setProvider};
}

export default logger();
