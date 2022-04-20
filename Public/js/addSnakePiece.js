//Agrandar serpiente al comer.
const addSnakePiece = (snake, moves, food, tail)=>{
    let {MOVE_X, MOVE_Y} = moves;
    let {posX, posY} = food;
    if (snake[0].posX == posX && snake[0].posY == posY) {
        snake.push({
            posX: tail.posX,
            posY: tail.posY
        });
        food.active = 0;
    };
};

export default addSnakePiece;