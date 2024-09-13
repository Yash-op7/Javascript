"use strict";

let DATA = '2024-09-14 04:28:33 is today\'s date';

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log(`data is ${DATA}`);
        console.log(`name: ${this.name} & email: ${this.email}`);
    }
    static schoolname = 'modern school';
    static viewSchoolName() {
        console.log(schoolname);
    }
}

class Admin extends User {
    constructor(name, email, privelege) {
        super(name, email);
        this.privelege=privelege;
    }
    editData(newData) {
        DATA = newData;
        console.log(`data changed by ${this.name} who had the ${this.privelege} privelege\nthe data is:`, DATA);
    }
}

let student1 = new User('tom', 'tom@gmail.com');

let admin = new Admin('boss', 'boss@gmail.com', 'administrator');
admin.viewData();
admin.editData('new data is: 2024-09-14 04:31:43');

console.log(User.schoolname)
console.log(admin.schoolname)