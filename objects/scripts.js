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

const user = {
    name: 'Filip',
    myName(){
        console.log(this.name);
    }
}

user.myName()

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


const newUser = new User('Filip', 23)
const newUser1 = new User('Kasia', 26)
const newUser2 = new User('Wojtek', 43)

console.log(newUser, newUser1, newUser2);

User.prototype.hello = function(){
    console.log(`Czesc ${this.name}`);
}

newUser.hello