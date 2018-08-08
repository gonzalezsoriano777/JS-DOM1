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