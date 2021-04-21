var selectedRow = null


function onFormSubmit(event) {
   
  event.preventDefault( )
 
var formInfor = readFormInfor();
if(selectedRow == null)
insertNewRecord(formInfor);
else
 updateRecord(formInfor);

resetForm();
}
// console.log('name', document.getElementById("name").value)
// console.log('surname',document.getElementById("surname").value)
// console.log('working',document.getElementById("workingOn").value)
function readFormInfor() {
var formInfor = {};
formInfor["name"] = document.getElementById("name").value;
formInfor["surname"] = document.getElementById("surname").value;
formInfor["workingOn"] = document.getElementById("workingOn").value;
return formInfor;
}

function insertNewRecord(Infor) {
var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
var newRow = table.insertRow(table.length);
cell1 = newRow.insertCell(0);
cell1.innerHTML = Infor.name;
cell2 = newRow.insertCell(1);
cell2.innerHTML = Infor.surname;
cell3 = newRow.insertCell(2);
cell3.innerHTML = Infor.workingOn;
cell4 = newRow.insertCell(3);
cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                  <a onClick="onDelete(this)">Delete</a>
                  <input type="checkbox" value="check" id='check'>`;
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

function updateRecord(formInfor) {
selectedRow.cells[0].innerHTML = formInfor.innerHTML.name; 
selectedRow.cells[1].innerHTML = formInfor.innerHTML.surname;
selectedRow.cells[2].innerHTML = formInfor.innerHTML.workingOn;
}

function onDelete(td) {
    if (confirm('This Item will be deleted ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function onComplete(td) {
if (confirm('Are you done?')){
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").completeRow(row.rowIndex);
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