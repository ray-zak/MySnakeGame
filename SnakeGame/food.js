

import {Snake, SNAKE_SPEED, IncreaseSpeed} from "./snake.js";
export let score=0;
const grid_size = 20;

let Food = GetRandomFoodPosition();




export function update(){

        onSnake();


}

function onSnake (){

    let head = Snake[Snake.length-1];

    Snake.map(segment=>{
        if(head.x===Food.x && head.y===Food.y){
            Snake.push(head);
            score++;
            Food= null;
            Food= GetRandomFoodPosition();
            if(score>0 && score%2===0 && SNAKE_SPEED<12){
                IncreaseSpeed();
            }
        }
        if(segment.y===Food.y && segment.x===Food.x){
            Food = GetRandomFoodPosition();
        }
    })
}

export function draw(gameBoard){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = Food.x;
    foodElement.style.gridColumnStart = Food.y;
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
    const score_element = document.getElementById('score');
    score_element.innerText = 'Score: ';
    score_element.innerText += " "+score.toString();
}

export function reset_score(){
    score =0;
}




function GetRandomFoodPosition (){


    let x = Math.floor(Math.random()*grid_size)+1;
    let y = Math.floor(Math.random()*grid_size)+1;

        return {x:x, y:y};


}
