const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
let msg = document.getElementById('msg');


function broken(){
  return lamp.src.indexOf ('quebrada') > -1;
}

function lampOn(){
  if(!broken()){
    lamp.src = 'img/ligada.png';
    document.body.style.backgroundColor = "yellow"; 
    msg.innerText = 'Apague a luz!';  
  }
}

function lampOff(){
  if(!broken()){
    lamp.src = 'img/desligada.png';
    document.body.style.backgroundColor = "black";
    msg.innerText = 'Dê dois clicks na lâmpada!';
  }
}

function lampBroken(){
  lamp.src = 'img/quebrada.png';
  document.body.style.backgroundColor = "red";
  msg.innerText = 'xiiiiii!!!';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('dblclick', lampBroken);
