// Private the propety
let personMap = new WeakMap();

// Add class
class Person {

    constructor(name, years){
        personMap.set(this,{
            _name : name,
            _years : years,
            _pi : ''
        });
       
    }

    //Method set
    set establecePi(valor){
        personMap.get(this)._pi = valor ;
    }

    //Method get
    get _pi(){
        return personMap.get(this)._pi;
    }

    //Method say Hello
    greet(){
        console.log("Hello, I'm "+this._name, ", I'm "+this._years+" years old and pi is "+this._pi);

    }
}

//Intance of the class Person
let objectPerson = new Person("Luis Meneses", 22);
objectPerson.establecePi = "3.1416";
objectPerson.greet();
console.log(objectPerson._pi);