var button = document.getElementById("button");
button.addEventListener("click, displayDetails");

var row = 1;

function displayDetails() {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var WorkingOn = document.getElementById("WorkingOn").value;

if(!name || !surname || !WorkingOn) {
  alert("Please don't live out any spaces");
  return;

} 

var table = document.getElementById("Table");

var newRow = display.insertRow(row);

var cell1 = newRow.insertCell(0);

var cell2 = newRow.insertCell(1);

var cell3 = newRow.insertCell(2);

cell1.InnerHTML = name;
cell2.InnerHTML = surname;
cell3.InnerHTML = WorkingOn;

row++,
}