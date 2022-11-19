'use strict';



//Add event listener
function onEvent(event, selector, callback){
    return selector.addEventListener(event, callback);
}

//Get HTML element by id
function getElement(selector, parent = document){
    return parent.getElementById(selector);
}

//Select HTML element by selector
function select(selector, parent = document){
    return parent.querySelector(selector);
}


const button = document.querySelector('.start');
const first = document.querySelector('input');
const para = document.querySelector('.time')
const start = new Audio('./assets/audio/music.mp3')
start.type = 'audio/mp3';

function getDate(){
    let time = new Date();
    let seconds = time.getSeconds();
    let hours = time.getHours();
    let minutes = time.getMinutes();

    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;
    let time2 = hours+":"+minutes;
    
    const body = document.querySelector('body')
    const first = document.querySelector('input');
    if(time2 == first.value){
        start.play();
    }

    
    
    
   
}

setInterval(getDate, 1000);

/*button.addEventListener('click', () => {
    para.innerText = first.value;
    if(first.length ===0){
        para.innerText == 'Enter'
    }
})
*/
function validate(){
    const button = document.querySelector('.start');
const first = document.querySelector('input').value;
const para = document.querySelector('.time')


para.innerText = first;
if(first.length === 0){
    para.innerText = 'Enter a value as 00:00'
}else if(first.match(/[a-z]/i)){
    para.innerText = 'Enter a valid number'
}
}

onEvent('click', button, function(){
    validate();
});