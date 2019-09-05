const library = document.querySelector('#libraryContainer');
const bookForm = document.querySelector('#bookInput');
const bookTable = document.querySelector('#bookTable');

let myLibrary = [];

function Book(title, author, pages, read) {   // constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;   
}

function newBook() {
    bookForm.style.display = 'block';
    // bookForm.appendChild(document.createElement('form')).setAttribute('id', 'bookForm');
    // document.querySelector('#bookForm').appendChild(document.createElement('p')).innerHTML = 'Title';
    // document.querySelector('#bookForm').appendChild(document.createElement('input')).setAttribute('type', 'text');
    // document.querySelector('#bookForm').appendChild(document.createElement('p')).innerHTML = 'Author';
    // document.querySelector('#bookForm').appendChild(document.createElement('input')).setAttribute('type', 'text');
    // document.querySelector('#bookForm').appendChild(document.createElement('p')).innerHTML = 'Pages';
    // document.querySelector('#bookForm').appendChild(document.createElement('input')).setAttribute('type', 'text');
    // document.querySelector('#bookForm').appendChild(document.createElement('p')).innerHTML = 'Read?';
    // document.querySelector('#bookForm').appendChild(document.createElement('input')).setAttribute('type', 'checkbox');
    // document.querySelector('#bookForm').appendChild(document.createElement('button')).setAttribute('id', 'submit');
    // document.querySelector('#bookForm').lastChild.innerHTML = 'Submit';
}

function removeBook(bookIndex) {
    console.log(bookIndex);
    let bookCard = document.querySelector('.'+ bookIndex)
    library.removeChild(bookCard);
}

function addBookToLibrary(obj) {
    myLibrary.push(obj);
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
        console.log(document.getElementsByTagName('button'));
    });
}

function createListeners() {
    const newButton = document.querySelector('#newBook');
    const removeButtons = document.querySelectorAll('.removeBtn');
    const submitButton = document.querySelector('#submit');

    newButton.addEventListener('click', (e) => {
        newBook();
        console.log('New Button was pressed.');
    });

    removeButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(button.id);
            removeBook(button.id);
        });
    });
}

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree);
render(myLibrary);
createListeners();
