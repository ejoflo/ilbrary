const library = document.querySelector('#libraryContainer');
const bookInput = document.querySelector('#bookInput');
let myLibrary = [];

// Book.prototype.info = function() {   // info
//     return this.title + ' by ' + this.author + ', ' + this.pages + ', ' + this.read;
// }

function Book(title, author, pages, read) {   // book constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function removeBook(bookIndex) {
    let bookNum = bookIndex.slice(9, bookIndex.length);
    let bookCard = document.querySelector('.'+ bookIndex)
    
    myLibrary.splice(bookNum, 1);
    myLibrary.forEach(function(element, index, theArray) {   // update the Array index
        myLibrary[index]['index'] = index;
    });
    clearLibrary();
    render(myLibrary);
    createListeners();
}

function addBookToLibrary(obj) {
    myLibrary.push(obj);
    obj.index = myLibrary.length-1;
}

function clearLibrary() {
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
    clearForm();
    bookInput.style.display = 'none';
}

function clearForm() {
    const form = document.querySelector('form');
    const titleInput = form.titleInput;
    const authorInput = form.authorInput;
    const pagesInput = form.pagesInput;
    const readYesInput = form.readYesInput;
    
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readYesInput.checked = false;
}

function newBook() {
    const form = document.querySelector('form');
    const titleInput = form.titleInput;
    const authorInput = form.authorInput;
    const pagesInput = form.pagesInput;
    const readYesInput = form.readYesInput;
    
    let newTitle = titleInput.value;
    let newAuthor = authorInput.value;
    let newPages = +pagesInput.value;
    let newRead = readYesInput.checked;
    let newBook;

    if (newRead === true) {
        newRead = 'Yes';
    } else {
        newRead = 'No';
    }

    newBook = new Book (newTitle, newAuthor, newPages, newRead);

    addBookToLibrary(newBook);
    clearLibrary();
    render(myLibrary);
    createListeners();
}

function render(arr) {
    arr.forEach(function(element, index, theArray) {
        library.appendChild(document.createElement('div')).classList.add('bookIndex' + '' + index);
        // document.querySelector('.bookIndex' + '' + index).appendChild(document.createElement('p')).innerHTML = 'Title: ' + theArray[index]['title'];
        document.querySelector('.bookIndex' + '' + index).appendChild(document.createElement('p')).insertAdjacentHTML('beforeend', 'Title: ' + theArray[index]['title']);
        document.querySelector('.bookIndex' + '' + index).appendChild(document.createElement('p')).insertAdjacentHTML('beforeend', 'Author: ' + theArray[index]['author']);
        document.querySelector('.bookIndex' + '' + index).appendChild(document.createElement('p')).insertAdjacentHTML('beforeend', 'Pages: ' + theArray[index]['pages']);
        document.querySelector('.bookIndex' + '' + index).appendChild(document.createElement('p')).insertAdjacentHTML('beforeend', 'Read? ' + theArray[index]['read']);
        document.querySelector('.bookIndex' + '' + index).appendChild(document.createElement('button')).setAttribute('id', 'readStatus' + '' + index);
        document.querySelector('#readStatus' + '' + index).insertAdjacentHTML('beforeend', 'Read Status');
        document.querySelector('#readStatus' + '' + index).setAttribute('class', 'readStatusBtn');
        document.querySelector('.bookIndex' + '' + index).appendChild(document.createElement('button')).setAttribute('id', 'bookIndex' + '' + index);
        document.querySelector('#bookIndex' + '' + index).setAttribute('class', 'removeBtn');
        document.querySelector('#bookIndex' + '' + index).insertAdjacentHTML('beforeend', 'Remove');
    });
}

function createListeners() {
    const newButton = document.querySelector('#newBook');
    const removeButtons = document.querySelectorAll('.removeBtn');
    const readStatusButtons = document.querySelectorAll('.readStatusBtn');

    newButton.addEventListener('click', (e) => {
        bookInput.style.display = 'block';
    });

    removeButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            removeBook(button.id);
        });
    });

    readStatusButtons.forEach((button) => {
        let bookNum = button.id;
        
        bookNum = bookNum.slice(10, bookNum.length);

        button.addEventListener('click', (e) => {            
            if (document.getElementById(button.id).previousElementSibling.innerHTML === 'Read? Yes') {
                document.getElementById(button.id).previousElementSibling.innerHTML = 'Read? No';
                myLibrary[bookNum]['read'] = 'No';
                clearLibrary();
                render(myLibrary);
                createListeners();
            } else {
                document.getElementById(button.id).previousElementSibling.innerHTML = 'Read? Yes';
                myLibrary[bookNum]['read'] = 'Yes';
                clearLibrary();
                render(myLibrary);
                createListeners();
            }
        });
    });
}

function initSubmit() {
    const submitButton = document.querySelector('#submit');

    submitButton.addEventListener('click', (e) => {
        newBook();
    });
}

function createDefaultBooks() {
    let bookOne = new Book ('Randumb Book', 'Randall Randy', 120, 'Yes');
    let bookTwo = new Book ('Whatever You Wanna Call It', 'Wanda Whatever', 200, 'No');
    let bookThree = new Book('Big Boi Club', 'Moby Dick', 313, 'Yes');

    addBookToLibrary(bookOne);
    addBookToLibrary(bookTwo);
    addBookToLibrary(bookThree);
    render(myLibrary);
}

createDefaultBooks();
createListeners();
initSubmit();
