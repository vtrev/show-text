// dzi html elements 
let messageTag = document.querySelector('#admin-input')
let headingTag = document.querySelector('#heading')

// on the user's side
let userHeading = document.querySelector('.user-heading');
let userMessage = document.querySelector('.user-message');


// function ine ya do post that message

const postMessage = function () {

    // do not post empty messages
    //Ragex would be better than this if shit,
    if (messageTag.value !== "" && headingTag !== "") {
        // grab the value of the inputs from the DOM
        // set the innerHTML of the user side
        userHeading.innerHTML = headingTag.value;
        userMessage.innerHTML = messageTag.value;
        //clear the input fields after submit
        headingTag.value = "";
        messageTag.value = "";
        // return false to avoid the page from refreshing
        return false
    } else {
        alert('Please enter a valid heading and message first!')
    }
}
@Edzani
//this is a very bad way of doing it but it uses plain JS HTML and CSS,if you want to havev 5 
//posts it would mean haveing 10 divs, and 20 elements on the JS and 20 statements 
//to set values 
//so templating would be perfect
