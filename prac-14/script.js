
// Question 1: Signup Form

var signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    document.getElementById("signupResult").innerHTML =
        "Name: " + name + "<br>" +
        "Email: " + email + "<br>" +
        "Password: " + password;

    signupForm.reset();
});


// Question 2: Read More

var readBtn = document.getElementById("readBtn");
var moreText = document.getElementById("moreText");

readBtn.addEventListener("click", function() {

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        readBtn.innerHTML = "Read Less";
    }
    else {
        moreText.style.display = "none";
        readBtn.innerHTML = "Read More";
    }

});


// Question 3: Student Form

var studentForm = document.getElementById("studentForm");
var studentTable = document.getElementById("studentTable");

var students = [];
var editIndex = -1;


// Add Student

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("studentName").value;
    var studentClass = document.getElementById("studentClass").value;
    var roll = document.getElementById("studentRoll").value;

    var student = {
        name: name,
        studentClass: studentClass,
        roll: roll
    };

    students.push(student);

    showStudents();

    studentForm.reset();
});


// Show Students in Table

function showStudents() {

    studentTable.innerHTML = "";

    for (var i = 0; i < students.length; i++) {

        var row = studentTable.insertRow();

        row.insertCell(0).innerHTML = students[i].name;
        row.insertCell(1).innerHTML = students[i].studentClass;
        row.insertCell(2).innerHTML = students[i].roll;

        var deleteCell = row.insertCell(3);
        var editCell = row.insertCell(4);

        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";

        deleteBtn.onclick = function() {
            var index = this.parentElement.parentElement.rowIndex - 1;

            students.splice(index, 1);
            showStudents();
        };

        deleteCell.appendChild(deleteBtn);


        var editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";

        editBtn.onclick = function() {
            var index = this.parentElement.parentElement.rowIndex - 1;

            editIndex = index;

            document.getElementById("editName").value = students[index].name;
            document.getElementById("editClass").value = students[index].studentClass;
            document.getElementById("editRoll").value = students[index].roll;

            document.getElementById("editForm").style.display = "block";
        };

        editCell.appendChild(editBtn);
    }
}


// Update Student

document.getElementById("editForm").addEventListener("submit", function(event) {
    event.preventDefault();

    students[editIndex].name = document.getElementById("editName").value;
    students[editIndex].studentClass = document.getElementById("editClass").value;
    students[editIndex].roll = document.getElementById("editRoll").value;

    showStudents();

    document.getElementById("editForm").style.display = "none";
});


// Cancel Edit

document.getElementById("cancelEdit").onclick = function() {
    document.getElementById("editForm").style.display = "none";
};
