import drawSnake from "./js/draw.js";
import update from "./js/update.js";
import directionSnake from "./js/directionSnake.js";
import collisions from "./js/collisions.js";
import addSnakePiece from "./js/addSnakePiece.js";
import foodGenerator from "./js/foodGenerator.js";
import finishGame from "./js/finishGame.js";

//Elementos HTML
const lienzo = document.getElementById("canva");
const btnStartGame = document.getElementById("startGame");
const menu = document.getElementById("menu");
const ctx = lienzo.getContext("2d");


//Cuerpo de la serpiente
let snake = [
    {posX: 30, posY: 10},
    {posX: 20, posY: 10},
    {posX: 10, posY: 10},
];

//Direcciones.
const directions = {
    left: 1,
    up: 2,
    rigth: 3,
    down: 4,
    current: 3
};

//Movimientos.
let moves = {
    MOVE_X: 0,
    MOVE_Y: 0
};

//Comida.
let food = {
    posX: undefined,
    posY: undefined,
    active: 0
};

//Variables.
const SQUAD_SIZE = 10;
let currentGame;


//Comenzar juego.
const startGame = ()=>{
    clearInterval(currentGame);

    snake = [
        {posX: 30, posY: 10},
        {posX: 20, posY: 10},
        {posX: 10, posY: 10}
    ];

    moves = {
        MOVE_X: 0,
        MOVE_Y: 0
    }

    food = {
        posX: undefined,
        posY: undefined,
        active: 0
    };

    directions.current = 3;
    
    foodGenerator(snake, food, SQUAD_SIZE);
    drawSnake(ctx, snake, food);

    currentGame = setInterval(()=>{
        directionSnake(directions, moves, SQUAD_SIZE);
        update(snake, moves, food);
        foodGenerator(snake, food, SQUAD_SIZE);
        collisions(currentGame, snake, lienzo, menu, finishGame);
        drawSnake(ctx, snake, food, SQUAD_SIZE);
    }, 80)
};


btnStartGame.addEventListener("click", ()=>{
    menu.style.display = "none";
    lienzo.style.display = "block";
    startGame(); 
});


//Cambiar la direccion de la serpiente segun la tecla presionada.
addEventListener("keydown", (event)=>{
    const direction = directions.current;
    if (event.keyCode == 37) {
        if (direction == directions.rigth) {
            console.log("va hacia la derecha");
        } else {    
            directions.current = directions.left;
        };
    }
    if (event.keyCode == 38) {
        if (direction == directions.down) {
            console.log("va hacia la abajo");
        } else {    
            directions.current = directions.up;
        };
    }
    if (event.keyCode == 39) {
        if (direction == directions.left) {
            console.log("va hacia la izquierda");
        } else {    
            directions.current = directions.rigth;
        };
    }
    if (event.keyCode == 40) {
        if (direction == directions.up) {
            console.log("va hacia la arriba");
        } else {    
            directions.current = directions.down;
        };
    }
})