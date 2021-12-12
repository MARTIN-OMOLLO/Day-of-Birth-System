var date = document.getElementById("Date")
var month = document.getElementById("Month")
var year = document.getElementById("Year")
var form = document.querySelector(".two")

form.addEventListener("sumbit", function(e) {
    e.preventDefault()
console.log(date.value)
console.log(month.value)
console.log(year.value)



});