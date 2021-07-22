const employeeData = {
  John: 10000,
  Pete: 30000,
  Mary: 25000,
};

function Util(employeeData) {
  this.data = employeeData;

  this.sumSalaries = function () {
    let sum = 0;
    for (i in this.data) {
      sum += this.data[i];
      return sum;
    }
  };

  this.averageSalary = function () {
    let sum = this.sumSalaries();
    let num = Object.keys(this.data).length;
    return Math.round(sum / num);
  };

  this.findSalarayRange = function () {
    const salaries = Object.values(this.data);
    return Math.max(...salaries) - Math.min(...salaries);
  };
}

const data = new Util(employeeData);
