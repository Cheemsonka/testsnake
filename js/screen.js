class screen{
    constructor(game){
        this.game=game;
        this.top=0;
        this.bottom=0;
        this.left=0;
        this.right=0;
    }
    
    update() {
        this.top=this.game.snake.y - (SCREEN_HEIGHT /2);
        this.bottom=this.game.snake.y + (SCREEN_HEIGHT /2);
        this.left=this.game.snake.x - (SCREEN_WIDTH /2);
        this.right=this.game.snake.x + (SCREEN_WIDTH /2);
    }

    drawCircle(pos, styleName){
        let styles = {};

        //style for snake
        styles['snack']={
            borderColor: 'red',
            color: '#F65A5A',
            width: 20
        };

        //style for shadow
        styles['shadow']={
            borderColor: 'rgba(0,0,0,0.1)',
            color: 'rgba(0,0,0,0.1)',
            width: 28
        };

        styles['eye']={
            borderColor: 'red',
            color: 'white',
             width: 10
        }
        
        styles['pupil']={
            borderColor: 'black',
            color: 'black',
             width: 3
        }

    
        let StyleProperties = styles[styleName];


       
        this.game.ctx.beginPath();
        this.game.ctx.arc(
            pos.x-this.left,
            pos.y-this.top,
            StyleProperties.width,
            0,
            Math.PI * 2 
        );
        this.game.ctx.fillStyle= StyleProperties.color;
        this.game.ctx.fill();
        this.game.ctx.strokeStyle = StyleProperties.borderColor;
        this.game.ctx.stroke();

    }

}