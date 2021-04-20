var selectedRow = null


function onFormSubmit(event) {
   
  event.preventDefault( )
 
var formData = readFormData();
if(selectedRow == null)
insertNewRecord(formData);
else
 updateRecord(formData);

resetForm();
}
// console.log('name', document.getElementById("name").value)
// console.log('surname',document.getElementById("surname").value)
// console.log('working',document.getElementById("workingOn").value)
function readFormData() {
var formData = {};
formData["name"] = document.getElementById("name").value;
formData["surname"] = document.getElementById("surname").value;
formData["workingOn"] = document.getElementById("workingOn").value;
return formData;
}

function insertNewRecord(data) {
var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
var newRow = table.insertRow(table.length);
cell1 = newRow.insertCell(0);
cell1.innerHTML = data.name;
cell2 = newRow.insertCell(1);
cell2.innerHTML = data.surname;
cell3 = newRow.insertCell(2);
cell3.innerHTML = data.workingOn;
cell4 = newRow.insertCell(3);
cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                  <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("workingOn").value = "";
  selectedRow = null;
}

function onEdit(td) { 
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("surname").value = selectedRow.cells[1].innerHTML;
  document.getElementById("workingOn").value = selectedRow.cells[2].innerHTML;
  
}

function updateRecord(formData) {
selectedRow.cells[0].innerHTML = formData.innerHTML.name; 
selectedRow.cells[1].innerHTML = formData.innerHTML.surname;
selectedRow.cells[2].innerHTML = formData.innerHTML.workingOn;
}

function onDelete(td) {
    if (confirm('Do you really want to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}