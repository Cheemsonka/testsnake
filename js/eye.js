const EYE_DISTANCE= 18;
const EYE_ANGLE = 0.9;
const PUPIL_DISTANCE = 6;

class eye{
    constructor(snake){
        this.snake = snake;
    }

    update(){
        
    }

    draw(){
       let eye1Pos={
          x: this.snake.x + Math.cos(this.snake.angle-EYE_ANGLE)*EYE_DISTANCE,
          y: this.snake.y + Math.sin(this.snake.angle-EYE_ANGLE)*EYE_DISTANCE
       }

        this.snake.game.screen.drawCircle(eye1Pos,'eye');

        //
        let eye2Pos={
            x: this.snake.x + Math.cos(this.snake.angle+EYE_ANGLE)*EYE_DISTANCE,
            y: this.snake.y + Math.sin(this.snake.angle+EYE_ANGLE)*EYE_DISTANCE
         }
  
          this.snake.game.screen.drawCircle(eye2Pos,'eye');
          let pupil1Pos = {
            x: eye1Pos.x + Math.cos(this.snake.angle) * PUPIL_DISTANCE,
            y: eye1Pos.y + Math.sin(this.snake.angle) * PUPIL_DISTANCE
        };

        // Vị trí đồng tử cho mắt 2
        let pupil2Pos = {
            x: eye2Pos.x + Math.cos(this.snake.angle) * PUPIL_DISTANCE,
            y: eye2Pos.y + Math.sin(this.snake.angle) * PUPIL_DISTANCE
        };

        // Vẽ đồng tử
        this.snake.game.screen.drawCircle(pupil1Pos, 'pupil');
        this.snake.game.screen.drawCircle(pupil2Pos, 'pupil');
    }
}