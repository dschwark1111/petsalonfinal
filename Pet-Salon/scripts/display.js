function displayCards(){
    let card=""
    //travel the array
    for(let i=0; i<petsalon.pets.length; i++){
        let pet = petsalon.pets[i];
        //create a temple of card
        card +=`
        <div class="petCard">
            <h5> Name: ${pet.name}<h5>
            <p>  Age: ${pet.age} </p>
            <p>  Gender: ${pet.gender} </p>
            <p>  Animal: ${pet.animal} </p>
            <p>  Breed: ${pet.breed} </p>
            <p>  Color: ${pet.color} </p>
            <p>  Service: ${pet.service} </p>
        </div>
            `;
    }
    //insert the card into the HTML
    document.getElementById("pets").innerHTML=card;

}

function displayTable(){
    let tr=""
    for(let i=0; i<petsalon.pets.length; i++){
        let pet = petsalon.pets[i];
        tr+=`
        <tr id="${pet.id}">
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.animal}</td>
            <td>${pet.breed}</td>
            <td>${pet.color}</td>
            <td>${pet.service}</td>
            <td><button onclick="deletePet(${pet.id})"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
        </tr>
        `;
    }
    document.getElementById("petTable").innerHTML=tr;
}