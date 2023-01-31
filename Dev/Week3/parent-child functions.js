//child functions

const boilNoodles = () => 
    console.log("boil water and add noodles in it ");
const pastaSauce =() => console.log("add pasta sauce");
const chopOnions = () => console.log("chop onions and fry them")
const addAll= () => console.log("mix all the ingredients ")
const washDishes = () => console.log("clean dishes");
const cleanFloor=() => console.log("sweep the floor")
const cleanCounter= () => console.log("clean the kitchen counter");
const pickupTrash=() => console.log("pickup the trash")
const checkLables = () => console.log("Check the care labels on your garments ");
const sortClothes = () => console.log("Start by sorting the laundry by color");
const pickDetergent = () => console.log("pick a detrgent");
const washingCycle = () => console.log("choose the right washing cycle");
const loadWasher = () => console.log("load the washer");
const unloadWasher = () => console.log("unload the washer");

//parent functions

const makeSpaghetti = () =>{
boilNoodles();
pastaSauce();
chopOnions();
addAll();
}
makeSpaghetti();
const cleanKitchen = () =>{
    washDishes();
    cleanFloor();
    cleanCounter();
    pickupTrash();
}
const laundry = () => {
checkLables();
sortClothes();
pickDetergent();
washingCycle();
loadWasher();
unloadWasher();
}

const doChores = () =>{
    console.log("Now doing chores")
    makeSpaghetti();
    cleanKitchen();
    laundry();
}
doChores();