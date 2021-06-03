// IF
console.log("------- IF --------")
let passwordDB = "dog123";
let input = "dog1233";
let result = passwordDB == input;
if(result === true){
    console.log("Successfull login");
}else{
    console.log("Unsuccessfull login");
}

// Else if
let score = 4.46;
if(score > 4.46){
    console.log("¡You are better than mirrey tv!!")
}else if(score === 4.46){
    console.log("You are similar to mirrey tv!")
}
else{
    console.log("¡You are score suckes!")
}

console.log("------- END IF --------")

//Switch
console.log("------- SWITCH --------")

let typeCard = "Credit Card";

switch(typeCard){
    case 'Debid Card':
        console.log("This is a debid card ")
        break;
    case 'Credit Card':
        console.log("This is a credit card")
        break;
    default:
        console.log("You don't have card")
}
console.log("------- END SWITCH --------")

//While
console.log("------- WHILE --------")
let count = 50;
while(count >0){
    console.log(count);
    count-- ;
}

console.log("------- END WHILE --------")