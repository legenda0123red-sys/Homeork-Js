const input = document.querySelector('input');
const btn = document.querySelector('button');
const result = document.querySelector('p');

btn.addEventListener('click', () => {
    result.textContent = '';
    const inputNum = +input.value;
    if (!inputNum) {
        result.textContent = 'Поле пустое';
    } else {
        startCountdown(inputNum)
    }

    input.value = '';
})

const startCountdown = (seconds) => {
    let timerId = setInterval(() => {
        result.textContent = seconds;
        seconds--;
        if (seconds === -1) {
            clearInterval(timerId);
            result.textContent = 'FINISH';
        }
    }, 1000)
}