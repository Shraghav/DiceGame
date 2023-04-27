'use strict';
//for changing the styles of the players
const playerel0 = document.querySelector('.player--0');
const playerel1 = document.querySelector('.player--1'); 

//displaying in the first point(if you know you know)
const score0el = document.getElementById('score--0');
const score1el = document.getElementById('score--1');

//image dice
const disp = document.querySelector('.dice');

//The total score for active player
const player0 = document.getElementById('current--0');
const player1 = document.getElementById('current--1');

//active player refers to the current player

//specifying the current score by initialising

//these refers to the partial score

//like for holding the score at top

let playing, currentscore1, activePlayer,arr;

function init() {
    arr = [0, 0]
    currentscore1 = 0;
    activePlayer = 0;
    playing = true;
    score0el.textContent = 0;
    score1el.textContent = 0;
    player1.textContent = 0;
    player0.textContent = 0;
    playerel0.classList.remove('player--winner');
    playerel1.classList.remove('player--winner');
    playerel0.classList.add('player--active')
    playerel1.classList.remove('player--active')

}
init();
//boolean value that shoul not happen when we  finish our game
//craeting for hold, rolldice and rest
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const reset = document.querySelector('.btn--new');

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //having the current score also 0
    currentscore1 = 0;
    //checking whether the active player is 0 we are changing to 1 and vice versa because, if the user 
    //rolls 1 their score will be 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    //styling
    playerel0.classList.toggle('player--active');
    playerel1.classList.toggle('player--active');
}
disp.classList.add('hidden');

//defining and implementing the function
roll.addEventListener('click', function () {
    if (playing) {
        //random number
        const dice = Math.trunc(Math.random() * 6) + 1;
        //displaying
        disp.classList.remove('hidden');
        disp.src = `dice-${dice}.png`;
        console.log(dice);
        if (dice != 1) {

            //the scores 2,3,4,5,6 will be added to the current score
            currentscore1 += dice;

            //here if the active player is 0 or 1 based on that the current score will be updated
            document.getElementById(`current--${activePlayer}`).textContent = currentscore1;
        }
        else {
            switchPlayer()
            //same if the dice is rolled 1 baesd on which player is playing the score will be set to 0
      
        }
    }
});

hold.addEventListener('click', function () {
    if (playing) {
        //just adding the score of one player (0,1) to currentscore
        arr[activePlayer] += currentscore1;
        document.getElementById(`score--${activePlayer}`).textContent = arr[activePlayer];

        if (arr[activePlayer]>= 20) {
            playing = false;
            disp.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        //switching the player if currentscore1 is not greater than 20
        else {
            switchPlayer()
        }
    }
});

reset.addEventListener('click', init);