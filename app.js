<<<<<<< .merge_file_EUDnXv
var banner = document.getElementById('page-banner')
var booklist = document.getElementById('book-list')

bookList

// Calling an ID using "document.getElementByID" and then using the parenthesis "()" to calling the ID so it can be shown and displayed in the screen 



const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');

console.log(search, bookList);
=======
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
>>>>>>> .merge_file_qVGkTv
