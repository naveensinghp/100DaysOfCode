const validator = require('validator');
const chalk = require("chalk");
const yargs = require('yargs');


yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe: 'Add a new note',
    handler:function(){
        console.log('Adding a new note');
    }
})


yargs.command({
    command:'remove',
    describe: 'remove a note',
    handler:function(){
        console.log('Removing the note');
    }
})



yargs.command({
    command:'list',
    describe: 'This is List Page',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
        body :{
            describe:'Note body',
        }
    },
    handler:function(argv){
        console.log('List Page',argv)
    }
})

console.log(yargs.argv)


// const test = chalk.green("Iam Green" + chalk.blue.underline.bold('With a blue suns'))
// const red = chalk.blue.bgRed.bold('Shall We Begin')
// console.log(red)




