# node-command-line-options
pass options to your script via command line

# usage
test.js
>var arguments = require('node-command-line-option');
>console.log(arguments.getOption());

#run 
>node test.js --name='Naruto' --job='Ninja'

#output
>{ name: 'naruto', job: 'ninja' }
