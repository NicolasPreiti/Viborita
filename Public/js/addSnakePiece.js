//Agrandar serpiente al comer.
const addSnakePiece = (snake, moves, food)=>{
    let {MOVE_X, MOVE_Y} = moves;
    let {posX, posY} = food;
    if (snake[0].posX == posX && snake[0].posY == posY) {
        const taiL = snake[snake.length - 1];
        snake.push({
            posX: taiL.posX + MOVE_X,
            posY: taiL.posY + MOVE_Y
        });
        food.active = 0;
    };
};

export default addSnakePiece;