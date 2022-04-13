//Actualizar la direccion de la serpiente.
const directionSnake = (directions, moves, SQUAD_SIZE)=>{
    const direction = directions.current;
    if (direction == directions.left) {
        moves.MOVE_X = -SQUAD_SIZE;
        moves.MOVE_Y = 0;
    };
    if (direction == directions.up) {
        moves.MOVE_Y = -SQUAD_SIZE;
        moves.MOVE_X = 0;
    };
    if (direction == directions.rigth) {
        moves.MOVE_X = SQUAD_SIZE;
        moves.MOVE_Y = 0;
    };
    if (direction == directions.down) {
        moves.MOVE_Y = SQUAD_SIZE;
        moves.MOVE_X = 0;
    };
};

export default directionSnake;