interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  else return new Director();
};

// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee('$500'));

const isDirector = (employee: Director | Teacher): employee is Director => {
  return (employee as Director).workDirectorTasks !== undefined;
};

const executeWork = (employee: Director | Teacher): string => {
  let msg = '';

  if (isDirector(employee)) msg = employee.workDirectorTasks();
  else msg = employee.workTeacherTasks();

  console.log(msg);

  return msg;
};

// executeWork(createEmployee(200));
// executeWork(createEmployee(1000));

type Subjects = 'Math' | 'History';
const teachClass = (todayClass: Subjects): string => {
  let msg = '';

  msg = `Teaching ${todayClass}`;
  console.log(msg);

  return msg;
};

// teachClass('Math');
// teachClass('History');
