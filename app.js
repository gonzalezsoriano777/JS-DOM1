var banner = document.getElementById('page-banner')
var booklist = document.getElementById('book-list')

bookList

// Calling an ID using "document.getElementByID" and then using the parenthesis "()" to calling the ID so it can be shown and displayed in the screen 



const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');

console.log(search, bookList);
// Edited by me
var titles = document.getElementsByClassName('title');

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)))


//titles.forEach(function(item)) {
//    console.log(item);
// })
 
Array.from(titles).forEach()function(item) {
    console.log(item);
})

// The bottom was already there

const titles = document.getElementsByClassName('title');

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(title){
  console.log(title);
});

// Tutorial 4

const wmf = document.querySelector('#book-list li:nth-child(2).name');
//console.log(wrap);

var books = document.querySelector('#book-list li .name');
//console.log(books);

var books = document.querySelectorAll('#book-list li .name');
console.log(books);

Array.from(books).forEach(fucntion(book){
  console.log(book);
});

// Tutorial 5 - Changing text and HTML Content

Array.from(books).forEach(function(book){
  book.textContent += '(book title)';
});

const bookList = document.querySelector('#book-list');
//bookList.innerHTML = '<h2>Book and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML</p>';