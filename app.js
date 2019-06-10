const inquirer = require('inquirer')
const chalk = require('chalk')
const format_to_slug_v1 = require('./format_to_slug_v1')
const format_to_slug_v2 = require('./format_to_slug_v2')
const format_to_slug_v3 = require('./format_to_slug_v3')

function start_cli() {
   inquirer
      .prompt([
         {
            type: 'string',
            name: 'string',
            prefix: '',
            message: chalk.bold.yellow('Enter a string:'),
         },
      ])
      .then(answers => {
         const slug = format_to_slug_v3(answers.string) // replace with v1, v2, v3
         console.log(` Your slug is: \n ${chalk.bold.green(slug)}\n\n`)
         if (slug !== 'exit') start_cli()
      })
}

start_cli()

// test cases

// Andrea -Yates  Johnson
//  Mark O'Brien
// Jesse  Piño
// --Ashantí- Good-Phillips--
