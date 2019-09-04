function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = true;
    
}
 
Book.prototype.info = function() {
    console.log (this.title + ' by ' + this.author + ', ' + this.pages + ', ' + this.read);
}

// title
// author
// pages
// read
// info