var btn = document.getElementById("calcBtn");

btn.addEventListener("click", () => {
     var  birthDate = document.getElementById("date");
    const birthDateValue = new Date(birthDate.value) 
    console.log(birthDateValue)
    const currentDate = new Date();

    const year = currentDate.getFullYear() - birthDateValue.getFullYear();
    console.log(year)

     const days = currentDate.getDate() - birthDateValue.getDate();
     console.log("The Day is ", days)

     const month = currentDate.getMonth() - birthDateValue.getMonth();
     console.log(month)


     
})

