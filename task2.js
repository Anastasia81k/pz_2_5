function getRandon(){
    return Math.floor(Math.random() * (100));
}
let attempt =1;
let countGame =1;
function guessNumber() {
    let random = getRandon();
    console.log(random);
    let answer = +prompt('Яке число загадане?');
    if(answer == null){
        alert('Як небудь зіграємо ще. ^_^');
    }else {
        while (answer != random && answer != null) {
            let result = Math.abs(answer -random);
            if(result < 5){
                console.log(getDate() + " спроба " + attempt + ": число " + answer +  " -  не вірно");
                answer = +prompt('дуже гаряче. Спробуйте ще раз!')
            } else if(result < 10){
                console.log(getDate() + " спроба " + attempt + ": число " + answer +  " -  не вірно");
                answer = +prompt('гаряче. Спробуйте ще раз!')
            }else if(result < 20){
                console.log(getDate() + " спроба " + attempt + ": число " + answer +  " -  не вірно");
                answer = +prompt('холодно. Спробуйте ще раз!')
            }
            else {
                console.log(getDate() + " спроба " + attempt + ": число " + answer +  " -  не вірно");
                answer = prompt('дуже холодно. Спробуйте ще раз!')
            }
            attempt++;
        }
        if (answer == random) {
            console.log(getDate() + "  За " + attempt+  " спроб ви вгадали число " + random +  " !!!");
            console.log("Гру "+ countGame + " завершено  " );
            countGame++;
            alert("Вірно!!! За " + attempt+  " спроб ви вгадали число " + random +  " !!!");
            attempt = 1;
            let ask = confirm("Зіграємо?");
            if(ask == true){
                guessNumber();
            }
            else{
                alert(' :( ')
            }

        }
    }
}
let ask = confirm("Зіграємо?")
if(ask == true){
    guessNumber();
}
function getDate(){
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.getDate();
    let month = now.getMonth() +1;
    let year = now.getFullYear();
    let data = `${day}.${month}.${year} ${hour}:${minutes}:${seconds} `;
    return data;
}































/*function getRandon(){
    return Math.floor(Math.random() * (10));
}
let attempt =1;
function guessNumber() {
    let random = getRandon();
    let answer = +prompt('Какое число я загадал?');
    if(answer == null){
        alert('Пока! Как нибудь сыграем ещё. ^_^');s
    }else {
        while (answer != random && answer != null) {
           /* (answer < random) ? answer = prompt('Мало. Попробуй ещё раз!') :

                (answer > random) ? answer = prompt('Много. Попробуй ещё раз!') :

                    (answer != parseInt(answer)) ? answer = prompt('Вводить нужно числа.  Какое число я загадал?') : false;*/
           /*if(answer < random){
               console.log(getDate() + " " + "attempt : " + attempt + " " + answer +  " -  not");
               answer = prompt('Мало. Попробуй ещё раз!')

           } else if (answer > random){
               console.log(getDate() + " " + "attempt : " + attempt + " " + answer +  " -  not");
               answer = prompt('Много. Попробуй ещё раз!')
           }
           else if(answer != parseInt(answer)){
               console.log(getDate() + " " + "attempt : " + attempt + " " + answer +  " -  not");
               answer = prompt('Вводить нужно числа.  Какое число я загадал?')

           }
            attempt++;
        }
        if (answer == random) {
            console.log(getDate() + " " + attempt + " true ");
            alert('Верно! Это число ' + random + '.' + ' Тебе понадобилось ' + attempt + ' попыток.');
            attempt = 1;
            let ask = confirm("Сыграем?");
            if(ask == true){
                guessNumber();
            }
            else{
                alert(' :( ')
            }

        }
    }
}
let ask = confirm("Сыграем?")
if(ask == true){
    guessNumber();
}
function getDate(){
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let data = `${hour}:${minutes}:${seconds}`
    return data;
}

*/

//SWITCH     НАЧАТЬ  ИГРУ ЛИБО ПРО






/*let random = (Math.floor(Math.random() * (100)));
console.log(random);
let attempt =0;
let number ;
let result;
function guessNumber() {
    number =+prompt("Guess a number  on range of 0 : 100;" );
    result = Math.abs(random - number);
        if (result === 0) {
            alert('Congratulations! You got it right!' + attempt + 'count');
        } else if (result < 5) {
            alert('дуже гаряче');
        } else if (result < 10) {
            alert("гаряче");
        } else if (result < 20) {
            alert("холодно");
        } else {
            alert("дуже холодно");
        }
    attempt++;


}



let askCont = confirm("Do you want to continue game?")
       if(askCont == true) {while (askCont == true) {
            guessNumber();
}} else {
        alert("Thanks for the game!");
    }

let askForEnd = confirm("Do you want to play again?")
if(askForEnd == true){
    guessNumber();
}else {
    alert("Thanks for the game!");
}



*/













/*let random = (Math.floor(Math.random() * (100)));
console.log(random);
let number = +prompt("Guess a number  on range of 0 : 100");
while(!(number === random)) {
    if(number === random){
        alert('Congratulations! You got it right!')
    }
    else if (number <= (random - 5) || number >= (random + 5)) {
        console.log(random - 5);
        console.log(random + 5);
        alert("дуже гаряче");
    }
    else if((number <= (random  - 10) || number >= (random + 10))){
        alert("гаряче");
    }
    else{
        alert("холодно");
    }
}

 */

/*

function guessNumber() {
    let rand = (Math.floor(Math.random() * (100)));
    console.log(rand);
    let number = +prompt("Guess a number  on range of 0 : 100")
    if(number === rand){
        alert('Congratulations! You got it right!')
    } if (number <= (rand  - 5) || number >= (rand + 5)){
        console.log(rand - 5);
        console.log(rand  +5);
        alert("дуже гарячу");
    } if (number <= (rand  - 10) || number >= (rand + 10)) {
        console.log(rand - 10);
        console.log(rand  +10);
        alert("гаряче");
    }
    else if ((rand - 20) <=number ||  (rand + 20) >= number){
            alert("тепло");

}
}

guessNumber();

 */