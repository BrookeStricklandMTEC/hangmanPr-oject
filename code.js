
// functions with variables ------------------------------------------------------

function randomWord() {
    let words = ['stuff', 'sugar', 'sweet', 'happy', 'money', 'cat', 'make'];

    let answer = Math.floor(Math.random() * words/length);
    return randomWord[answer]; 

}


let answer = " "
let mistakes = 0;
let guessed = [ ];
let maxWrong = 6;
let wordStatus = 0;


function generateButtons () { 

let buttonsHtml = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split('').map( letter => 
`
<button
class="button"
id='` + letter + `
onClick="handleGuess('` + letter +`')" 
>
` + letter + `'

</button> 

`).join('');



document.getElementById('keyboard').innerHtml = buttonsHtml;
}


function guessedWord () {
wordStatus = answer.split(' ').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

document.getElementById('wordSpotlight').innerHTML === wordStatus;

}

function handleGuess (chosenLetter) { 

guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : 0; 
document.getElementById(chosenLetter).setAttribute(' disabled ', true);

alert(answer);

if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon(); 
    }
        else if ( answer.indexOf(chosenLetter) === -1) {
        mistakes++;
        updateMistakes(); 
        checkIfGameLost(); 
        }
            
    }

function updateMistakes () {
    document.getElementById().innerHTML = mistakes;
}

function checkIfGameWon () {
    if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won !!!!';
    }
}

function checkIfGameLost () {
    if (mistakes === maxWrong) {
    document.getElementById('keyboard').innerHTML = 'Y O U  D I E D ';
    }
}

function reset() {
    mistakes = 0;
    guessed = [];
    
    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
}

randomWord();
guessedWord();
generateButtons();
reset(); 

document.getElementById('maxWrong').innerHTML = maxWrong; 






//----------------------------------------------------------------------------------




//----------








