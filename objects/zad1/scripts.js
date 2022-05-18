// const Lisa = {
//     name: 'Lisa',
//     surname: 'Kowalska',
//     car:{
//         brand: 'Audi',
//         sound(){
//             console.log('brum brum');
//         }
//     }
    
// }

// for( const data in Lisa){
//     console.log(`${Lisa[data]},  ${data}`);
// }

// const user = {
//     name: 'Filip',
//     myName(){
//         console.log(this.name);
//     }
// }

// user.myName()

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }


// const newUser = new User('Filip', 23)
// const newUser1 = new User('Kasia', 26)
// const newUser2 = new User('Wojtek', 43)

// console.log(newUser, newUser1, newUser2);

// User.prototype.hello = function(){
//     console.log(`Czesc ${this.name}`);
// }

// newUser.hello

// const p = document.querySelector('p')
// const btn1 = document.querySelector('.btn-1')
// const btn2 = document.querySelector('.btn-2')
// const btn3 = document.querySelector('.btn-3')

// class Food{
//     constructor(foodName, foodPrice){
//         this.foodName = foodName,
//         this.foodPrice = foodPrice
//     }
// }

// Food.prototype.show = function(){
//     console.log(`${this.foodName} kosztuje ${this.foodPrice} pln`);
// }

// const food1 = new Food('Schabowy', 23)
// const food2 = new Food('Rosół', 12)
// const food3 = new Food('Sałata', 7)


// console.log('object');

// btn1.addEventListener('click', () => food1.show())
// btn2.addEventListener('click', () => food2.show())
// btn3.addEventListener('click', () => food3.show())


function test() {
    console.log(this);
    console.log(this.name);
} 

const car1 ={
    name: 'Audi'
}


const car2 ={
    name: 'Dodge'
}


const car3 ={
    name: 'Nissan'
}

test.bind(car1)()

const movie ={
    name: "Avengers"
}

function show(price,cinema){
    console.log(`Film: ${this.name}, cena: ${price}, kino: ${cinema}`);
}

show.call(movie, 32, "Multikino")


//Destrukturyzacja
const person = {
    name: "Wojtek",
    age: 24,
    job: "DJ",
    car: {
        brand: 'Dodge',
        model: 'VIper'
    }
}

const showInfo = ({name: firstName, age, job, car:{brand, model}}) =>{
    // const{name: firstName, age, job} = person
    console.log(`${firstName} pracuje jako ${job} i ma ${age} lat i jeździ: ${brand} ${model} `);
}
showInfo(person)

const color = ['red', 'blue', 'green']

const firstColor = color[0]
const secondColor = color[1]

const [first, second] = color
console.log(firstColor, secondColor);
console.log(first,second);
const [,,abcd] = color
console.log(abcd);