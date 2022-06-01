
import {update as updateSnake , draw as drawSnake , SNAKE_SPEED} from "./snake.js";
import { update as updateFood, draw as drawFood, score } from './food.js'



let lastRenderTime = 0;
let gameOver = false;



const gameBoard = document.getElementById('game-board');

// game loop function

function main (currentTime){
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main)
    const SecondsSinceLastRender = (currentTime-lastRenderTime)/1000;

    if(SecondsSinceLastRender< 1/SNAKE_SPEED) return


    lastRenderTime = currentTime;

    update();
    draw();

}

window.requestAnimationFrame(main)



function update() {

    updateSnake()
    updateFood()
    //checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''

    drawSnake(gameBoard)
    drawFood(gameBoard)
}

