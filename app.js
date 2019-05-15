//const fs=require('fs');
//fs.writeFileSync('note.txt', 'My name is latha.')
//fs.appendFileSync('note.txt', 'I am a girl')
//const namefromutil=require('./utils.js')
//const name="Latha";
//console.log(namefromutil);

const validator=require('validator');
const yargs = require('yargs');
const chalk= require('chalk');
const notes = require('./notes.js')
//const msg=getNotes();
//console.log(msg);
//console.log(validator.isEmail('latha.bp&gmail.com'))
//console.log(chalk.yellow.bold('Success') + " "+chalk.blue.underline.bold('where there is a will there is a way'))

//const command=process.argv[2];
//console.log(process.argv[2]);
// if(command==="add"){
// console.log("Adding");
// }else if(command==="remove"){
// console.log("removing");
// }

yargs.version('1.1.0');
//console.log(yargs.argv);

yargs.command({
    command:'add',
    describe:'adding Note',
    builder : {
       title:{
           describe:'title goes here',
           demandOption:'true',
           type: 'string'
       }
    },
    body:{
        describe:'body goes here',
        demandOption:'true',
        typr: 'string'
    },
    handler:function(argv){
        console.log("Adding the Note");
        notes.addNotes(argv.title,argv.body);
        
        //console.log("title:"+argv.title);
        //console.log("body:"+argv.body);
    }
})

yargs.command({
    command:'read',
    describe:'Reading Note',
    builder : {
        title:{
            describe:'title goes here',
            demandOption:'true',
            type: 'string'
        }
     },
    handler:function(argv){
        notes.readNotes(argv.title);
        console.log("Reading the Note");
    }
})

yargs.command({
    command:'remove',
    describe:'removing Note',
    builder : {
        title:{
            describe:'Notes title',
            demandOption:'true',
            type: 'string'
        }
     },
    
    handler:function(argv){
        console.log("Removing the Note");
        notes.removeNotes(argv.title);
    }
})

yargs.command({
    command:'list',
    describe:'List Note',
    handler:function(){
        notes.listNotes();
        console.log("Listing the Note");
    }
})
//console.log(yargs.argv);
yargs.parse();