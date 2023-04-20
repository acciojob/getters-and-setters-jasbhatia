//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get namee(){
		return this.name;
	}

	set agee(age){
		this.age=age;
	}
}

class Student extends Person {
	// super();
	study(){
		console.log(`${namee.this.name} is studying`)
	}
}

class Teacher extends Person {
	// super();
	teach(){
		console.log(`${namee.this.name} is studying`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
