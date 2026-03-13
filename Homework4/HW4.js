let length = Number(prompt("Введите длину коробки (см)"));
let width = Number(prompt("Введите ширину коробки (см)"));
let height = Number(prompt("Введите высоту коробки (см)"));
let weight = Number(prompt("Введите вес коробки (кг)"));


if ((length + width + height) > 250 && weight > 30) {
    console.log("Брак: негабаритный тяжеловес");
}


else if (length <= 30 && width <= 30 && height <= 30 && weight < 10) {
    console.log("Коробка отправлена на стеллаж A (Хрупкое)");
}


else if (length > 100 || width > 100 || height > 100 || weight > 50) {
    console.log("Коробка отправлена на стеллаж B (Габаритное)");
}


else {
    console.log("Коробка отправлена на стеллаж C (Стандартное)");
}
