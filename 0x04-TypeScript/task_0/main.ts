interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Ernest",
    lastName: "Opoku",
    age: 25,
    location: "Accra"
}

const student2: Student = {
    firstName: "Joshua",
    lastName: "Kodom",
    age: 28,
    location: "Techiman"
}

const studentsList: Student[] = [student1, student2];

const tableBody = document.querySelector<HTMLTableSectionElement>("#studentsTable tbody");

if (!tableBody) {
  throw new Error("Table body not found");
}

studentsList.forEach((s: Student) => {
  const row = document.createElement("tr");

  const cellName = document.createElement("td");
  cellName.textContent = s.firstName;
  row.appendChild(cellName);

  const cellLocation = document.createElement("td");
  cellLocation.textContent = s.location;
  row.appendChild(cellLocation);

  tableBody.appendChild(row);
});