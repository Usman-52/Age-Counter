var calcBtn = document.getElementById("calcBtn");
var inputDate = document.getElementById("date");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var currentDate = new Date();
calcBtn.addEventListener("click", function (event) {
     event.preventDefault();
     var dateInput = document.getElementById("date").value;
     if(dateInput === "") {
          alert("🚫 Enter Your BirthDay First:");
     }
     else{
          var currentDate = new Date();
          var birthDate = new Date(dateInput);
          if(birthDate > currentDate) {
               alert("⛔ You Can't Enter Future Date")
          }
     }

   



     
})

