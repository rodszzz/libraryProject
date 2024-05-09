// const myLibrary = [
//   "The Hobbit by J.R.R Tolkien 295 pages not read yet",
//   "A revolução dos bichos George Orwell",
//   "O pequeno príncipe Escritor",
// ];

const cardContainer = document.querySelector(".card-container");
const addBook = document.querySelector(".btn-add");
const formDialog = document.querySelector("#form-dialog");
const formContainer = document.querySelector(".form-container");
const submitBtn = document.querySelector(".btn-submit");
const formTitle = document.querySelector("#title");
const formAuthor = document.querySelector("#author");
const formPages = document.querySelector("#pages");
const formRead = document.querySelector("#read");

const myLibrary = [];

addBook.addEventListener("click", (button) => {
  formContainer.reset();
  formDialog.showModal();

  // isso só muda o livro pro 2 da lista
  // document.getElementById("livro").innerHTML = myLibrary[1]

  // isso daqui pede um livro e joga na função de adicionar na biblio
  //   let x = prompt("diz ai otro");
  //   addBookToLibrary(x);
  //
  //   const livros = document.getElementById("livro");
  //
  //   function mostrar(value) {
  //     livros.innerHTML +=
  //       `<div id="livreto">` +
  //       value +
  //       ` <button id="btn-del">delete</button>` +
  //       "</div>" +
  //       "<br>";
  //   }
  //
  //   myLibrary.forEach(mostrar);
  //
  //   // esvazia a string dos livros
  //   for (let i = 0; i < myLibrary.length; i++) {
  //     myLibrary.pop();
  //   }
  // });
  //
  // document.getElementById("btn-del").addEventListener("click", (button) => {
  //   livroToDelete = document.getElementById("livreto");
  //   livroToDelete.remove();
});

submitBtn.addEventListener("click", (event) => {
  addBookToLibrary();
  event.preventDefault();
  formDialog.close();
});

formDialog.addEventListener("click", () => {
  formDialog.close();
});

formContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});

function Book(title, author, noPages, read) {
  // the constructor
  this.title = title;
  this.author = author;
  this.noPages = noPages;
  this.read = read;
}

// faz um novo objeto livro e poe na lista
function addBookToLibrary() {
  // myLibrary.push(livro);
  let title = formTitle.value;
  let author = formAuthor.value;
  let noPages = formPages.value;
  let answer = formRead.value;

  if (answer == "sim") {
    read = "Lido";
  } else {
    read = "Não lido";
  }

  newBook = new Book(title, author, noPages, read);
  myLibrary.push(newBook);
  makeCard();
}

function makeCard() {
  const newCard = document.createElement("div");
  const cardTitle = document.createElement("h2");
  const cardAuthor = document.createElement("p");
  const cardNoPages = document.createElement("p");
  const readBtn = document.createElement("button");
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "Remover";

  for (let book of myLibrary) {
    cardTitle.textContent = `${book.title}`;
    cardAuthor.textContent = "Escrito por: " + book.author;
    cardNoPages.textContent = "Páginas: " + book.noPages;
    readBtn.innerHTML = book.read;

    if (book.read == "Lido") {
      readBtn.style.background = "#94ff93";
    } else if (book.read == "Não lido") {
      readBtn.style.background = "#fd9090";
    }
  }

  readBtn.addEventListener("click", () => {
    for (let book of myLibrary) {
      if (book.read == "Lido") {
        readBtn.style.background = "#fd9090";
        readBtn.innerHTML = "Não lido";
        book.read = "Não lido";
      } else if (book.read == "Não lido") {
        readBtn.style.background = "#94ff93";
        readBtn.innerHTML = "Lido";
        book.read = "Lido";
      }
    }
  });

  removeBtn.addEventListener("click", () => {
    cardContainer.removeChild(newCard);
  });

  newCard.appendChild(cardTitle).className = "card-title card-elements";
  newCard.appendChild(cardAuthor).className = "card-author card-elements";
  newCard.appendChild(cardNoPages).className = "card-nop card-elements";
  newCard.appendChild(readBtn).className = "read-button card-buttons";
  newCard.appendChild(removeBtn).className = "remove-button card-buttons";
  cardContainer.appendChild(newCard).className = "card";
}
