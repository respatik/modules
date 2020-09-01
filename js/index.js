/*Buat sebuah modul dengan ketentuan:

data.js berisikan data nama-nama hewan dan juga nama-nama buah. 
Export data tersebut menggunakan export biasa
Import pada index.js kemudian tampilkan data yg sudah diexport menggunakan DOM

*/

import {fruits, animals} from './data.js';

let fruit = document.querySelector(".column");

let displayFruits = () => {
    fruits.forEach((fruits) => {
    let card = document.createElement("span");
    card.innerHTML = ` 
            <img src="${fruits.img}" alt="">
            <p class="name">${fruits.name}</p>
            <p class="color">${fruits.color}</p>
            <p class="clad">${fruits.clad}</p>
            <p class="latinname">${fruits.latinName}</p>`;
        fruit.appendChild(card)
    })

}

displayFruits();

let animal = document.querySelector(".column");

let displayAnimal = () => {
    animals.forEach((animals) => {
    let card = document.createElement("span");
    card.innerHTML = ` 
            <img src="${animals.img}" alt="">
            <p class="name">${animals.name}</p>
            <p class="race">${animals.race}</p>
            <p class="class">${animals.class}</p>
            <p class="latinname">${animals.latinName}</p>`;
        animal.appendChild(card)
    })

}

displayAnimal();

/*Buat sebuah modul dengan ketentuan:

Karyawan.js berisikan class Karyawan yang memiliki beberapa properti dan method
Export class tersebut menggunakan export default
Import pada index.js kemudian buat object dari class yang sudah dibuat
*/

import Karyawan from './karyawan.js';

let karyawanBaru = new Karyawan ("Respati", 28, "Full Stack Web Developper");

console.log(Karyawan.name);
console.log(Karyawan.age);
console.log(Karyawan.job);