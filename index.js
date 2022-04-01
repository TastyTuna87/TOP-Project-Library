let myLibrary = [
  {
    title: "Cim",
    author : "Szerzo",
    pages : "250"
  }
];

let bookTitle = document.getElementById("bookTitle");
let bookAuthor = document.getElementById("bookAuthor");
let bookPages = document.getElementById("bookPages");

const addButton = document.getElementById("addBook");
const container = document.getElementById("list");
const lineContainer = document.createElement("div");

function Book(title, author, pages) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
}

function addBookToLibrary() {
  addButton.addEventListener("click", ()=>{
      const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
      myLibrary.push(book);
    library();
  })
}
function library(){
  lineContainerDiv();
  addBookName();
  addBookAuthor();
  addBookPages();
  radioButton();
  removeButton();
}
function lineContainerDiv(){
    lineContainer.className="lineContainer";
    container.appendChild(lineContainer);
}
function addBookName(){
  let bookName = document.createElement("p");
  bookName.className = "bookName";
  for(let i =0; i <myLibrary.length; i++){
    bookName.innerHTML = JSON.stringify(myLibrary[i].title)
  }
  lineContainer.appendChild(bookName)
}
function addBookAuthor(){
  let bookAuthor = document.createElement("p");
  bookAuthor.className = "bookAuthor";
  for(let i =0; i <myLibrary.length; i++){
    bookAuthor.innerHTML = JSON.stringify(myLibrary[i].author)
  }
  lineContainer.appendChild(bookAuthor)
}
function addBookPages(){
  let bookPages = document.createElement("p");
    bookPages.className = "bookPages";
    for(let i =0; i <myLibrary.length; i++){
      bookPages.innerHTML = JSON.stringify(myLibrary[i].pages)
    }
    lineContainer.appendChild(bookPages);
}
function radioButton(){
  const radButton = document.createElement("input");
  radButton.className = "radioButton";
  radButton.setAttribute("type", "checkbox");
  lineContainer.appendChild(radButton);
}
function removeButton(){
  const remButton = document.createElement("button")
  remButton.className = "removeButton";
  remButton.innerHTML ="Remove";
  lineContainer.appendChild(remButton);
  remButton.addEventListener("click", () =>{
    remButton.parentElement.remove();
  })
}
addBookToLibrary();
