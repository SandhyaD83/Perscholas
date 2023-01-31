

// alert&prompts


// Variables
let introduction = "Welcome To My Site"
let username = "PerSchola Holla 723"
// let location = "Newyork"
let date = " Jan. 27, 2023"

const students = ["Dana", "DJ", "Deja", "Divna"]

let favDay = {
    day: "Friday",
    weather: "Sunny",
    activity: "Art Museum",
    homework: false,
    timeClassEnds: 4
}

// Functions
// if you want functions to run immediately after site loads ,--> put function call in JS
// ---however, if you want func() to be activated based on a specific HTML ele ---> add function call to element using an attribute like onClick, onHover, onkeypress





const introSite = () => {
    let guessAge = prompt(" Are you 18 and over ?")
    if (guessAge === "yes") {
        let mainBox = document.querySelector('.container')
        // 1. Find an element and target it by class name
        mainBox.innerHTML = introduction
    } else {
        let ourPage = document.querySelector('body')
        ourPage.style.backgroundColor = "red"
    }
}
//introSite()

// incorporates loop


const displayStudents = () => {
    for (i = 0; i < students.length; i++) {
        // 1. Create Element
        let studentBubble = document.createElement('div')
        // 2.Assign Class 
        studentBubble.setAttribute('class', 'person')
        // 2a. Fill New Element with Info
        studentBubble.innerHTML = students[i]
        // 3. Append Item
        let mainBox = document.querySelector('.container')
        mainBox.append(studentBubble)

    }
}








// Conditionals


// querySelectors

// createElement