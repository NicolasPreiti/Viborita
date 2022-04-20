//Dibujar en el lienzo.
const drawSnake = (ctx, snake, food, SQUAD_SIZE)=>{
    //Limpiar el lienzo.
    ctx.clearRect(0, 0, 300, 300);

    //Dibujar la comida.
    const {posX, posY} = food;
    ctx.fillStyle = "#ff6050";
    ctx.fillRect(posX, posY, SQUAD_SIZE, SQUAD_SIZE);
    //ctx.strokeStyle = "#000";
    //ctx.strokeRect(posX, posY, SQUAD_SIZE, SQUAD_SIZE);
    
    // ctx.strokeStyle = "#fff";
    // ctx.moveTo(10, 10);
    // ctx.lineTo(10, 290);
    // ctx.stroke();

    // ctx.moveTo(290, 10);
    // ctx.lineTo(290, 290);
    // ctx.stroke();

    // ctx.moveTo(10, 10);
    // ctx.lineTo(290, 10);
    // ctx.stroke();

    // ctx.moveTo(10, 290);
    // ctx.lineTo(290, 290);
    // ctx.stroke();

    //Dibuja la serpiente.
    for (let cuerpo in snake) {
        const {posX, posY} = snake[cuerpo];
        if (cuerpo == 0) {
            ctx.fillStyle = "#fff";
            ctx.fillRect(posX, posY, SQUAD_SIZE, SQUAD_SIZE);
        } else {
            ctx.fillStyle = "#fff";
            ctx.fillRect(posX, posY, SQUAD_SIZE, SQUAD_SIZE);
        }
    };
};

export default drawSnake;