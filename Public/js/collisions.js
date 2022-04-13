//Detectar si la serpiente colisiona.
const collisions = (currentGame, snake, lienzo, menu, finishGame)=>{
    //Colisiones con el borde del lienzo.
    let headPosX = snake[0].posX;
    let headPosY = snake[0].posY;
    if (headPosX >= lienzo.width || headPosX < 0 || headPosY >= lienzo.height || headPosY < 0) {
        console.log("se termino el juego");
        finishGame(menu, lienzo);
        return clearInterval(currentGame);
    }

    //Colisiones con el cuerpo de la serpiente.
    for (let piece = snake.length - 1; piece > 0 ; piece--) {
        let headPosX = snake[0].posX;
        let headPosY = snake[0].posY;
        let piecePosX = snake[piece].posX;
        let piecePosY = snake[piece].posY;
        if (headPosX == piecePosX && headPosY == piecePosY) {
            /*
            let peticion = fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                SCORE
            })
            })
            */
            finishGame(menu, lienzo);
            return clearInterval(currentGame);
        }
    };
};

export default collisions;