// string datatype
let datatype = "This is a String Datatype"
let Name="Sandhya"
let Country= 'USA'
let State=`New Jersey`
let Course="Software Engineering"
let backslash = "we can escape quotes by using back slash"
let Example1= 'John said: "please don\'t do that"';
let Example2= "Appe\\Banana";
let season="winter"
let str="Hello World"

console.log(datatype);
console.log(Name);
console.log(Country);
console.log(State);
console.log(Course);

console.log(backslash);
console.log(Example1);
console.log(Example2);
console.log(season);
//The slice() method in JavaScript is used to extract a section of a string and return it as a new string
let slice=str.slice(6,12);
console.log(slice);
//Integer
let Integer="Below are Integer datatypes";
let a = 10;
let b = 20;
console.log(Integer)
console.log(a);
console.log(b);
//valueOf() returns a number as a number.
let c = (a+b).valueOf();
console.log(c);
let d = 3.1456;
let e=d.toPrecision(2);
let f= d.toPrecision(3);
console.log(d);
console.log(e);
console.log(f);
let g = 123e5;
let h = 123e-5;
console.log(g);
console.log(h);
let i= 999999999999999;   // i will be 999999999999999
let j = 9999999999999999;  // j will be 10000000000000000
console.log(i);
console.log(j);

//Array
console.log("Below are Array datatypes");
let numbers=[1,2,3,4,5];
let string=["Hello","World"];
let nested = [[1, 2], [3, 4], [5, 6]];
let mixed = [1, "hello", true, { name: "John" }];
console.log(numbers);
console.log(string[0]);
console.log(nested);
console.log(mixed);
let empty = [];
console.log(empty);
let fruits = ["apple","banana","grapes"];
console.log(fruits.toString());
let people = [{ name: "John", age: 30 }, { name: "Mary", age: 25 }];
console.log((people))
let animals=["cat","dog"];
let push = animals.push("tiger")
console.log(animals);
let cars= ["Honda","BMW","Tesla"];
let pop= cars.pop();
console.log(cars);
let states= ["Newjersey","Newyork","Chicago"];
let join=states.join(" , ");
console.log(join);
//Object
console.log("Below are Object datatypes")
let person = {
    Firstname: "Sandhya" ,
    lastname:  "Dandamudi",
    occupation: "Developer",
    greet: function() {
        console.log("Hello, my name is " + this.Firstname);
    }
  };
  console.log(person);
  person.greet();
let car = {
     type:"Fiat",
     model:"500", 
     color:"white",
     carcolor: function()
     {
        console.log(this.color);
     }
    };
console.log(car);
car.carcolor();
const student = {
    name: 'Sandhya',
    greet1: function () {
      console.log('hello');
    }
  };
  student.greet1();
  let person1 = {
    name: "Jane Smith",
    age: 25,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    },
    getFullAddress: function() {
     console.log(this.address.street + ", " + this.address.city + ", " + this.address.state + " " + this.address.zip);
    }
  };
person1.getFullAddress();
let product = {
    name: "Widget",
    price: 9.99,
    quantity: 100,
    inStock: true,
    getTotalPrice: function() {
      console.log(this.price * this.quantity);
    }
  };
  product.getTotalPrice();
  let school = {
    name: 'xyz school',
    address: '123 street',
    grade: 10
  }
  console.log(school);
  const employee = {
    name: 'Sam',
    age: 25,
    work: {
      designation: 'developer',
      department: 'analytics team'
    }
  }
  console.log(employee.work);
  const student1 = {
    name: 'Tina',
    age: 10,
    grade: 5
  }
  console.log(student1.hasOwnProperty('age')) 
  const person3 = { 
    name: 'John',
    age: 20
};
console.log(typeof person3);
const person4 = { 
    name: 'John', 
    age: 20, 
};

// accessing property
console.log(person4["name"]); // John

