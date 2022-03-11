/*
JS AND THE HTML DOM

we can use JS to directly access and modify the HTML DOM, attributes, classes, tags, w.e
we do that through the document object
*/

// accessing element by tag name
let main_header = document.getElementsByTagName('h1');
console.log(main_header);
console.log(main_header[0]);
console.log(main_header[0].className);
console.log(main_header[0].innerHTML);
console.log(typeof main_header[0].innerHTML);
// main_header[0].className = 'page-title'; // modifying classname of an element
main_header[0].innerHTML = main_header[0].innerHTML.toUpperCase(); // modifying the innerhtml of an element

//accessing element by id
let main_header_access2 = document.getElementById('header');
console.log(main_header_access2);
main_header.innerHTML= 'SharkFact:'; // further modifying the innerhtml of an element

// accessing our button

let color_button = document.getElementById('color-button');
console.log(color_button);

// lets come up with process for hwen button is pressed

let color_change = () => {
    let e = document.getElementById('header');
    if (e.className == '') {
        e.className = 'color-change';
    } else if (e.className == 'color-change') {
        e.className = 'color-change-two'
    } else {
        e.className = '';
    }
}

// how do we get the button press to run this process
// rememeber that we talked about JS being an event based language
// we need to tell our JS to listen for the event of the button press
// we do that through Eventlisteners!

// add a click eventlistener to the color_button to run color_change when clicked
color_button.addEventListener('click', color_change)

// create HTML element through my JS
let new_button = document.createElement('Element');
let to_be_displayed = document.createElement('p');

//to_be_displayed.className = 'color-change';

// add some text to button
new_button.innerHTML = 'Click for more SharkFacts';

// add a className and hide to_be_displayed

to_be_displayed = 'color-change';
to_be_displayed.hidden = true;

// add a new button and p tag to the pg
document.body.append(new_button);
document.body.append(to_be_displayed);

// process for what happens when new button is pressed
let sharkfacts = () => {
    if (to_be_displayed.hidden){
        to_be_displayed.innerHTML = 'Most greenLand sharks are blind';
        new_button.innerHTML = 'Hide Sharkfact';
        to_be_displayed.hidden = false;
    } else {
        new_button.innerHTML = 'click for a sharkfact'
        to_be_displayed.hidden= true;
    }
}

// event listener
new_button.addEventListener('click', sharkfacts);

/* interacting with an HTML form */
let sharkfactform = document.getElementById('sharkform');
console.log(sharkfactform);

// lets have JS control what happens when form is submitted
// event listener for submit!

sharkfactform.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    // 2 ways to get form data
    // fav way - through event path
    let sharkname = event.path[0][0].value;
    let sharkfact = event.path[0][1].value;
    console.log(`Event path data: ${sharkname} | ${sharkfact}`);
    // OTHER WAY to get form data - query selector
    let qsharkname = document.querySelector('shark-name').value
    letqsharkfact = document.querySelector('shark-fact').value
    console.log(` query selector data: ${qsharkname} | ${qsharkfact}`);

    //reset form
    sharkfactform.reset();
})

