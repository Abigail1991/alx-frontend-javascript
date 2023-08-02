interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Pierre',
  lastName: 'Forcioli',
  age: 22,
  location: 'Lille',
};

const student2: Student = {
  firstName: 'Thibaud',
  lastName: 'Poncin',
  age: 32,
  location: 'Nantes',
};

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student) => {
  let row: HTMLTableRowElement = document.createElement('tr');
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.append(table);
