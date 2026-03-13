const age = +prompt('Напишите возраст');
const maxPeople = prompt('Сколько человек');
if (age >= 18 && maxPeople <= 5) {
    console.log("Вход открыт");
} else if (maxPeople > 5 ) {
    console.log("Нельзя максимум 5 человек");
} else if (age < 18) {
    console.log("Малыш");
    
}
 else {
    console.log('Ошибка');
}

