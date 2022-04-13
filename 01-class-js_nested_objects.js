
// Class code examples
/*
const student1 = {name: "Bob", age: 17}
const student2 = {name: "Susy", age: 18}
const student3 = {name: "Ted", age: 18}

const studentList = [
    {name: "Bob", age: 17},
    {name: "Susy", age: 18},
    {name: "Ted", age: 18}
];

console.log(students[1]);
console.log(students[1].age);

const Bob = {name: "Bob", age: 17}
const Susy = {name: "Susy", age: 18}
const Ted = {name: "Ted", age: 18}
const Aleix = {name: "Aleix", age: 18}
const Marco = {name: "Marco", age: 18}

const studentsDictionary = {
    'Bob': Bob,
    Susy, // this is equivalent to "Susy": Susy
    Ted,
    Aleix,
    Marco
};

console.log(studentsObj.Susy.age)

for (const student in studentsDictionary){
    console.log(studentsDictionary[student].age);
}

for(const student of studentList){
    console.log(student.age)
}

const classroom = {
    marco: { name: "Marco", friends: [{ name: "Paolo", age: 49 }] },
    carlos: { name: "Carlos", friends: [{ name: "Gabriel", age: 45 }] },
    carol: {
      name: "Carol",
      age: 25,
      friends: [
        { name: "Bob", age: 17 },
        { name: "Susy", age: 18 },
        { name: "Ted", age: 18 },
      ],
    },
  };

  console.log(classroom.carlos.friends[0].age);
  console.log(classroom.carlos.friends.length);

  classroom.marcro.friends.push(classroom.carol);
*/

// Example 2

    const drinks = [
        {
            name: 'Fanta',
            sugar: true,
            price: 1,
            weight: .56,
            ingredients: ['water', 'sugar', 'sweetener'],
        },
        {
            name: 'Jagger',
            sugar: true,
            price: 3,
            weight: .96,
            ingredients: ['fantasía', 'alcohol', 'bad decisions'],
        },
    ];

    console.log(drinks[0].ingredients)
/*
    for(const ingredient of drinks[0].ingredients){
        console.log("Fanta ingredient: ", ingredient)
    }

    for(const ingredient of drinks[1].ingredients){
        console.log("jagger ingredient: ", ingredient)
    }

    for(const drink of drinks){
    for(const ingredient of drinks.ingredients){
        console.log(`One ingredient of ${drink.name}: `, ingredient)
    }
    }
    */

    // Array of objects iteration
    for (let i = 0; i < drinks.length; i++) {

        console.log(`The drink ${drinks[i].name} weight ${drinks[i].weight}. The ingredientes are:`)

        for (let j = 0; j < drinks[i].ingredients.length; j++) {
            console.log('- ', drinks[i].ingredients[j])
        }
    }

/*
    drinks.forEach(drink => {
        console.log(`The drink ${drink.name} weight ${drink.weight}. The ingredients are:`)
        drink.ingredients.forEach(ing => console.log('- ', ing))
    })
*/