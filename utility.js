
let updateScore = 0;
function handleKeyboardButtonPress(event) {
    // console.log(event.key);
    const playerpressedkey = event.key;
    const ScreenShowedKey = document.getElementById("random_alphabets").innerText;
    const lowerString = ScreenShowedKey.toLowerCase()
    console.log(lowerString);
   
    // let newScore = convertIntoInt("current-score");

    if (playerpressedkey === lowerString) {

        removeAlphabetsBackground(lowerString);
        getRandomAlphabet()

        // let newScore = convertIntoInt("current-score");
        // const updateScore = newScore + 1;
        updateScore++

        disPlay('current-score', updateScore);

    }
    else {
        console.log("you are not pressed correct button");

        const lifeRemain = convertIntoInt('current-life');

        const newLife = lifeRemain - 1;

        if (newLife === 0) {
        //    hideScreen("final-score");
        //    showScreen('keyboard');
           showHide("keyboard", "final-score");
            disPlay('display-final-score',updateScore)
        } else {
            disPlay('current-life', newLife);

        }

    }
}
// event fire when clicked 
document.addEventListener('keyup', handleKeyboardButtonPress)

// create random alphabets and show it in screen
function getRandomAlphabet() {

    const alphabetsStrings = "abcdefghijklmnopqrstuvwxyz";
    const alphabetsString = alphabetsStrings.split('');


    //  create random number between 0 to 25
    const numbers = Math.round(Math.random() * 25)

    // console.log(`random number is ${numbers} and alphabets is ${alphabetsString[numbers]}`);

    // random alphabets
    const randomAlphabet = alphabetsString[numbers];
    console.log(randomAlphabet);

    // show alphabets in screen 
    const randomAlphabets = document.getElementById('random_alphabets');
    randomAlphabets.innerText = randomAlphabet;

    setAlphabetsBackground(randomAlphabet)


    return randomAlphabet;
}

// set background color
function setAlphabetsBackground(element) {
    const alphabetBackground = document.getElementById(element)
    alphabetBackground.classList.add('bg-orange-400')
}

// remove background color
function removeAlphabetsBackground(element) {
    const alphabetBackground = document.getElementById(element)
    alphabetBackground.classList.remove('bg-orange-400')
}

function disPlay(event, value) {
    
    const element = document.getElementById(event);
    
    element.innerText = value;
}

// convert into presINT
function convertIntoInt(event) {
    const element = document.getElementById(event);
    const elementText = element.innerText;
    const convertedElement = parseInt(elementText);
    return convertedElement;
}

// show one screen at the same the hide another one 

function showHide(event, event2) {

    const element = document.getElementById(event);
    element.classList.add("hidden");
    element.classList.remove("flex");

    const element2 = document.getElementById(event2);
    element2.classList.remove("hidden");
    element2.classList.add("flex");
}
// show screen 
function showScreen(event){
    const element = document.getElementById(event);
    element.classList.add("hidden");
}
// hide screen
function hideScreen(event){
    const element2 = document.getElementById(event);
    element2.classList.remove("hidden");
}

// play again function
function playAgain(){
    
    hideScreen("final-score");
    showScreen("keyboard");
    getRandomAlphabet();
}

