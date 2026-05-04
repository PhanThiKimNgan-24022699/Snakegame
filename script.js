const canvas = document.getElementById("game");

const ctx = canvas.getContext("2d");

let snake=[
    {x:200,y:200}
];

let food={
    x:100,
    y:100
};

let direction="RIGHT";

let score=0;


document.addEventListener(
    "keydown",
    moveDirection
);


function moveDirection(e){

    if(e.key=="ArrowUp" && direction!="DOWN") direction="UP";

    if(e.key=="ArrowDown" && direction!="UP") direction="DOWN";

    if(e.key=="ArrowLeft" && direction!="RIGHT") direction="LEFT";

    if(e.key=="ArrowRight" && direction!="LEFT") direction="RIGHT";

}



function draw(){
    ctx.clearRect(0,0,400,400);
    for(let i=0;i<snake.length;i++){
        if(i==0){
            ctx.fillStyle="#228B22";
        }
        else{
            ctx.fillStyle="#32CD32";
        }

        ctx.beginPath();

        ctx.arc(
            snake[i].x+10, snake[i].y+10, 9, 0, Math.PI*2
        );

        ctx.fill();

        if(i==0){

            ctx.fillStyle="black";

            ctx.beginPath();

            ctx.arc( snake[i].x+6, snake[i].y+7, 2, 0, Math.PI*2);

            ctx.fill();

            ctx.beginPath();

            ctx.arc(snake[i].x+14, snake[i].y+7, 2, 0, Math.PI*2);

            ctx.fill();

        }

    }


    ctx.fillStyle="red";

    ctx.beginPath();

    ctx.arc(food.x+10, food.y+10, 8, 0, Math.PI*2);

    ctx.fill();

    let headX=snake[0].x;
    let headY=snake[0].y;


    if(direction=="UP")
    headY-=20;

    if(direction=="DOWN")
    headY+=20;

    if(direction=="LEFT")
    headX-=20;

    if(direction=="RIGHT")
    headX+=20;


    if(headX==food.x && headY==food.y){
        score+=100;
        document.getElementById("score").innerText=score;

        food.x=Math.floor(Math.random()*30)*20;

        food.y=Math.floor(Math.random()*30)*20;
    }
    else{
        snake.pop();
    }

    let newHead={
        x:headX,
        y:headY
    };

    snake.unshift(newHead);

}

setInterval(draw,200);
