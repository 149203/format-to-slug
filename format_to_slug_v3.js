const to_lower = require('lodash/fp/toLower')
const trim = require('lodash/fp/trim')
const deburr = require('lodash/fp/deburr')
const replace = require('lodash/fp/replace')
const flow = require('lodash/fp/flow')

module.exports = format_to_slug_v3 = string =>
   flow(
      to_lower,
      deburr,
      replace(/\s/gm, '-'),
      replace(/[^a-z0-9-]/gm, ''),
      replace(/[-]{2,}/gm, '-'),
      replace(/^-|-$/gm, ''),
      trim
   )(string)
