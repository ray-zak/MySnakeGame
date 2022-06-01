
import {GRID_SIZE} from "./grid.js";
import {score, reset_score} from "./food.js";

export let  Snake = [{x:3,y:9}, {x:3,y:10},{x:3,y:11}];
let direction = "ArrowRight";
export let SNAKE_SPEED = 5;





export function IncreaseSpeed (){
    SNAKE_SPEED+= 0.25;
}

const changeDirection = (code)=>{

    switch (code){
        case "ArrowRight":
            direction==="ArrowLeft"? direction= "ArrowLeft": direction= "ArrowRight";
            break;
        case "ArrowLeft":
            direction==="ArrowRight"? direction = "ArrowRight": direction = "ArrowLeft";
            break;
        case "ArrowDown":
            direction==="ArrowUp"? direction = "ArrowUp": direction = "ArrowDown";
            break;
        case "ArrowUp":
            direction==="ArrowDown"? direction = "ArrowDown": direction = "ArrowUp";
            break;
        default: break;
    }

}
export function update(){

    console.log(SNAKE_SPEED);
    CheckOutOfBorder();



    window.addEventListener("keydown",(e)=>changeDirection(e.code));
    let head = Snake[Snake.length-1];

    switch (direction){
        case "ArrowRight":
            head = {x: head.x, y: head.y+1};
            break;
        case "ArrowLeft":
            head = {x: head.x, y: head.y-1};
            break;
        case "ArrowUp":
            head = {x: head.x-1, y: head.y};
            break;
        case "ArrowDown":
            head = {x: head.x+1, y: head.y};
            break;
        default: break;
    }

    Snake.push(head);
    Snake.shift();

    CheckSelfIntersect();


}

export function draw (gameBoard){


    Snake.forEach(segment => {
        if(Snake[Snake.length-1].x===segment.x && Snake[Snake.length-1].y===segment.y){
            console.log(" this is head");
            const snakeElement = document.createElement('div')
            snakeElement.style.gridRowStart = segment.x
            snakeElement.style.gridColumnStart = segment.y
            snakeElement.classList.add('snake_head')
            gameBoard.appendChild(snakeElement)
        }
        else {

            const snakeElement = document.createElement('div')
            snakeElement.style.gridRowStart = segment.x
            snakeElement.style.gridColumnStart = segment.y
            snakeElement.classList.add('snake')
            gameBoard.appendChild(snakeElement)
        }

    })
}

function CheckOutOfBorder (){
    let head = Snake[Snake.length-1];
    if(head.x>GRID_SIZE || head.y> GRID_SIZE || head.x< 0 || head.y<0){
        //console.log("out");
        alert("You lost");
        Snake = [{x:3,y:9}, {x:3,y:10},{x:3,y:11}];
        reset_score();
        SNAKE_SPEED =5;
        direction="ArrowRight";


    }
}

function CheckSelfIntersect (){
    let head = Snake[Snake.length-1];
    for(let i=0;i<Snake.length-1;i++){
        if(head.x===Snake[i].x && head.y===Snake[i].y){

            alert("you lost");
            reset_score();
            Snake = [{x:3,y:9}, {x:3,y:10},{x:3,y:11}];
            SNAKE_SPEED =5;
            direction="ArrowRight";
            break;
        }
    }

}



