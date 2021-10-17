var specials = "!@#$%^&*()<>?[]{}\-=;:";
var num = "0987654321";
var lowers = "qwertyuiopasdfghjklzxcvbnm";
var uppers = "QWERTYUIOPASDFGHJKLZXCVBNM";


document.querySelector("#generate").addEventListener("click", function() {
//ask the question
var lettercount = parseInt(prompt("How many characters do you want?")) ;
console.log(lettercount)
    if (lettercount < 0)
        alert("Use more letters!")
    if (lettercount > 50)
        alert("Too many letters!")

var upperuse = confirm("Should we add upper cases letters?")  
console.log("upper",upperuse)
//.then((answer) => {
    //if (answer === "Yes") {
//         uppers 
//     }
// });
var specialuse = confirm("Do you want to add special characters?")
console.log("special", specialuse)
// .then((answer) => {
//     if (answer === "Yes") {
//         lowers 
//     }
// });
var loweruse = confirm("Do you want to add lower case characters?")
console.log("lower",loweruse)
var numberuse = confirm("Do you want to add numbers?")
console.log("numberuse", numberuse)

var possibility = ""
    if (upperuse) 
        possibility += uppers
    if (loweruse) 
        possibility += lowers
    if (specialuse) 
        possibility += specials
    if (numberuse)
        possibility += num 
console.log(possibility)


// Generate random password
var password = ""
for (var i = 0; i < lettercount; i++) 
{
var random = Math.floor(Math.random() * possibility.length)
var char = possibility[random]
password += char
}


//Put the password into the box
document.querySelector("#password").value = password 
});