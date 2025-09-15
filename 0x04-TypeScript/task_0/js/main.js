var student1 = {
    firstName: "Ernest",
    lastName: "Opoku",
    age: 25,
    location: "Accra"
};
var student2 = {
    firstName: "Joshua",
    lastName: "Kodom",
    age: 28,
    location: "Techiman"
};
var studentsList = [student1, student2];
var tableBody = document.querySelector("#studentsTable tbody");
if (!tableBody) {
    throw new Error("Table body not found");
}
studentsList.forEach(function (s) {
    var row = document.createElement("tr");
    var cellName = document.createElement("td");
    cellName.textContent = s.firstName;
    row.appendChild(cellName);
    var cellLocation = document.createElement("td");
    cellLocation.textContent = s.location;
    row.appendChild(cellLocation);
    tableBody.appendChild(row);
});
