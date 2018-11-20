function editable(value: boolean) {
  return function(target: any, propName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
  }
}

class Project {
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function() {
  console.log(2000);
}
project.calcBudget();
