class Note {
    constructor(title) {
      this.title = title;
      this.element = this.createElement(title);
    }
  
    createElement(title) {
      let newNote = document.createElement("li");
      newNote.addEventListener('click', this.remove.bind(newNote));
  
      return newNote;
    }
  
    add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      let list = document.querySelector("#taskList");
      console.log("test")
      list.appendChild(newNote);
      //newNote.innerHTML = this.txtTodo.value;
    }
  
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
  
    remove() {
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // .removeChild(this)
      // remove the item from screen and from localstorage
    }
  }
  
  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
  
      // HINT🤩
      // pressing the enter key in the text field triggers the createNote function
      this.txtTodo = document.querySelector("#taskInput");
      this.txtTodo.addEventListener("keypress", this.createNote.bind(this));

      // read up on .bind() -> we need to pass the current meaning of this to the eventListener
      // when the app loads, we can show previously saved noted from localstorage
      // this.loadNotesFromStorage();
    }
  
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
    }
  
    createNote(e) {
      // this function should create a new note by using the Note() class
      const note = new Note();

      // if (e.key === "Enter")
      if(e.key === "Enter"){
        console.log(this.txtTodo.value);
        note.add();
        e.preventDefault();
      }

      // HINT🤩
      // note.add();
      // note.saveToStorage();
      // clear the text field with .reset in this class
      
    }
  
    reset() {
      // this function should reset the form / clear the text field
    }
  }
  
  let app = new App();