// const sayHello = (name, surname) => {
//     return `Здраствуйте, ${surname} ${name}. Рады вас видеть на курсах Metalabs`
// }
// console.log(sayHello('Sanjar', 'cr7'));

const MasterYoda = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'MasterYoda';
    } else if (num % 3 === 0) {
        return 'Master'
    } else if (num % 5 === 0) {
        return 'Yoda'
    }
}
console.log(MasterYoda(9));
console.log(MasterYoda(10));
console.log(MasterYoda(15));
