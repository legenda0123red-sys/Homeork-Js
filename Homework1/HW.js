let arr = [1, [2, [3, { count: 4 }, ['не число', [5]]]]];


console.log(arr[0]); // 1

console.log(arr[1][0]); // 2

console.log(arr[1][1][0]); // 3

console.log(arr[1][1][1].count); // 4

console.log(arr[1][1][2][0]); // 'не число'

console.log(arr[1][1][2][1][0]); // 5

