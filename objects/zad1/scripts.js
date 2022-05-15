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

const p = document.querySelector('p')
const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')

class Food{
    constructor(foodName, foodPrice){
        this.foodName = foodName,
        this.foodPrice = foodPrice
    }
}

Food.prototype.show = function(){
    console.log(`${this.foodName} kosztuje ${this.foodPrice} pln`);
}

const food1 = new Food('Schabowy', 23)
const food2 = new Food('Rosół', 12)
const food3 = new Food('Sałata', 7)




btn1.addEventListener('click', () => food1.show())
btn2.addEventListener('click', () => food2.show())
btn3.addEventListener('click', () => food3.show())