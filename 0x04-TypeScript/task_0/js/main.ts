interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: string | number | boolean;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const dstudent1: Student = {
    firstName: "Ernest",
    lastName: "Opoku",
    age: 25,
    location: "Accra"
}

const dstudent2: Student = {
    firstName: "Joshua",
    lastName: "Kodom",
    age: 28,
    location: "Techiman"
}

// const studentsList: Student[] = [student1, student2];

// const tableBody = document.querySelector<HTMLTableSectionElement>("#studentsTable tbody");

// if (!tableBody) {
//   throw new Error("Table body not found");
// }

// studentsList.forEach((s: Student) => {
//   const row = document.createElement("tr");

//   const cellName = document.createElement("td");
//   cellName.textContent = s.firstName;
//   row.appendChild(cellName);

//   const cellLocation = document.createElement("td");
//   cellLocation.textContent = s.location;
//   row.appendChild(cellLocation);

//   tableBody.appendChild(row);
// });