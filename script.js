//complete this code
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

get namee() {
return this.name;
}

set agee(age) {
this.age = age;
}
}

class Student extends Person {
study() {
console.log(`Rahul is studying.`);
}
}

class Teacher extends Person {
teach() {
console.log("Rahul is teaching.");
}
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
