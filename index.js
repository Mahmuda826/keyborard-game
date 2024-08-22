//function play(){
    //hide the home screen
   // const homeScreen = document.getElementById('home-screen');
    //console.log(homeScreen.classList);
   // homeScreen.classList.add('hidden');

    //show playground
    //const playground= document.getElementById('play-ground ');
   // console.log(playground.classList);
    //playground.classList.remove('hidden');



function continueGame(){
    //step - 1: generate a random alphabet 
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet',alphabet);

    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alhpabet');
    currentAlphabetElement.innerText = alphabet;
}


function play()
{
    hideElementById('home-screen');
    
    showElementById('play-ground');
    continueGame()
}

