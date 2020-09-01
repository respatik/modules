/*Buat sebuah modul dengan ketentuan:

data.js berisikan data nama-nama hewan dan juga nama-nama buah. 
Export data tersebut menggunakan export biasa
Import pada index.js kemudian tampilkan data yg sudah diexport menggunakan DOM

*/

let fruits = [
    {
        name: "Apple",
        color: "Red",
        latinName: "Malus sylvestris",
        clad: "monocotyl",
        img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Banana",
        color: "Yellow",
        latinName: "Musa paradisiaca",
        clad: "dicotyl",
        img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Blueberry",
        color: "Dark Blue",
        latinName: "Vaccinum corymbosum",
        clad: "monocotyle",
        img: "https://images.unsplash.com/photo-1568387022280-92935eb78c5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Cherry",
        color: "Red",
        latinName: "Prunus apetala",
        clad: "dicotyle",
        img: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Lemon",
        color: "Yellow",
        latinName: "Citrus limon",
        clad: "monocotyl",
        img: "https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Mango",
        color: "Green",
        latinName: "Mangifera indica",
        clad: "dicotyle",
        img: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Orange",
        color: "Orange",
        latinName: "Citrus reticulata",
        clad: "monocotyl",
        img: "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Pear",
        color: "Yellow",
        latinName: "Pyrus caucasica",
        clad: "dicotyl",
        img: "https://images.unsplash.com/photo-1517428956741-0e738679fc79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    }
]



let animals = [
    {
        name: "Dog",
        race: "Corgi",
        latinName: "Canis lupus familiaris",
        class: "Mammals",
        img: "https://images.unsplash.com/photo-1597633425046-08f5110420b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Cat",
        race: "Russian Blue",
        latinName: "Felis catus",
        type: "Mammals",
        img: "https://images.unsplash.com/photo-1593627129575-7d0c0211c91a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Lion",
        race: "Asian",
        latinName: "Panthera leo",
        class: "Mammals",
        img: "https://images.unsplash.com/photo-1552410260-0fd9b577afa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Tiger",
        race: "Sumatran",
        latinName: "Panthera tigris",
        class: "Mammals",
        img: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Horse",
        race: "Arabian",
        latinName: "Equus caballus",
        class: "Mammals",
        img: "https://images.unsplash.com/photo-1553284965-5dd8352ff1bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Panda",
        race: "Chinese",
        latinName: "Ailuropoda melanoleuca",
        class: "Mammals",
        img: "https://images.unsplash.com/photo-1570288685369-f7305163d0e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Bear",
        race: "Brown",
        latinName: "Ursus arctos",
        class: "Mammals",
        img: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Parrot",
        race: "Parrakeet",
        latinName: "Melopsittacus Undulatus",
        class: "Aves",
        img: "https://images.unsplash.com/photo-1511823794984-b87716139b88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    }
]

export{
    fruits as fruits,
    animals as animals
}