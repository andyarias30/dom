// let's get the h1 headr :
const h1 = document.querySelector('h1');
// change the h1 text:
h1.innerText = "Enter you birth year";

// could have just written:
//document.querySelector("h1").innerText = "Enter your birth year";

function calculateAge(event) {
    // when the form is submitedd, prevent the default behavior which is don't let de form auto submit
    event.preventDefault();
    // get the birth that was entered
    const birthYear = event.target.birthYear.value;
    // subtract form the current year (2023) to get one 
    const age = 2023 - birthYear;
    // display age in the h2("in 2023 you will turn xx years old. ")
    const h2 = document.querySelector("h2")
    innerText = "In 2023, you will turn age" + age + "years old"
}



// add an sumbit event to the form
const form = document.querySelector('form');
form.addEventListener('submit', calculateAge);
