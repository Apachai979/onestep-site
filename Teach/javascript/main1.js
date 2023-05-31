document.write('Hello java!'); //Просто выводит инфу на странице
console.log('It is works'); //Вывод в консоль!
console.info('It is works too') //тоже вывод в консоль
console.error('wrong!') // сообщение в стиле ошибки, ссылка на ошибку,обязательно нужно исправить
console.warn('Предупреждение') //сообщение предупреждение, не вляет на работу сайта

var text = document.getElementById('txt');
console.log(text.id);
text.title = "text here";
console.log(text.title);
text.style.color = "red";
//text.style.backgroundColor = "blue";
text.innerHTML = "he--><br>llo."

document.getElementById('txt').style.color = "green";

var spans = document.getElementsByTagName('span');
for (var i = 0; i < spans.length; i++) {
  console.log(spans[i].innerHTML);
}

var spans = document.getElementsByClassName('simple-class');
for (var i = 0; i < spans.length; i++) {
  console.log(spans[i].innerHTML);
}

var num;
const perem = 10; // нельзя переопределять
console.log("Константа: " + perem + ".");

var str_1 = Number("12");
console.log(str_1 + 5);

//alert("Ты супер!");

//var data = confirm("OK>?");
if (data) {
  alert("Ну супер!")
}

//var data = prompt("Сколько?"); //всплывающее окно, которое позволяет ввести символы
if (data == 10) {
  alert("теперь запомни число: " + data + 3);
}

var count = 0;
function onClickButton(el) {
  count++;
  el.innerHTML = "Вы нажали на кнопку: " + count + " раз.";
  console.log(el.name);
}
function onInput(el) {
  if (el.value == 'hello') {
    alert('Hello too');
  }
}