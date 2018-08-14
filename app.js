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

// Tutorial 4 - The Query Selector

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

bookList.innerHTML += '<p>This is how you add HTML</p>';

// Tutorial 6 - Nodes

const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner has child nodes:', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

// Tutorial 7 - Transversing the DOM Part 1

const bookList = document.querySelector('#book-list');

console.log('the parent node is:', bookList.parentNode);
console.log('the parent element is:', bookList.parentElement.parentElement);

console.log(bookList.children);

// Tutorial 8 - Tansversing the DOM Part 2

const bookList = document.querySelector('#book-list');

console.log('book-list next sibling is:', bookList.nextSibling);
console.log('book-list next element sibling is:', bookList.nextElementSibling);

console.log('book-list next sibling is:', bookList.previousSibling);
console.log('book-list next element sibling is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else!';

// Tutorial 9 - Events

var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn) {
    btn.addEventListener('click',function(e){
      
      const li = e.target.parentElement;
      
      li.parentNode.removeChild(li)
      
    });
});

const link = document.querySelector('#page-banner a');

link.addEventListener('click', fucntion(e){
  e.preventDefault();
  console.log('navigation to',e.target.textContent, 'was prevented');
})


// Tutorial 10 -- Event Bubbling


//delete books
const list = document.querySelector('#book-list ul');
>>>>>>> lesson10

list.addEventListener('click', fucntion(e){
  if(e.target.className == 'delete') {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
})

// Tutorial 11 - Interacting with Forms

// add book-list

const addForms = document.forms('add-book');

addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
  


// Tutorial 12 - Creating Elements

// create elements
const li = document.createElement('li');
const bookName = document.createElement('span')
const deleteBtn = document.createElement('span');

// add content
deleteBtn.textContent = 'delete';
bookName.textContent = value;

// Tutorial 12...  13 - Styles & Classes

// add classes
bookName.classList.add ('name');//.remove to delete the class
deleteBtn.classList.add('delete');

// append to document (This is from Tutorial 12 but classes is declared before this)
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);  
  
});

// Tutorial 14 - Attributes

// Neccessarly, it was an overall understanding of what Attributes are.
// As well as How to find one, remove one, and even add one.



// Tutorial 11.. 15 - Checkboxes & Change Events

//delete books
const list = document.querySelector('#book-list ul');
>>>>>>> lesson10

list.addEventListener('click', fucntion(e){
  if(e.target.className == 'delete') {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
})

// --Tutorial 11 was added here since hiding books is connected to adding and deleting them

// add book-list

const addForms = document.forms('add-book');

addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
  
// hide books 

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  }else {
    list.style.display = "none"
  }else {
    list.style.display = "initial"
  }
});

// Tutorial  11... 16 - Custom Search Filter

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book) {
      const title = book.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(term) !=-1){
        book.style.display = 'block';
      }else {
        book.style.display = 'none';
        
      }
  })
})

// Tutorial 11.. 17 - Tabbed Content

// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel')
tabs.addEventListener('click', function(e) {
    id(e.target.tagName == "LI") {
      const targetPanel = document.querySelector(e.target.dataset.target);
      panels.forEach(function(panel){
        if(panel == targetPanel){
          panel.classList.add('active');
        }else{
          panel.classList.remove('active');
        }
      })
    }
})

// Tutorial  11... 18 - DOMContentLoaded Event

// Make the DOM be fully loaded ..
document.addEventListener('DOMContentLoaded', function(){
  
}

//delete books
const list = document.querySelector('#book-list ul');
>>>>>>> lesson10

list.addEventListener('click', fucntion(e){
  if(e.target.className == 'delete') {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
})



// add book-list

const addForms = document.forms('add-book');

addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
  
// hide books 

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  }else {
    list.style.display = "none"
  }else {
    list.style.display = "initial"
  }
});



//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book) {
      const title = book.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(term) !=-1){
        book.style.display = 'block';
      }else {
        book.style.display = 'none';
        
      }
  })
})



// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel')
tabs.addEventListener('click', function(e) {
    id(e.target.tagName == "LI") {
      const targetPanel = document.querySelector(e.target.dataset.target);
      panels.forEach(function(panel){
        if(panel == targetPanel){
          panel.classList.add('active');
        }else{
          panel.classList.remove('active');
        }
      })
    }
})

