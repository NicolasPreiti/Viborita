//Actualizar las posiciones de la serpiente.
const update = (snake, moves)=>{
    let {MOVE_X, MOVE_Y} = moves;
    for (let piece = snake.length - 1; piece >= 0 ; piece--) {
        if (piece != 0) {
            let {posX, posY} = snake[piece - 1];
            snake[piece].posX = posX;
            snake[piece].posY = posY;
        } else {
            snake[piece].posX += MOVE_X;
            snake[piece].posY += MOVE_Y;
            MOVE_X = 0;
            MOVE_Y = 0;
        }
    }
}

export default update;