// 25. Write a JavaScript function to sort the following array of objects by title value. Go to the editor
// Sample object :

// var library = [ 
//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//    ];

var library = [ 
       { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
       { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
       { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
       ];
var newLibrary = library.sort(function(a,b) {
    return /a.title/i > /b.title/i;
})

console.log(newLibrary);