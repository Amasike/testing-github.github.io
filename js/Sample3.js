//To save values in the localstorage
const names = 'My name is Kaycee';
localStorage.setItem('name', names);
//To get items from localStorage
const getName = localStorage.getItem('name');
console.log(getName);
//To delete an item from localstorage
localStorage.removeItem('name');
//To clear all items from localStorage
localStorage.clear();

const myArr = [1, 2, 3, 4, 5, 6, 7];
//This can also be converted to JSON by using literals thus
// const myArr = `[1, 2, 3, 4, 5, 6, 7]`
localStorage.setItem('arr', JSON.stringify(myArr));
const getArr = JSON.parse(localStorage.getItem('arr'));

const preview = document.querySelector('.preview');
console.log(getArr);
getArr.forEach(arr => {
    preview.innerHTML += arr + '<br>'
});

//Javascript object
// const obj = {
//     name: 'Kaycee',
//     age: 105,
//     location: 'Lagos'
// }

//Short JSON.stringify model of object
const obj = `{
    "name": "Kaycee",
    "age": 105,
    "location": "Lagos",
    "date": "2013-03-12"
}`
localStorage.setItem('object', obj);
const getObj = JSON.parse(localStorage.getItem('object'), function(key, value) {
    if(key === 'date') {
        return new Date(value);
    } else {
        return value
    }
});
console.log(getObj);
//getObj.date = new Date(getObj.date);
console.log(getObj.date);
preview.innerHTML = getObj.date;