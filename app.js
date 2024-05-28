const myCreatedLibrary = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        pages: 999,
        read: true,
    },

    {
        title: "Animal Farm",
        author: "George Orwell",
        pages: 150,
        read: true,
    },
    {
        title: "Atlas Six",
        author: "Olive Blake",
        pages: 555,
        read: false,
    },
];

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function() {
    //     return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
    // }
}

Book.prototype.getInfo = function () {
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");
console.log(book1.getInfo());
//addBookToLibrary();
console.table(myLibrary);

function addBookToLibrary() {
    let title = document.getElementById("book-title").value;
    let author = document.getElementById("book-author").value;
    let pages = parseInt(document.getElementById("book-pages").value);
    let read = document.getElementById("book-read").value;

    let myBook = new Book(title, author, pages, read);
    console.log(myBook)
    myLibrary.push(myBook);

    console.log(myBook.getInfo())

}

const form = document.getElementById("book-submit");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    printLastBookCard();
    form.reset();
    //printLibraryCards();
})

function printLastBookCard() {
    const bookCard = document.createElement("div")
    bookCard.className = "card";
    document.getElementById("books").appendChild(bookCard);

    const lastBook = myLibrary[myLibrary.length-1];
    //console.log("last book: " + JSON.stringify(lastBook));

    const titleDiv = document.createElement("div")
    titleDiv.innerHTML = `title:  ${JSON.stringify(lastBook.title)} \n`;
    bookCard.appendChild(titleDiv);

    const authorDiv = document.createElement("div")
    authorDiv.innerHTML = `author:  ${JSON.stringify(lastBook.author)} \n`;
    bookCard.appendChild(authorDiv);

    const pagesDiv = document.createElement("div")
    pagesDiv.innerHTML = `pages:  ${JSON.stringify(lastBook.pages)} \n`;
    bookCard.appendChild(pagesDiv);

    const readDiv = document.createElement("div")
    readDiv.innerHTML = `Read?:  ${JSON.stringify(lastBook.read)} \n`;
    bookCard.appendChild(readDiv);
}

Object.setPrototypeOf(printLastBookCard.prototype, Book.prototype);




function printLibraryCards() {
    myLibrary.forEach(function (book) {
        const bookCard = document.createElement("div")
        bookCard.className = "card";
        document.getElementById("books").appendChild(bookCard);

        const titleDiv = document.createElement("div")
        titleDiv.innerHTML = `title:  ${JSON.stringify(book.title)} \n`;
        bookCard.appendChild(titleDiv);

        const authorDiv = document.createElement("div")
        authorDiv.innerHTML = `author:  ${JSON.stringify(book.author)} \n`;
        bookCard.appendChild(authorDiv);

        const pagesDiv = document.createElement("div")
        pagesDiv.innerHTML = `pages:  ${JSON.stringify(book.pages)} \n`;
        bookCard.appendChild(pagesDiv);

        const readDiv = document.createElement("div")
        readDiv.innerHTML = `Read?:  ${JSON.stringify(book.read)} \n`;
        bookCard.appendChild(readDiv);

        // const titleNode = document.createTextNode(`title:  ${JSON.stringify(book.title)} \n`);
        // const authorNode = document.createTextNode("author: " + JSON.stringify(book.author));
        // const pagesNode = document.createTextNode("pages: " + JSON.stringify(book.pages));
        // const readNode = document.createTextNode("read?: " + JSON.stringify(book.read));

        // bookCard.appendChild(titleNode);
        // bookCard.appendChild(authorNode);
        // bookCard.appendChild(pagesNode);
        // bookCard.appendChild(readNode);
    })
}

const newBtn = document.querySelector("button#new");
const dialog = document.querySelector("dialog");

newBtn.addEventListener("click", () => {
    dialog.showModal();
})

const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
    dialog.close();
})
