// const input = document.querySelector('input');
// const btn = document.querySelector('button');
// const result = document.querySelector('p');

// btn.addEventListener('click', () => {
//     result.textContent = '';
//     const inputNum = +input.value;
//     if (!inputNum) {
//         result.textContent = 'Поле пустое';
//     } else {
//         startCountdown(inputNum)
//     }

//     input.value = '';
// })

// const startCountdown = (seconds) => {
//     let timerId = setInterval(() => {
//         result.textContent = seconds;
//         seconds--;
//         if (seconds === -1) {
//             clearInterval(timerId);
//             result.textContent = 'FINISH';
//         }
//     }, 1000)
// }


// const peopleNum = +prompt('Сколько придут людей');
// const placeCon = +prompt('Сколько свободных мест');

// const promise = new Promise((res, rej) => {
//     if (peopleNum <= placeCon) {
//         const freePlaces = placeCon - peopleNum;
//         res(freePlaces);
//     } else {
//         rej('Мест не хватает!');
//     }
// });

// promise
//   .then((freePlaces) => {
//     console.log(`Свободных мест: ${freePlaces}`);
//   })
//   .then(() => {
//     console.log('Добро пожаловать!!!');
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log('Если что вернем деньги');
//   });

// GET
fetch('https://fakestoreapi.com/carts')
  .then(res => res.json())
  .then(json => console.log(json))


// POST
fetch('https://fakestoreapi.com/carts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userId: 1
  })
})
  .then(res => res.json())
  .then(json => console.log(json))


// PUT
fetch('https://fakestoreapi.com/carts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userId: 2
  })
})
  .then(res => res.json())
  .then(json => console.log(json))


// DELETE
fetch('https://fakestoreapi.com/carts/1', {
  method: 'DELETE'
})
  .then(res => res.json())
  .then(json => console.log(json))