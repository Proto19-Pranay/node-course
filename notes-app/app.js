// const add = require('./utils.js');
// sum = add(8,9);
// console.log(sum);
const chalk = require('chalk'); // Importing chalk library
const { default: validator } = require('validator'); // Importing validator library
const { argv } = require('yargs');
const yargs = require('yargs');


const message = require('./notes.js');
const getMessage = message();

console.log(getMessage);
console.log(validator.isMobilePhone('8663'))
// console.log(validator.isEmail('pichai@google.com'));
// console.log(validator.isURL('itsnot'));

console.log(chalk.green.bold.inverse("Hello")+chalk.inverse.green("World!"));

console.log(process.argv[2]);


yargs.command({
    command: 'add',
    describe: 'adding notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title',argv.title);
        console.log('Body',argv.body);
    }
}) // Add command

yargs.command({
    command: 'remove',
    describe: 'removing notes',
    handler: function(){
        console.log('Removing a note...')
    }
}) // Remove command

yargs.command({
    command: 'list',
    describe: 'listing notes',
    handler: function(){
        console.log('Listing a note!')
    }
}) // List command

yargs.command({
    command: 'read',
    describe: 'reading commands',
    handler: function(){
        console.log('Reading the notes...')
    }
})

//console.log(yargs.argv);
console.log(yargs.parse());

