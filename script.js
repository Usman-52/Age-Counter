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

     //* Now we will get Current year and input year then we will (c-year - input year)

     var currentYear = currentDate.getFullYear();
     var birthYear = birthDate.getFullYear();

     var year = currentYear - birthYear;
     var box1 = document.getElementById("box1");
     box1.textContent = year;

     //* Now we will getting Month

     var currentMonth = currentDate.getMonth();
     var birthMonth = birthDate.getMonth();

    var month = currentMonth - birthMonth;
    
    if (month) {
         month += 12 // 11
         // console.log(month)
     }
     box2.textContent = month;

       //* Getting days

       var currentDay = currentDate.getDate();
       var birthDay = birthDate.getDate();
       var day = currentDay - birthDay;
  
       if(day) {
            day = day + 30;
       }
  
       box3.textContent = day;  
})

