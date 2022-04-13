//Generar comida.
const foodGenerator = (snake, food, SQUAD_SIZE)=>{
    if (food.active == 0) {
        const FOOD_POS_X = Math.round(Math.random()*15)*SQUAD_SIZE;
        const FOOD_POS_Y = Math.round(Math.random()*15)*SQUAD_SIZE;
        food.posX = FOOD_POS_X;
        food.posY = FOOD_POS_Y;

        //Generar otra posicion si se sobrepone con la serpiente.
        for (let piece = 0 ; piece < snake.length ; piece++) {
            if (snake[piece].posX == FOOD_POS_X && snake[piece].posY == FOOD_POS_Y) {
                return foodGenerator();
            };
        };
        food.active = 1;
    }
}

export default foodGenerator;