notes = [];

class Note {
    constructor(title) {
      this.title = title;
      this.element = this.createElement(title);
    }
  
    createElement(title) {
      let newNote = document.createElement("li");
      newNote.innerHTML = title;
      newNote.addEventListener('click', this.remove.bind(newNote));
      return newNote;
    }
  
    add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      let list = document.querySelector("#taskList");
      list.appendChild(this.element);
      this.saveToStorage();
    }
  
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
      let notesTitles = [];
      for (let i = 0; i < notes.length; i++) {
        notesTitles.push(notes[i].title);
      }
      localStorage.setItem('notes', JSON.stringify(notesTitles));
    }
  
    remove() {
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      //this.parentNode.removeChild(this);
      // remove the item from screen and from localstorage
      //console.log("remove");
      //localStorage.removeItem(note);

    }
  }

  
  class App {
    
    constructor() {
      console.log("👊🏼 The Constructor!");
      this.txtTodo = document.querySelector("#taskInput");
      this.list = document.querySelector("#taskList");
      this.txtTodo.addEventListener("keypress", this.createNote.bind(this)); // pressing the enter key in the text field triggers the createNote function

      // read up on .bind() -> we need to pass the current meaning of this to the eventListener
      // when the app loads, we can show previously saved noted from localstorage
      this.loadNotesFromStorage();
    }
  
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      if (localStorage.getItem("notes") !== null) {
        let notesFromStorage = JSON.parse(localStorage.getItem("notes")); //fill array
      
        for (let i = 0; i < notesFromStorage.length; i++) {
          console.log(notesFromStorage[i]);
          this.newNote(notesFromStorage[i]);
        }
      }
    }

    newNote(title) {
      const note = new Note(title); // create a new note by using the Note() class
      notes.push(note); //push note to array
      note.add(); // note.add();
    }
  
    createNote(e) {
      if(e.key === "Enter"){
        this.newNote(this.txtTodo.value);
        this.reset(); // clear text field
        // note.saveToStorage();
        e.preventDefault();
      }      
    }
  
    reset() {
      // this function should reset the form / clear the text field
      this.txtTodo.value = "";
    }
  }
  
  let app = new App();