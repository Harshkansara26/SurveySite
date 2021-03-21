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

    alert( "You entered the following data: " +"\n\n"+"First Name: "+ fname + "\n\n" + "Last Name: "+lname  + "\n\n" +"Subject: " +phone+ "\n\n" + "Message: " +message);
    window.location = '/contact';
}


