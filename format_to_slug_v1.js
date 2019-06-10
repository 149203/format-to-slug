const to_lower = require('lodash/toLower')
const trim = require('lodash/trim')
const deburr = require('lodash/deburr')
const replace = require('lodash/replace')

module.exports = format_to_slug_v1 = string => 
   trim(
      replace(
         replace(
            replace(
               replace(
                  deburr(
                     to_lower(string)
                  ),
                  /\s/gm,
                  '-'
               ),
               /[^a-z0-9-]/gm,
               ''
            ),
            /[-]{2,}/gm,
            '-'
         ),
         /^-|-$/gm,
         ''
      )
   )   

   