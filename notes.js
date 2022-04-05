const fs = require('fs');
const { title } = require('process');
// const { title } = require('process');

// addNote

const addNote = (title,body) =>{
    const notes = loadNotes() // []  //  [{title:"test",body:"body"}]
    const duplicateTitles = notes.find((note) =>{
        return note.title === title;
    });
    console.log(duplicateTitles);

    if(!duplicateTitles) {
        notes.push({
        title,
        body
    })
    saveNotes(notes);
    } else {
        console.log('Erorr duplicateTitle');
    }
}
// ////////remove
const removeNotes = (title) =>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>{
        return note.title !== title;
    })
    console.log(notesToKeep);
    saveNotes(notesToKeep);
    console.log('Deleted successful');
}
//////////////////// read
const readNotes = (title) =>{
    const notes = loadNotes() // []  //  [{title:"test",body:"body"}]
    const notesread = notes.find((note) =>{
        return note.title === title;
    });
    console.log(notesread);

    if(notesread) {
        console.log(notesread.body);
    } else {
        console.log('no read');
    }
}
// Asdzxcwe23@#
////////// lest
const listNotes = () =>{
    const notes = loadNotes()
    notes.forEach((el) =>{
        console.log(el.title)
    });
}

const loadNotes = () =>{
    try{
        // [{"title":"test","body":"body"}]
    const dataBuffer = fs.readFileSync('notes.json').toString() // json
    // [{title:"test",body:"body"}]
    return JSON.parse(dataBuffer)
    }
    catch(e){
        return []
    }
}

const saveNotes = (notes) =>{
    const saveData = JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveData)
}

module.exports = {
    addNote,
    removeNotes,
    readNotes,
    listNotes
}