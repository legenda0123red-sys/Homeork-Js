// // const sayHello = (name, surname) => {
// //     return `Здраствуйте, ${surname} ${name}. Рады вас видеть на курсах Metalabs`
// // }
// // console.log(sayHello('Sanjar', 'cr7'));

// // const MasterYoda = (num) => {
// //     if (num % 3 === 0 && num % 5 === 0) {
// //         return 'MasterYoda';
// //     } else if (num % 3 === 0) {
// //         return 'Master'
// //     } else if (num % 5 === 0) {
// //         return 'Yoda'
// //     }
// // }
// // console.log(MasterYoda(9));
// // console.log(MasterYoda(10));
// // console.log(MasterYoda(15));


// // 1.  У вас есть массив чисел. Создайте новый массив, где каждое число возведено в квадрат.
// // [2, 4, 6, 8];
// // // Ожидаемый результат: [4, 16, 36, 64]
// // 2. Из массива возрастов оставьте только те, чей возраст больше 27
// // [12, 18, 27, 39, 40]
// // // Ожидаемый результат [27, 39, 40]
// // Task1
// // const arr = [ 2, 3, 4]
// // const getSquare = arr.map((square) => square ** 2);
// // console.log(getSquare);
 
// // Task2
// // const task2 = (arr) => {
// //     return arr.filter((item) => item >= 27)
// // }
// // console.log(task2([12, 18, 27, 39, 40]));


const arr = [
  {
    name: "Alibek",
    age: 15,
  },
  {
    name: "Sanjar",
    age: 14,
  },
  {
    name: "Asina",
    age: 24,
  },
  {
    name: "Esengul",
    age: 24,
  },
  {
    name: "Dayana",
    age: 17,
  },
  {
    name: "Aidai",
    age: 25,
  },
];

arr.forEach((user) => {
    console.log(`Имя: ${user.name}, ${user.age} лет`);
})

const library = [
{ name: "Книга", price: 450 },
{ name: "Ручка", price: 50 },
{ name: "Блокнот", price: 200 },
{ name: "Карандаш", price: 30 }
]

const librarySum = library.reduce((acc, num) => acc + num.price, 0)
console.log('Сумма:', librarySum);
