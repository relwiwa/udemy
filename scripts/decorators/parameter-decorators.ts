class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(node: string, printAll: boolean) {
    if (printAll) {
      console.log(10000);
    }
    else {
      console.log(2000);
    }
  }
}

const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
