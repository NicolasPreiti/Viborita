import addSnakePiece from "../js/addSnakePiece.js";

//Actualizar las posiciones de la serpiente.
const update = (snake, moves, food)=>{
    let {MOVE_X, MOVE_Y} = moves;
    for (let piece = snake.length - 1; piece >= 0 ; piece--) {
        if (piece != 0) {
            if (piece == snake.length - 1) {
                const tail = {
                    posX: snake[piece].posX,
                    posY: snake[piece].posY
                };
                addSnakePiece(snake, moves, food, tail);
                let {posX, posY} = snake[piece - 1];
                snake[piece].posX = posX;
                snake[piece].posY = posY;
            } else {
                let {posX, posY} = snake[piece - 1];
                snake[piece].posX = posX;
                snake[piece].posY = posY;
            };
        } else {
            snake[piece].posX += MOVE_X;
            snake[piece].posY += MOVE_Y;
            MOVE_X = 0;
            MOVE_Y = 0;
        };
    };
};

export default update;