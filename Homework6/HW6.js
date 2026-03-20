let fruit = 'banana';
const first = fruit[0];
const last = fruit[fruit.length - 1];
console.log(first);
console.log(last);

let fruit2 = 'apple';

if (fruit2.startsWith('a') && fruit2.endsWith('e')) {
    console.log("Подходит");
} else {
    console.log('Не подходит');
}

const arr = [1, 4, 3, 2, 6];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(min);
