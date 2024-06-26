// const myCreatedLibrary = [
//     {
//         title: "Harry Potter",
//         author: "J.K. Rowling",
//         pages: 999,
//         read: true,
//     },

//     {
//         title: "Animal Farm",
//         author: "George Orwell",
//         pages: 150,
//         read: true,
//     },
//     {
//         title: "Atlas Six",
//         author: "Olive Blake",
//         pages: 555,
//         read: false,
//     },
// ];

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
const svgRemove = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="16px" width="16px"><title>book-remove</title><path d="M13 19C13 20.1 13.3 21.12 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V13.09C19.67 13.04 19.34 13 19 13C15.69 13 13 15.69 13 19M22.54 16.88L21.12 15.47L19 17.59L16.88 15.47L15.47 16.88L17.59 19L15.47 21.12L16.88 22.54L19 20.41L21.12 22.54L22.54 21.12L20.41 19L22.54 16.88Z" /></svg>';

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
    closeDialog();
    //printLibraryCards();
})

function printLastBookCard() {
    const bookCard = document.createElement("div")
    bookCard.className = "card";
    document.getElementById("books").appendChild(bookCard);

    let indexNum = myLibrary.length - 1;
    console.log(indexNum);
    bookCard.setAttribute("data-index-number", indexNum)

    const lastBook = myLibrary[myLibrary.length - 1];
    //console.log("last book: " + JSON.stringify(lastBook));

    const titleDiv = document.createElement("div")
    titleDiv.classList = "title";
    titleDiv.innerHTML = `title:  ${JSON.stringify(lastBook.title)} \n`;
    bookCard.appendChild(titleDiv);

    const authorDiv = document.createElement("div")
    authorDiv.classList = "author";
    authorDiv.innerHTML = `author:  ${JSON.stringify(lastBook.author)} \n`;
    bookCard.appendChild(authorDiv);

    const pagesDiv = document.createElement("div")
    pagesDiv.classList = "pages";
    pagesDiv.innerHTML = `pages:  ${JSON.stringify(lastBook.pages)} \n`;
    bookCard.appendChild(pagesDiv);

    // const readDiv = document.createElement("div")
    // readDiv.classList = "read-status"
    // readDiv.innerHTML = `Read?:  ${JSON.stringify(lastBook.read)} \n`;
    // bookCard.appendChild(readDiv);

    const functionContainer = document.createElement("div");
    functionContainer.className = "function-container";
    bookCard.appendChild(functionContainer);

    //dropdown select
    const selectContainer = document.createElement("div");
    functionContainer.appendChild(selectContainer);
    selectContainer.classList = "select-container";

    // const selectLabel = document.createElement("label");
    // selectContainer.appendChild(selectLabel);
    // selectLabel.setAttribute("for", "read-status");
    // selectLabel.innerHTML = "Select Read Status: "

    const select = document.createElement("select");
    select.id = "read-status";
    select.setAttribute("name", "read-status");
    selectContainer.appendChild(select);

    const text = ["Select Read Status", "Read", "Want to Read", "DNF"];
    for (i = 0; i < text.length; i++) {
        const readOpt = document.createElement("option");
        readOpt.className = "status";
        readOpt.setAttribute("value", [i]);
        readOpt.innerHTML = text[i];
        select.appendChild(readOpt);
    }

    //remove button
    removeBtnContainer = document.createElement("button");
    functionContainer.appendChild(removeBtnContainer);
    //functionContainer.innerHTML = DOMPurify.sanitize(svgRemove);
    removeBtnContainer.innerHTML = svgRemove;

    //select attribute
    const readStatusSelects = document.querySelectorAll("select");
    readStatusSelects.forEach(selectElem => {
        selectElem.addEventListener("click", function () {
            const options = selectElem.options;
            for (let i = 0; i < options.length; i++) {
                options[i].removeAttribute("selected");
            }
            const selectedIndex = selectElem.selectedIndex;
            options[selectedIndex].setAttribute("selected", "true");
            lastBook.read = options.value;
            
        })
    })

}

// function createReadDropdown() {
// //read status dropdown
// const readDropdownContainer = document.createElement("div");
// readDropdownContainer.classList = "dropdown";
// functionContainer.appendChild(readDropdownContainer);

// const readDropdownBtn = document.createElement("button");
// readDropdownBtn.classList = "readDropBtn";
// readDropdownBtn.setAttribute("onclick", "toggleDropdown()")
// readDropdownBtn.innerHTML = "Read Status";
// readDropdownContainer.appendChild(readDropdownBtn);

// const readDropdownDiv = document.createElement("div");
// readDropdownDiv.id = "readDropdown";
// readDropdownDiv.classList = "dropdown-content";
// readDropdownBtn.appendChild(readDropdownDiv);

// const text = ["Read", "Want to Read", "DNF"];
// text.forEach(function(el) {
//     const readOpt = document.createElement("a");
//     readOpt.className = "status";
//     readOpt.innerHTML = el;
//     readDropdownDiv.appendChild(readOpt);
// })

// }

Object.setPrototypeOf(printLastBookCard.prototype, Book.prototype);

// function printLibraryCards() {
//     myLibrary.forEach(function (book) {
//         const bookCard = document.createElement("div")
//         bookCard.className = "card";
//         document.getElementById("books").appendChild(bookCard);

//         const titleDiv = document.createElement("div")
//         titleDiv.innerHTML = `title:  ${JSON.stringify(book.title)} \n`;
//         bookCard.appendChild(titleDiv);

//         const authorDiv = document.createElement("div")
//         authorDiv.innerHTML = `author:  ${JSON.stringify(book.author)} \n`;
//         bookCard.appendChild(authorDiv);

//         const pagesDiv = document.createElement("div")
//         pagesDiv.innerHTML = `pages:  ${JSON.stringify(book.pages)} \n`;
//         bookCard.appendChild(pagesDiv);

//         const readDiv = document.createElement("div")
//         readDiv.innerHTML = `Read?:  ${JSON.stringify(book.read)} \n`;
//         bookCard.appendChild(readDiv);
//     })
// }

const newBtn = document.querySelector("button#new");
const dialog = document.querySelector("dialog");

newBtn.addEventListener("click", () => {
    dialog.showModal();
})

const closeBtn = document.querySelector(".close");

function closeDialog() {
    dialog.close();
}

closeBtn.addEventListener("click", closeDialog);

function removeBook() {
    clickedBookCard = event.target.parentNode;
    console.log(clickedBookCard);
    //clickedBookCard.remove();
}


document.addEventListener("click", (e) => {
    //e.preventDefault();
    if (!e.target.closest(".function-container>button")) return;
    clickedBookCard = e.target.closest(".card");
    console.log(clickedBookCard);
    if (confirm('Are you sure you want to remove this book?')) {
        clickedBookCard.remove();
        console.log('Thing was removed.');
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}, false);