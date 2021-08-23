var favoriteBook = '3 hour work week';
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[1] = 'Story Brand';
bookList.push('Small Giants');
bookList.pop();

// conditional 
if (bookList[1] == 'hooked') {
    console.log('I am hooked');
}
else {
    console.log('I am not hooked');
}

// while loop 
var i = 0;
while (i < 7) {
    console.log('Loop continues to 6 times like : ', i);
    i++;
}
// for loop 
for (i = 0; i < 7; i++){
    console.log('Loop continues to 6 times like : ', i);
}