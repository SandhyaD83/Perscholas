//Easy Going
for (let i=1; i<=20;i++)
{
    console.log(`number ${i}`);
}
//Got Even
for(let i=0; i<=200;i++)
{
   if(i%2===0){
    console.log(`${i} is even number`);
   }
}
 

// // Fizz Buzz
// for (let i=1; i<=100;i++)
// {   if(i%3===0&&i%5===0)
//     {
//         console.log(`${i} FizzBuzz`)
//     }
//     else if(i%3===0){
//         console.log(`${i} Fizz`)
//     }
//     else if(i%5===0){
//         console.log(`${i} buzz`)
//     }
// }
// // Wild Wild Life
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2]+=1;
// //console.log(plantee);
// wolfy[3]= "Gotham City";
// //console.log(wolfy);
// dart.push("Hawkins")
// //console.log(dart);
// wolfy.shift();
// wolfy.unshift("Gameboy")
// console.log(wolfy);


// // Yell at the Ninja Turtles
// let ninjaturtles=["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
 
// for (let x of ninjaturtles )
//   {
//   console.log(x.toUpperCase());
//   }
  

// Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8])
console.log(favMovies.sort())
favMovies.pop();
favMovies.push("Guardians of the Galaxy")
favMovies.reverse();
favMovies.shift();
favMovies.splice(favMovies.indexOf("Django Unchained"),1,"Avatar")
console.log(favMovies)
let halfOfLength=favMovies.length/2;
let halfArray=favMovies.slice(halfOfLength-1)
//console.log(halfArray)
console.log(favMovies)
// Where is Waldo

//  Excited Kitten
//  Find the Median