
let youName = prompt('Ваше имя?')
alert('Привет, '  + youName + ' !')


let youYear = +(prompt('год вашего рождения?') as string)
const yearD = 2023
alert('Вам ' + (yearD - + youYear) + ' лет')



let lengthSideSquare = +(prompt('Введите длину стороны квадрата') as string)
alert('Периметр квадрата равен: ' + ( lengthSideSquare * 4 ))



let circleRadius = +(prompt('Введите радиус окружности') as string)
alert('Площадь круга равна: ' + ((circleRadius**2)*3.14))



let pathLength = +(prompt('Длина вашего пути в км?') as string)
let timeInterval = +(prompt('За какое время хотите доехать в ч?') as string)
alert('Ваша скорость составит: '+ pathLength /timeInterval + ' км/ч')



let quantity$ = +(prompt('Сумма в $')as string)
const course$ = 0.9178
alert('Сумма в euro: ' + (quantity$ * course$))



let fleshCard = +(prompt('Введите объём флешки в Гб') as string)
const files = 820
alert('файлов по 820 мб поместится: ' + (fleshCard * 1024 - (fleshCard * 1024) % files ) / files )



let summa = +(prompt('Какая у вас сумма?') as string)
let price = +(prompt('Сколько стоит шоколадка?') as string)
alert('Вы купите ' + ((summa - (summa % price)) / price) + ' шоколадок')
alert('Сдача составит: ' + (summa % price))



let threeNumber = +(prompt('Введите целое положительное трехзначное число') as string)
let figure1 = threeNumber % 10;
let figure2 = ((threeNumber-figure1)/10)% 10;
let figure3 = ((((threeNumber-figure1)/10)-figure2)/10)% 10;
alert('Получите: ' + figure1 + figure2 + figure3)



let checkingTheNumber = +(prompt('введите число') as string)
checkingTheNumber % 2 == 0 ? alert ('число чётное') : alert ('число нечётное')

