const yargs = require('yargs');

const notes = require('./notes.js')
yargs.command({
    command: 'add',
    describe: 'Add note',
    builder: {
        title: {
            describe: 'This is title description in add command',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'This is body description in add command',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (x) => {
        notes.addNote(x.title, x.body)
    }
})

yargs.command({
    command: 'delete',
    describe: 'Delete note',
    builder: {
        title: {
            describe: 'This is body description in delete command',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (x) => {
        notes.removeNotes(x.title, x.body)
    }
})

// read 
yargs.command({
    command: 'read',
    describe: 'Read note',
    builder: {
        title: {
            describe: 'This is body description in read command',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (x) => {
        notes.readNotes(x.title)
    }
})
// list 

yargs.command({
    command: 'list',
    describe: 'List note',
    handler: (x) => {
        notes.listNotes()
    }
})

// yargs.parse()
console.log(yargs.argv)
