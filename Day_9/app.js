const chalk = require("chalk");
const yargs = require('yargs');
const notes = require('./notes')


yargs.version('1.1.0')

// Create Command 
yargs.command({
    command:'add',
    describe: 'Add a New Notes',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
        body :{
            describe:'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.parse()


// const test = chalk.green("Iam Green" + chalk.blue.underline.bold('With a blue suns'))
// const red = chalk.blue.bgRed.bold('Shall We Begin')
// console.log(red)




