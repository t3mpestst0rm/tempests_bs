/**
 * Created by TempestStorm on 1/24/15.
 */

//alert("I am sending you a warning!");

//Creating Basic Arrays
//This is like creating individual boxes to play variables in

//Example 1
var musicArtists= ["Creed", "Ciara", "Chris Brown", "Skrillex", "Paramore"];
console.log(musicArtists);

//Example 2
var anime= ["Sword Art Online", "Tenchi Muyo", "Gundam Wing", "Ghost In The Shell"];
console.log(anime);

//Print out a specific item in an array

//Example 1

console.log(musicArtists[4]);

//Example 2

console.log(anime[3]);

//Changing one item in the 'box' with another item

//Example 1
musicArtists[2] ="Kittie";
console.log(musicArtists);

//Example 2
anime[2] ="S-Cry-Ed";
console.log(anime);

//Add an item onto an array

//Example 1
musicArtists[5] = "Five Finger Death Punch"
console.log(musicArtists);

//Example 2
anime[4] = "Soul Eater"
console.log(anime);

//Print out a whole array

//Example 1
console.log(musicArtists);

//Example 2
console.log(anime);

//Use a variable as an index number

//Example 1
var num= 2;
console.log(musicArtists[num]);

//Example 2
var num2 = 3;
console.log(anime[num2]);

//Length property
//Gives the number of items in an array
//Dot syntax - same thing as using a period

//Example 1
console.log(musicArtists.length);

//Example 2
console.log(anime.length);

//Add on a new item to arrays

//Example 1
musicArtists[musicArtists.length] = "Tori Amos";
console.log(musicArtists);

//Example 2
anime[anime.length] = "Trinity Blood";
console.log(anime);

//Arrays using numbers

//Example 1
var strawberryCrates =[20, 15, 40, 5, 25];
var total= strawberryCrates[0] + strawberryCrates[1] + strawberryCrates[2] + strawberryCrates[3] + strawberryCrates [4]
console.log("The total number of strawberry crates collected is "+total);

//Example 2
var boxesOfBooks = [50, 10, 30, 44, 80];
var total2 = boxesOfBooks[0] + boxesOfBooks[1] + boxesOfBooks[2] + boxesOfBooks[3] + boxesOfBooks[4]
console.log("The total number boxes of books collected is "+total2);


//Advanced arrays
//How many items are in an array

//Example 1
var bagOfMarbles = ["Blue", "Red", "Orange", "Purple", "Pink", "pink"];
console.log(bagOfMarbles.length);

//Example 2

var groceries = ["Apples", "Bananas", "Lunch Meat", "Bread"];
console.log(groceries.length);

//Push - This inserts an item at the end of an array
//arrayName.push(item to push)

//Example 1
musicArtists.push("Nelly");
console.log(musicArtists);

//Example 2
anime.push("Blood Plus");
console.log(anime);

//Pop - This pops an item off of the end of the array
//arrayName.pop()
//Create a variable to 'catch' the return value

//Example 1
var caught= musicArtists.pop();
console.log(musicArtists);
console.log(caught);

//Example 2
var caught2= anime.pop();
console.log(anime);
console.log(caught2);

//Splice - This is used to remove or add an item into an already existing array
//index number to start from, number of items to remove, what to add

//Example 1
musicArtists.splice(3,2,"Drake");
console.log(musicArtists);

//Example 2
anime.splice(4,3,"FairyTail");
console.log(anime);

//Adding on more items

//Example 1
musicArtists.splice(1,0,"Snoop Dogg", "Rihanna", "Krewella");
console.log(musicArtists);

//Example 2
anime.splice(2,0,"Big O", "Digimon", "Yu-Gi-Oh");
console.log(anime);






