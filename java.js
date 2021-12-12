
document.getElementById("button").addEventListener("click", function() {
    console.log("java")
    var date = document.getElementById("Date").value
var month = document.getElementById("Month").value
var year = document.getElementById("Year").value
var form = document.querySelector(".two")
var dateEntered = new Date(year, month, date);
var dayOfWeek = dateEntered.getDay();
console.log(dayOfWeek)
document

});
