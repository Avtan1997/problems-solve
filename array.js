//task 1
//Литералы типа массивов
// let empty = []; //Массив без элементов
// let primes = [2, 3, 5, 7, 11]; //Массив с пятью числовыми элементами
// let misk = [1.1, true, 'a',]; //Три элмента различных типов плюс хвостовая запятая

//Могут быть произвольными выражениями
// let base = 1024;
// let table = [base, base+1, base+2, base+3];
// console.log(table)

//Массив может содержать объектные литералы или другие литералы типа массивов
// let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]]
// console.log(b)

//Разреженный массив с помощью запятых
// let count = [1, ,3]; //Элементы находятся по индексам 0 и 2 по индексу 1 элемента нет
//
// let  undefs = [,,]; //Массив не содержит элементов но имеет длинну в 2
// console.log(undefs)

//task 2
//Операция распространения (...) три точки

// const a = [1, 2, 3];
// const b = [0, ...a, 4]; //b == [0, 1, 2, 3, 4]
// console.log(b)

//Создания не глубокой копии массива.

// const original = [1, 2, 3];
// const copy = [...original]
// copy[0] = 0 //Модификация копии не приводоит к измененею оригинала.
// console.log(original[0]);

//Строки превращаются в массив односимольных строк

// let digits = [...'0123456789ABCDEF']; //строки итерируемые поэтому вы можете применять операцию ... для преврашения
// //любой строки в массив односимвольных строк.
// console.log(digits);

//Объекты множества Set итерируемые
// let letters = [...'hello world'];
// console.log([...new Set(letters)]);

//task 3
//Конструктор Array() можно вызывать тремя путями.

// 1 путь Вызов без агрумента типа такая []
// let a = new Array();//Вызов без агрумента типа такая []
// console.log(a)

//2 путь Вызов с одиночным числовым аргументом который указывает длинну.
// let b = new Array(10)
// console.log(b)

//3 путь Явное указание двух и более элементов массива или одиночного нечислового элмента.
// let a = new Array(5, 4, 3, 2, 1, 'testing');
// console.log(a)

//Создание массива
// const fruits = ['Яблоко', 'Банан'];
//
// // console.log(fruits.length)
//
// //Доступ к элементу массива по индексу
// const first = fruits[0]
// // console.log(first)
//
// const last = fruits[fruits.length - 1]
// // console.log(last)

//Итерирование по массиву
// fruits.forEach(function (item,index,array){
//   console.log(item,index, array)
// })

//Добавление элемента в конец массива
// const newLength = fruits.push('Апельсин')
// // console.log(newLength);
//
// //Удаление последного элемента массива
// const last2 = fruits.pop(); // Удалим апельсин (из конца)
// // console.log(fruits)
//
// //Удаление первого элмента массива
// const first2 = fruits.shift(); //Удалим яблоко (из начала)
// // console.log(fruits)
//
// //Добавление элемента в начло массива
// const newLength2 = fruits.unshift('Клубника') // Добавляет в начало.
// console.log(fruits)
//
// //Поиск номера элемента в массиве
// fruits.push('Манго') //[ 'Клубника', 'Банан', 'Манго' ]
//
// const pos = fruits.indexOf('Банан')
// console.log(fruits)

//task 4
//Array.of() метод создает новый экземпляр массива Array() из произвольного числа аргументов,
//вне зависимости от числа или типа аргумента.

// console.log(Array.of(7).length); // создал только одну ячейку 7
// console.log(Array.of(1, 2, 3).length); // создал три слота 3
//
// Array(7) //массиов с 7 пустыми слотами
// console.log(Array(1, 2, 3));

// Array.of() // При вызове без аргументов возвращает пустой массив.
// Array.of(10) //При вызове единственный числовым аргументом способна создавать массивы

//task 5
// Array.from() метод создает новый экземпляр Array из массивоподобного или итерируемого объекта.
// console.log(Array.from('foo')); // ожидаемый результат массива [ 'f', 'o', 'o' ]
//
// console.log(Array.from([1, 2, 3], x => x + x))

// const array = Array.from('123', x => parseInt(x))//конвертор строкого типа в числовой
// console.dir(array)

// const names = ['Avtan', 'Chynara', 'Beka']
// const copy = Array.from(names) //копирую оригинал с методом array
// console.log(copy)
// console.log(names)

//task 6
// Чтение и запись элементов массива

// let a = ['World']; //Начать с одноэлементного массива
// let value = a[0];//Прочитать элемент 0
// a[1] = 3.14; //Записать элемент 1
// let i = 2;
// a[i] = 3; //Записать элемент 2
// a[i + 1] = 'hello' // Записать элемент 3
// a[a[i]] = a[0] //Прочитать элементы 0 и 2, записать элемент 3
// console.log(a.length);
//
// console.log(a)

//____________________________________________________
// let o = {}; // создать простой объект
// o[1] = 'one'; //индексировать его с помощью целого числа
// console.log(o['1']); //числовые и строковые имена сврйств считаются одинаковыми.

// let a = [true, false]; //Этот массив содержит элементы по индексам 0 и 1.
// console.log(a)
// console.log(a[2]); // undefined элемент по этому индексу отсутствует
// console.log(a[-1]); // undefined свойство таким именем не существует

//task 7
// Разреженные массивы.

// let a = new Array(5) //Элементы отсутствуют но a.length равно 5.
// console.log(a.length)
//
// a = [] // Создает пустой массив без элементов и length = 0
// console.log(a.length)
//
// a[1000] = 0 //Присваивание добовляет один элемент, но устоновливает length в 1001
// console.log(a.length)

//___________________________________________________
// let a1 = [,]; //Этот массив не содержит элементов и значение length равно 1
// console.log(a1.length)
//
// let a2 = [undefined]; //Этот массив имеет один элемент undefined
//
// console.log(0 in a1); //false: a1 не содержит элемента по индексу 0
//
// console.log(0 in a2); //true: a2 имеет значение undefined по индексу 0.

//task 8
//Длина массива

// console.log([].length); //0: массив не содержит элементов.
// console.log(['a', 'b', 'c'].length); //3: самый высокий индекс равен 2, значение length равен 3.
//__________________________________________________________

// a = [1, 2, 3, 4, 5]; // Начать с пятиэлементного массива.
// console.log(a.length = 3); // а теперь [1, 2, 3]
// console.log(a.length = 0); // удалить все элементы. a становится []
// console.log(a.length = 5); // длина равна 5, но элементы отсутствуют подобно new Array(5)

//task 9
//Добавление и удаление элементов массива
// const a = []; //Начать с пустого массива
// a[0] = 'zero';
// console.log(a)








