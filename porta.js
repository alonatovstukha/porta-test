//const str = 'The Tao gave birth to machine language.      Machine language gave birth to the assembler. The assembler gave birth to the compiler. Now there are ten thousand languages. Each language has its purpose, however humble. Each language expresses the Yin and Yang of software. Each language has its place within the Tao. But do not program in COBOL if you can avoid it. -- Geoffrey James, "The Tao of Programming"';
const str = 'C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup'

function findSymbols(str) {

  let array = str.split(' ');

  let newArr = [];
  let finalArr = [];
  let finalSymbol;

  array.forEach((element) => {
    element = element.replace(/[\s."--,!?()%]/g, '') // удаляем лишние символы в элементах массива
    newArr.push(element)
  })

  newArr = newArr.filter(element => element.length > 0); // удаляем пустые элементы в массиве

  //console.log(newArr)

  newArr.forEach(element => { // создаем обьект "ключ-значение", в котором ключ-символ, значение-количество повторений
    let obj = {}
    for (let i = 0; i < element.length; i++) {
      if (element[i] in obj) {
        let j = obj[element[i]];
        j++;
        obj[element[i]] = j;
      }
      else {
        obj[element[i]] = 1;
      }
    }

    for (let key in obj) { // добавляем в массив первые неповторяющиеся буквы с каждого слова
      if (obj[key] == 1) {
        finalArr.push(key);
        break;
      }
    }
  })

  // console.log(finalArr)

  let obj = {}
  finalArr.forEach(element => {

    if (element in obj) { // создаем обьект "ключ-значение", в котором ключ-символ, значение-количество повторений
      let j = obj[element];
      j++;
      obj[element] = j;
    }
    else {
      obj[element] = 1;
    }


    for (let key in obj) { // ищем первый неповторяющийся символ
      if (obj[key] == 1) {
        finalSymbol = key;
        break;
      }
    }
  })

  console.log(finalSymbol) // m
}

findSymbols(str);
