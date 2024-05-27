const myLibrary = [
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

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
    }
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");
book1.info();
console.log(book1.info());
//addBookToLibrary();
console.table(myLibrary);

loopLibraryArray();


function addBookToLibrary() {
    let title = prompt("What is the book's title?");
    let author = prompt("What is the book's author?");
    let pages = parseInt(prompt("How many pages does the book have?"));
    let read = confirm("Have you read the book?");

    let myBook = {title: title, author: author, pages: pages, read: read};
    myLibrary.push(myBook);

}


function loopLibraryArray() {
    myLibrary.forEach(function(book) {
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

