//ex1 var elem = document.getElementById('element');
// elem.classList.add('www');
// console.log(elem.className);

//ex2 var elem = document.getElementById('element');
// elem.classList.remove('a');
// console.log(elem.className);

//ex3 var elem = document.getElementById('element');
// console.log(elem.classList.contains('www'))

//ex4 var elem = document.getElementById('element');
// elem.classList.toggle('www');
// console.log(elem.className);

//ex5 var elem = document.getElementById('element');
// console.log(elem.classList.length)

//ex6 var elem = document.getElementsByClassName('www asd qwe');
// let i = 0;
// spisok = elem[0].className;
// spisok = spisok.split(' ')
// for (i of spisok) {
//     alert(i)
// }

//css1 var elem = document.getElementById('element');
// elem.style.cssText = 'border: 1px solid black; color: red; width: 100px; height: 30px; display: flex; justify-content: center;'

//tag1 var elem = document.getElementById('element')
// console.log(elem.tagName)

//tag2 function go() {
//     var elem = document.getElementById('element');
//     tag = elem.tagName;
//     console.log(elem.tagName.toLowerCase());
// }

//tag3 var elem = document.getElementsByClassName('www');
// i = 0;
// for (i in elem) {
//     elem[i].innerHTML += elem[i].tagName.toLowerCase();
// }

//cr1 var elem = document.getElementById('element');
// var a = document.createElement('li');
// a.innerHTML = 'punkt'
// elem.appendChild(a)

//cr2 var elem = document.getElementById('element');
// spisok = ['q', 'w', 'e'];
// i = 0;
// for (i in spisok) {
//     var a = document.createElement('li');
//     a.innerHTML = spisok[i]
//     elem.appendChild(a)
// }

//ins1 var elem = document.getElementById('element');
// elem.insertAdjacentHTML('beforebegin', '<span>!!!</span>')

//ins2 var elem = document.getElementById('element');
// elem.insertAdjacentHTML('beforeend', '<span>!!!</span>')

//ins3 var elem = document.getElementById('element');
// elem.insertAdjacentHTML('afterbegin', '<span>!!!</span>')

//ins4 var elem = document.getElementById('element');
// elem.insertAdjacentHTML('afterend', '<span>!!!</span>')

//del1 function go() {
//     let parent = document.getElementById('parent')
//     let child = document.getElementById('child')
//     parent.removeChild(child)
// }

//del2 function go() {
//     var elem = document.getElementById('element');
//     let child = elem.lastElementChild;
//     elem.removeChild(child);
// }

//del3 function go() {
//     var elem = document.getElementById('elemento');
//     elem.remove(elem);
//     }

//del4 function go(pop) {
//     pop.remove()
// }

//del5 function go() {
//     var elem = document.getElementById('elemento');
//     dup = elem.cloneNode(true)
//     document.body.prepend(dup)
// }

//ch1 var elem = document.getElementById('elemento');
// var fchild = elem.firstElementChild;
// fchild.style.color = 'red'

//ch2 var elem = document.getElementById('elemento');
// var fchild = elem.lastElementChild;
// fchild.style.color = 'red'

//ch3 var elem = document.getElementById('elemento')
// a = elem.children
// for (let i = 0; i < a.length; i++) {
//     a[i].innerHTML +=  '!!'
// }

//sib1 var elem = document.getElementById('elemento')
// center = document.getElementById('center')
// center.previousElementSibling.innerHTML += '!'

//sib2 var elem = document.getElementById('elemento')
// center = document.getElementById('center')
// center.nextElementSibling.innerHTML += '!'

//sib3 var elem = document.getElementById('elemento')
// center = document.getElementById('center')
// center.nextElementSibling.nextElementSibling.innerHTML += '!'

//par1 var elem = document.getElementById('center');
// a = elem.parentNode;
// a.style.color = 'red';

//par2 var elem = document.getElementById('center');
// a = elem.parentNode.parentNode;
// a.style.color = 'red';

// На величину границы 
 
 
//  1 
// let div = document.getElementById('div'); 
// div.style= 'border:3px solid red; width: 50px; padding:10px;' 
// function func(){ 
//     alert(div.clientTop) 
// } 
 
