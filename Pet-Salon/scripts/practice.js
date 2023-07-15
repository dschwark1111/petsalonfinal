//object literal
var student1 = {
    name: "Dorothy",
    grade: [3.5,3.7,3.9],
    address: {
        state: "CA",
        Country: "USA"
    }
}
var student2 = {
    name: "Ricky",
    grade: [3.5,3.6,3.8],
    address: {
        state: "CA",
        Country: "USA"
    }
}

var student3 = {
    name: "Jake",
    grade: [3.5,3.6,3.8],
    address: {
        state: "CA",
        Country: "USA"
    }
}

var students = [student1,student2,student3]

//best practice, loop
for(let i=0;i<students.length;i++){
    document.write(`<p> ${students[i].name}</p>`);
}


console.log(student1 [`name`]);
console.log(student2.name); //preferrred


//create an obj literal
var movie1 = {
    moviename: "Top Gun 2",
    rating: "Rated R",
    ReleaseDate: {
        Month: "Mar",
        Year: 2022
    }
}

var movie2 = {
    moviename: "Elf",
    rating: "Rated PG",
    ReleaseDate: {
        Month: "Oct",
        Year: 2019
    }
}

console.log(movie1)
console.log(movie2)

//object contructor-best way
//new keyword

//literal object
//const userDetails = {name: "adrian", address: "main", company="ITT"};

//object constructor
//const userDetails = new User ("adrian", "main", "ITT")

//function Pet(n,a,g,b,s){
    this.name = n;
    this.address = a;
    this.gender = g;
    this.breed = b;
    this.service = s;

}