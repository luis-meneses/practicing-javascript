// Create function

function Person(name, years){
    this.name = name;
    this.years = years;
    
    
    this.sayhello = function(){
        console.log("Hello, I'm "+name, ", I'm "+years+" years old.");
    }
    
}


// Call Instance Function
let objectPerson = new Person("Luis Meneses", 22);
let objPerson = new Person("Miguel Romero", 31);

objectPerson.sayhello();
objPerson.sayhello();