// 7 kyu A twisted way to select an element from an array.
// There are many ways to browse an array element by element.
// One way is to use a for loop. Think up a for loop to iterate a given array:
const movies = ["the wolf of wall street", "Zootopia", "babysitting"];
for (i=1; i < movies.length; i++){
    console.log(movies[i]);
}
// Now think up of a way to iterate (create and show) the following given array using forEach():
movies.forEach(element => {
    console.log(element);
});