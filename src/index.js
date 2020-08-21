const util = require('util')

/**
 * Wrap data with inspect & no level limits.
 */
const ratatoskr = (data) => util.inspect(data, false, null)

const debug = (data) => {
  console.debug(ratatoskr(data))
}

const error = (data) => {
  console.error(ratatoskr(data))
}

const info = (data) => {
  console.info(ratatoskr(data))
}

const log = (data) => {
  console.log(ratatoskr(data))
}

const table = (data) => {
  console.table(ratatoskr(data))
}

const warn = (data) => {
  console.warn(ratatoskr(data))
}

module.exports = {
  debug,
  error,
  info,
  log,
  table,
  warn,
}
