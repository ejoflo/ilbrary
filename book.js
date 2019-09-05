const library = document.querySelector('#libraryContainer');
const bookInput = document.querySelector('#bookInput');
const bookTable = document.querySelector('#bookTable');

let myLibrary = [];

function Book(title, author, pages, read) {   // book constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;   
}

function clearLibrary() {
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
}

function removeBook(bookIndex) {
    let bookCard = document.querySelector('.'+ bookIndex)
    library.removeChild(bookCard);
}

function addBookToLibrary(obj) {
    myLibrary.unshift(obj);
}

function newBoko() {
    const form = document.querySelector('form');
    const titleInput = form.titleInput;
    const authorInput = form.authorInput;
    const pagesInput = form.pagesInput;
    const readYesInput = form.readYesInput;
    const readNoInput = form.readYesInput;
    
    let newTitle = titleInput.value;
    let newAuthor = authorInput.value;
    let newPages = +pagesInput.value;
    let newRead;
    let newBook;

    if (readYesInput.value === 'yes') {
        newRead = 'Yes';
    } else {
        newRead = 'No';
    }

    newBook = new Book (newTitle, newAuthor, newPages, newRead);

    addBookToLibrary(newBook);
    clearLibrary();
    render(myLibrary);
    bookInput.style.display = 'none';

}

// Book.prototype.info = function() {   // info
//     return this.title + ' by ' + this.author + ', ' + this.pages + ', ' + this.read;
// }

let bookOne = new Book ('Random Book', 'Randall Randy', 120, 'Yes');
let bookTwo = new Book ('Whatever Dis Crap Called', 'Wanda Whatever', 200, 'No');
let bookThree = new Book('Stupid Shitboi', 'Moby Dickwad', 1000, 'Yes');

function render(arr) {
    arr.forEach(function(element, index, theArray) {
        library.appendChild(document.createElement('div')).classList.add('bookIndex' + '' + index);
        document.querySelector('.bookIndex' + '' + index).appendChild(document.createElement('p')).innerHTML = 'Title: ' + theArray[index]['title'];
        document.querySelector('.bookIndex' + '' + index).appendChild(document.createElement('p')).innerHTML = 'Author: ' + theArray[index]['author'];
        document.querySelector('.bookIndex' + '' + index).appendChild(document.createElement('p')).innerHTML = 'Pages: ' + theArray[index]['pages'];
        document.querySelector('.bookIndex' + '' + index).appendChild(document.createElement('p')).innerHTML = 'Read? ' + theArray[index]['read'];
        document.querySelector('.bookIndex' + '' + index).appendChild(document.createElement('button')).setAttribute('id', 'bookIndex' + '' + index);
        document.querySelector('#bookIndex' + '' + index).setAttribute('class', 'removeBtn');
        document.querySelector('#bookIndex' + '' + index).innerHTML = 'Remove';
    });
}

function createListeners() {
    const newButton = document.querySelector('#newBook');
    const removeButtons = document.querySelectorAll('.removeBtn');
    const submitButton = document.querySelector('#submit');

    newButton.addEventListener('click', (e) => {
        bookInput.style.display = 'block';
    });

    removeButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            removeBook(button.id);
        });
    });

    submitButton.addEventListener('click', (e) => {
        // document.forms["bookForm"].submit();
        newBoko();
    });
}

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree);
render(myLibrary);
createListeners();
