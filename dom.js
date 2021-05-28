let title = document.getElementById("header");
//console.log(title.innerHTML);

let texto = document.getElementById("concept");
texto.style.color = "red";
//console.log(texto.innerHTML);

let character = document.getElementsByName("characters");
//console.log(character[0].innerHTML);

let characterTwo = document.getElementsByTagName("p");
characterTwo[0].style.color = "green";
characterTwo[0].style.align = "right";
//console.log(characterTwo[0].innerHTML);

// ADD text in div
let newPraphe = document.createElement("p");
let text =  document.createTextNode("Here is the text of praphe")
let newData = document.getElementById("data");
newData.appendChild(newPraphe);
newData.appendChild(text);

//Create function
function confirm(){
    let name = document.getElementById("name").value;
    let radios = document.getElementsByName("programming");
    let student = document.getElementById("student");
    let valueRadio;
    
    for(let i=0; i<radios.length; i++){
        if(radios[i].checked){
            valueRadio = radios[i].value;
        }  
    }
    if(student.checked){
        student = "YES";
    }else{
        student = "NO";
    }
    console.log("Name: "+name+"\nKnow programming?: "+valueRadio+"\nStudent?: "+student);
}



function clean(){
    document.getElementById("name").value = "";
    let radios = document.getElementsByName("programming");
    
    for(let i=0; i<radios.length; i++){
        if(radios[i].checked){
            radios[i].checked = false;
        }  
    }

    let student = document.getElementById("student").checked = false;
    student.checked = false;
}