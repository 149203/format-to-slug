const to_lower = require('lodash/toLower')
const trim = require('lodash/trim')
const deburr = require('lodash/deburr')
const replace = require('lodash/replace')

// Below are function expressions, processed in order at execution
// https://stackoverflow.com/a/3887590

module.exports = format_to_slug_v2 = string => {   
   let formatted_string = to_lower(string)
   formatted_string = deburr(formatted_string)
   formatted_string = replace(formatted_string, /\s/gm, '-')
   formatted_string = replace(formatted_string, /[^a-z0-9-]/gm, '')
   formatted_string = replace(formatted_string, /[-]{2,}/gm, '-')
   formatted_string = replace(formatted_string, /^-|-$/gm, '')
   formatted_string = trim(formatted_string)
   return formatted_string
}
