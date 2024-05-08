// const myLibrary = [
//   "The Hobbit by J.R.R Tolkien 295 pages not read yet",
//   "A revolução dos bichos George Orwell",
//   "O pequeno príncipe Escritor",
// ];

const myLibrary = [];

function book() {
  // the constructor
}

function addBookToLibrary(livro) {
  // adiciona o livro na biblio
  myLibrary.push(livro);
}

function displayBooks() {
  // document.getElementById("livro").innerHTML = myLibrary[0]
  const livros = document.getElementById("livro");
  // livros.innerHTML = myLibrary[0]

  function mostrar(value, index, array) {
    livros.innerHTML += `<div class="livreto">` + value + "</div>" + "<br>";
    // esvazia a string agora
  }

  myLibrary.forEach(mostrar);

  for (let i = 0; i < myLibrary.length; i++) {
    myLibrary.pop();
  }
}

// displayBooks();

document.getElementById("botao-add").addEventListener("click", (button) => {
  // isso só muda o livro pro 2 da lista
  // document.getElementById("livro").innerHTML = myLibrary[1]

  // isso daqui pede um livro e joga na função de adicionar na biblio
  let x = prompt("diz ai otro");
  addBookToLibrary(x);
});

document.getElementById("botao-mostrar").addEventListener("click", (button) => {
  // isso daqui pega os livros da biblioteca e poe tudo sem formatação direto no html
  // document.getElementById("livro").innerHTML = myLibrary
  displayBooks();
});
