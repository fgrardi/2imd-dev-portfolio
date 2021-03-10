class Note {
    constructor(parent, title) {
      this.parent = parent;
      this.title = title;
      this.element = this.createElement(title);
    }
  
    createElement(title) {
      //create new list item
      let newNote = document.createElement("li");
      newNote.innerHTML = title;
      newNote.addEventListener('click', this.remove.bind(this));
      return newNote;
    }
  
    add() {
      let list = document.querySelector("#taskList"); // select list
      list.appendChild(this.element); // append note to screen
    }
  
    saveToStorage() {
      const jsonArr = JSON.stringify(this.parent.notes);
      localStorage.setItem('notes', jsonArr);
    }
  
    remove() {
      for (let i = 0; i < this.parent.notes.length; i++) {
        if (this.title === this.parent.notes[i]) {
          this.parent.notes.splice(i, 1);
        }
      }    
      this.saveToStorage();
      this.element.parentNode.removeChild(this.element); //remove from ul
    }
  }
  
  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
      this.notes = [];
      this.txtTodo = document.querySelector("#taskInput");
      this.list = document.querySelector("#taskList");
      this.txtTodo.addEventListener("keypress", this.createNote.bind(this)); // pressing the enter key in the text field triggers the createNote function
      this.loadNotesFromStorage();
    }
  
    loadNotesFromStorage() {
      // load all notes from storage here and add them to the screen
      if (localStorage.getItem("notes") !== null) {
        const str = localStorage.getItem("notes");
        let parsedNotes = JSON.parse(str); //fill array

        for (let i = 0; i < parsedNotes.length; i++) {
          this.newNote(parsedNotes[i]);
        }
      }
    }

    newNote(title) {
      const note = new Note(this, title); // create a new note by using the Note() class
      const noteTitle = note.title;
      this.notes.push(noteTitle); //push note to array
      note.add(); // note.add();
      note.saveToStorage(); // when adding note, save to local storage storage
    }
  
    createNote(e) {
      if(e.key === "Enter"){
        this.newNote(this.txtTodo.value);
        this.reset(); // clear text field
        e.preventDefault();
      }      
    }
  
    reset() {
      // clear the text field when ENTER
      this.txtTodo.value = "";
    }
  }
  
  let app = new App();