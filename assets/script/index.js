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
    let seconds = time.getSeconds().toString().padStart(2, '0');
    let hours = time.getHours();
    let minutes = time.getMinutes().toString().padStart(2, '0');

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
const textRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;


//para.innerText = first;
if(textRegex.test(first)){
    para.innerText = first;
}
else if(first.length === 0){
    para.innerText = 'Enter a value as 00:00'
}else if( isNaN(first)){
    para.innerText = 'Enter a valid number'
} else{
    para.innerText = 'Enter a valid as 00:00'
}
}

onEvent('click', button, function(){
    validate();
});