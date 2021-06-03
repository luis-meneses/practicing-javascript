// Father Class
class Person{
    constructor(name, years){
        this.namePerson = name;
        this.yearsPerson = years;
    }

    // Method - Person Data
    PersonData(){
        return " My name is "+this.namePerson+ " and I'm "+this.yearsPerson+" years old ";
    }
}

// Son class
// Add new attribute | student number
class Student  extends Person{
    constructor(name, years, studentNumber){
        super(name, years);
        //call the new let
        this.StudentNumber = studentNumber;
    }

    showData(){
        console.log(" Student:" + super.PersonData()+" and my student number is "+ this.StudentNumber);
    }
}

// son class
// Add new attribute | subject
class Teacher extends Person{
    constructor(name, years){
        super(name, years);
    }
    set sSubject(valor){
        this.subject = valor;
    }
    get gSubject(){
        return this.subject;
    }
    showData(){
        console.log("Teacher: " + super.PersonData()+ " and my subject is "+ this.subject);
    }
}
// Print
// Father class
let objPerson = new Person("Luis Meneses", 22);
console.log(objPerson.PersonData());

// Son class | Student
let objStudent = new Student("Juan Perez", 19, "17020220064");
// Only person data
console.log("Studen person data: "+objStudent.PersonData());
// person data + student attribute
objStudent.showData();

// Son class | Teacher
let objTeacher = new Teacher("Erick Navarro", 34);
objTeacher.sSubject = "Math";
//Only person data
console.log("Teacher person data: "+objTeacher.PersonData());
// person data + teacher attribute
objTeacher.showData();