/**
 * Shrikant Kale: 301150258,Jefil Tasna John Mohan: 301149710,Vamsi Paladugu: 301174422,Harsh Kansara: 301172063,Dishank Trivedi: 301171796,Keyurkumar Sheladeeya: 301167490
 File name:app.js
 group:4
 */

//IIFE - Immediately Invoked Function Expresssion
(() => {
    function Start()
    {
       console.log("App started...");

    }
    window.addEventListener('load',Start);
})();

function results() 
{
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var subject = document.getElementById('subject').value;

    alert( "You entered the following data: " +"\n\n"+"First Name: "+ fname + "\n\n" + "Last Name: "+lname  + "\n\n" +"Subject: " +subject+ "\n\n");
    window.location = '/home';
}
