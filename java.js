var date = document.getElementById("Date").value
var month = document.getElementById("Month").value
var year = document.getElementById("Year").value
var form = document.querySelector(".two")

document.getElementById("submit").addEventListener("sumbit", function(e) {
var dateEntered = new Date(year, month, date);
var dayOfWeek = dateEntered.getDay();
console.log(dayOfWeek)

});