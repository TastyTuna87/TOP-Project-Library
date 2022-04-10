let myLibrary = [];
let testLib=[
  { id :1,
    a: 1,
    b:1},
    {
      id:2,
      a:2,
      b:2,
    }
]

let bookTitle = document.getElementById("bookTitle");
let bookAuthor = document.getElementById("bookAuthor");
let bookPages = document.getElementById("bookPages");
let id = 0;

const addButton = document.getElementById("addBook");
const container = document.getElementById("list");
const isRead = document.getElementById("read");
const isNotRead = document.getElementById("unread");
const bookNumber =document.getElementById("booksNumber");


function Book(title, author, pages, id) {
  // the constructor...
  this.id = id
  this.title = title
  this.author = author
  this.pages = pages
}
function addBookToLibrary() {
  addButton.addEventListener("click", ()=>{
    generateId();
      const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, id);
      myLibrary.push(book);
      addBooks();
      console.log(myLibrary)
  })
}
function addBooks(){
  const radButton = document.createElement("input");
  const remButton = document.createElement("button")
  let bookName = document.createElement("p");
  let bookAuthor = document.createElement("p");
  let bookPages = document.createElement("p");
  const bookDiv = document.createElement("div");
  const currentIndex = bookDiv.getAttribute("data-index");

  let userReadBooks =0;
  let userUnreadBooks = 0;
  isRead.innerHTML = userReadBooks ;
  let userBooks = myLibrary.length;
  bookNumber.innerHTML = userBooks;

    for(let i =0; i <myLibrary.length; i++){
      bookName.innerHTML = myLibrary[i].title
      bookAuthor.innerHTML = myLibrary[i].author
      bookPages.innerHTML = myLibrary[i].pages
    }
      radButton.className = "radioButton";
      radButton.setAttribute("type", "checkbox");
      radButton.id = "radButton";
      
      remButton.className = "removeButton";
      remButton.innerHTML ="Remove";
      bookDiv.append(bookName, bookAuthor, bookPages, radButton, remButton);
    
    bookDiv.id = id;
    bookDiv.setAttribute("data-index", id)
    bookDiv.className = "bookDiv";
    container.appendChild(bookDiv);
    remButton.addEventListener("click", () =>{
      isNotRead.innerHTML = userUnreadBooks -1;
      bookNumber.innerHTML = userBooks -1;
      removeBook(currentIndex);
      remButton.parentElement.remove();
     })
  for(let i = 0; i < myLibrary.length; i++){
    userUnreadBooks+=1;
    isNotRead.innerHTML = userUnreadBooks;
  }      
}
function removeBook(index){
    myLibrary.splice(index, 1);
    console.log(myLibrary)
}
function generateId(){
  id++;
}
function test(){
  
  console.log(testLib)
}
addBookToLibrary();

