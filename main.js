const message = {
    yourSign: ['Солнце', 'Земля', 'Луна', 'Марс', 'Юпитер', 'Сатурн'],
    randomMessage: ['Тебе повезло', 'Тебе не повезло', 'Ты счастливчик', 'Задумайся', 'Только вперед'],
    youMust: ['Не выходить из дома', 'Танцевать', 'Пить', 'Отмечать', 'Петь'],
}

randomSelection = arr => {
    let rand = Math.floor(Math.random() * arr.length);
    return(arr[rand]);
}

let mes1 = randomSelection(message.yourSign);
let mes2 = randomSelection(message.randomMessage);
let mes3 = randomSelection(message.youMust);

console.log(`Ваш знак - ${mes1}. ${mes2}. Вы должны: ${mes3}.`);
