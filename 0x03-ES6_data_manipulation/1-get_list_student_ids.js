export default function getListStudentIds(listStudents) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map(student => student.id);
}
