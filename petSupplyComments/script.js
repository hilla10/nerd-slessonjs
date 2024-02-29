(function () {

    'use strict';

// let counter = 1;

// function contentRotator() {
//     $(`#container p:nth-child(${counter})`).fadeIn(5000, function () {
//         if ($(this).is('#container p:last-child')) {
//             setTimeout(function() {
//                 $(`#container p:nth-child(${counter})`).fadeOut(2000, function() {
//                     counter = 1;
//                     contentRotator();
//                 })

//             }, 5000)
//         } else {
//             setTimeout(function () {
//                 $(`#container p:nth-child(${counter})`).fadeOut(2000, function () {
//                     counter++;
//                     contentRotator();
//                 });
//             }, 5000);
//         }
//     });
// };

// contentRotator();

// Using plain JavaScript

let counter = 0;

function contentRotator() {
    let text = document.querySelectorAll('#container p');
    let currentText = Array.from(text)[counter];

    currentText.className = 'fadeIn';
    setTimeout(function () {
        currentText.className = '';
        counter = (counter + 1) % text.length;
        contentRotator();
    }, 10000)
}

contentRotator();

})();