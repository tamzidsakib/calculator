document.getElementById("answer").readonly=true;

let screen = document.getElementById("answer");

buttons = document.querySelectorAll("button");

let screenValue = '';



for (i of buttons)
{
    i.addEventListener('click', (e)=>{
        buttonText=e.target.innerText;

        if(buttonText=='%'){
            
            screenValue = screenValue/100;
            screen.value = screenValue;
        }

        if(buttonText=='X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText=='C'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText=='='){
            
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}





document.addEventListener("keydown", function(e){


    if(e.keycode==88){
        screenValue += '*';
        screen.value =  screenValue;
    }


    if(e.key<=9 || e.key=='+' || e.key=='-' || e.key=='*' || e.key=='/' || e.key=='.' 
    || e.key=='%' || e.key=='(' || e.key==')' || e.key=='=' ){

        screenValue += e.key;
        screen.value =  screenValue;
    }

    if(e.keycode==13 || e.keycode==187){
        
        screen.value =  eval(screenValue);
    }
    else if(e.keycode == 46){
        screenValue = '';
    screen.value = screenValue;
    }
    else if(e.keycode == 8){
        screenValue = screenValue.slice(0,-1);
    screen.value = screenValue;
    }

  



})
window.onerror = function(){
    alert ('Please input the valid expression');
    screenValue = '';
    screen.value = screenValue;
}