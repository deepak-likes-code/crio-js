class Employee{
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    markPresent() {
        console.log(this.name + ' is Present.');
        return this
   }
    getRole() {
        return 'Employee of the Office'
    }
}

class Developer extends Employee{
    constructor(prefLanguage, ...args) {
        super(...args);
        this.prefLanguage = prefLanguage;
    }
    submitCode() {
            console.log(`Code submitted by ${this.name} in ${this.department}`)
    }
    
    getRole() {
        return `Works with ${this.prefLanguage}`
    }
}

let deepak = new Developer('JS', 'Deepak', 'Dev');
console.log(deepak.getRole())