//  2 
// let div = document.getElementById('div'); 
// div.style= 'border:3px solid red; width: 50px; padding:10px;' 
// function func(){ 
//     alert(div.clientLeft) 
// } 
 
 
// На полный размер элемента 
 
//  1 
// let div = document.getElementById('div'); 
// div.style= 'border:3px solid red; width: 50px; padding:10px;' 
// function func(){ 
//     alert(div.offsetWidth) 
// } 
 
//  2 
// let div = document.getElementById('div'); 
// div.style= 'border:3px solid red; width: 50px; padding:10px;' 
// function func(){ 
//     alert(div.offsetHeight) 
// } 
 
 
// На размер элемента без границ, но с padding 
 
// //  1 
// let div = document.getElementById('div'); 
// div.style= 'border:3px solid red; width: 50px; padding:10px;' 
// function func(){ 
//     alert(div.clientWidth) 
// } 
 
//  2 
// let div = document.getElementById('div'); 
// div.style= 'border:3px solid red; width: 50px; padding:10px;' 
// function func(){ 
//     alert(div.clientHeight) 
// } 
 
 
// Работа с getComputedStyle 
 
//  1 
// let div = document.getElementById('div'); 
// div.style= 'border:3px solid red; width: 50px; padding:10px;' 
// let pop = getComputedStyle(div) 
// function func(){ 
//     alert(pop.width) 
//     alert(pop.height) 
// } 
 
 
// Прокрутка элемента 
 
//  1 
// var elem = document.getElementById('elem'); 
// function func() { 
//  alert(elem.scrollTop); 
// } 
 
// //  2 
// var elem = document.getElementById('elem'); 
// function func() { 
//  alert(elem.scrollLeft); 
// } 
 
// //  3 
// var elem = document.getElementById('elem'); 
// function func() { 
//  elem.scrollTop = 100; 
//     alert(elem.scrollTop); 
// } 
 
// //  4 
// var body = document.getElementById('body'); 
// function func() { 
//  body.scrollTop = '100'; 
//     alert(body.scrollTop); 
// }

//sc1 function go() {
//     elem = document.getElementById('elem');
//     elem.innerHTML = elem.scrollTop;
// }

//sc2 function go() {
//     elem = document.getElementById('elem');
//     elem.innerHTML = elem.scrollLeft;
// }

//sc3 function go() {
//     var elem = document.getElementById('elem');
//     elem.scrollTop = 100;
// }

//sc4 function go() {
//     var elem = document.getElementById('elem');
//     elem.scrollTop += 100;
// }

//sc5 function go() {
//     var elem = document.getElementById('elem');
//     alert(elem.scrollHeight);
// }

//sc6 function go() {
//     var elem = document.getElementById('elem');
//     alert(elem.scrollWidth);
// }

//sc7 function go() {
//     var elem = document.getElementById('elem');
//     elem.scrollTop = elem.scrollHeight - 100;
// }

//scr1 function go() {
//     var elem = document.getElementById('elem');
//     alert(window.pageYOffset)
// }

//scr2 function go() {
//     var elem = document.getElementById('elem');
//     alert(window.pageXOffset)
// }

//prok1 function go() {
//     var elem = document.getElementById('elem');
//     window.scrollTo(300, 500)
// }

//prok2 function go() {
//     var elem = document.getElementById('elem');
//     window.scrollBy(0, 500)
// }

//practice1 function go() {
//     var elem = document.getElementById('elem');
//     window.scrollTo(0, document.body.scrollHeight)
// }

// practice3 function go() {
//     var elem = document.getElementById('elem');
//     window.scrollTo += 100
// }

//practice2 function go() {
//     var elem = document.getElementById('elem');
//     window.scrollBy(0, 400)
// }

//practice4 function go() {
//     var elem = document.getElementById('elem');
//     a = elem.offsetWidth;
//     b = elem.offsetHeight;
//     elem.style.width = a * 2 + 'px';
//     elem.style.height = b * 2 + 'px';
// }