let petsalon={
    name:"The Fashion Pet",
    Phone: "444-444-444",
    address:{
        street: "Palm Ave",
        number: "262",
        zip: "22000",
    },
    hours:{
        open: "9:00 AM",
        close: "5:00 PM"
    },
    pets: []
}

function displayPetNames(){

}

function displayNumberPets(){
    document.getElementById("totalpets").innerHTML= petsalon.pets.length;
}

function displaySalonInfo(){
    document.getElementById("salonInfo").innerHTML=`
    <p> Welcome to the ${petsalon.name}</p>
    <p>${petsalon.Phone}</p>
    <p> ${petsalon.address.number} ${petsalon.address.street} ${petsalon.address.zip}</p>
    <p> We are open from ${petsalon.hours.open} - ${petsalon.hours.close}.</p>
    `;
}

let c = 0;
function Pet(name,a,g,an,b,c,s)
{
    this.name = name;
    this.age = a;
    this.gender = g;
    this.animal = an 
    this.breed = b;
    this.color = c;
    this.service = s;
    this.id=c++;
}

//global variables for HTML inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputAnimal = document.getElementById("txtAnimal");
let inputBreed = document.getElementById("txtBreed");
let inputColor = document.getElementById("txtColor");
let inputService = document.getElementById("txtService");
let notifications = document.getElementById("notifications");

function isValid(aPet){
    let validation = true;
    //clear input style
    inputName.classList.remove("error");
    inputService.classList.remove("error");
    notifications.classList.remove("error");
    notifications.innerHTML="";

    if(aPet.name==""){
        //if you get here, not valid
        validation=false;
        //modify input style
        inputName.classList.add("error");
        notifications.innerHTML=`Please add a name!`;
        notifications.classList.add("error")

    }
    //validate service
    if(aPet.service==""){
        validation=false;
        inputService.classList.add("error");
    }

    return validation;
}

function register(){
    //CREATE NEW PET
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value);
    //display
    if(isValid(newPet)){
        petsalon.pets.push(newPet);
        displayNumberPets();
        //displayCards();
        displayTable();
        clearform();
    }
}
//clear form function
function clearform(){
    inputName.value=" ";
    inputAge.value=" ";
    inputGender.value=" ";
    inputAnimal.value=" ";
    inputBreed.value=" ";
    inputColor.value=" ";
    inputService.value=" ";
}

function displayFooterInfo(){
    document.getElementById("footer").innerHTML=`
    <label>
    ${petsalon.name} it opens at
    ${petsalon.hours.open}
    ${petsalon.hours.close}
    </label>
    `
}
function deletePet(idToRemove){
    console.log("deleting"+idToRemove);
    //remove the element from the array 
    for(let i=0; i<petsalon.pets.length;i++){
        let pet=petsalon.pets[i];
        if(idToRemove === pet.id){
            var deleteIndex=i;
            break;
            }
        }
        petsalon.pets.splice(deleteIndex,1);
    //remove from html
    document.getElementById(idToRemove).remove();
    displayNumberPets();
}

function init(){
    //hook events
    //displaySalonInfo();
    displayFooterInfo();
    let Scooby = new Pet ("Scooby",36,"male","dog","bulldog","brown","nails")
    let Scrappy = new Pet ("Scrappy",36,"male","cat","mixed","black","grooming")
    petsalon.pets.push(Scooby,Scrappy);
    displayNumberPets();
    displayTable();
    //displayCards();
}

window.onload=init;