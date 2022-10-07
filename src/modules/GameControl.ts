import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
// import Button from "./Button";

class GameControl{
    snake:Snake
    food:Food
    scorePanel:ScorePanel
    Left:HTMLElement
    Right:HTMLElement
    Up:HTMLElement
    Down:HTMLElement
    // button:Button
    direction:string ='ArrowRight'
    isLive=true

    constructor(){
        this.food=new Food()
        this.snake=new Snake()
        this.scorePanel=new ScorePanel(15,2)
        // this.button=new Button()
        this.Left=document.getElementById('Left')!
        this.Right=document.getElementById('Right')!
        this.Up=document.getElementById('Up')!
        this.Down=document.getElementById('Down')!
        this.init()
    }

    init(){        
        //绑定键盘事件
        document.addEventListener('keydown',this.keydownHandler.bind(this))    
        document.getElementById('Left')!.addEventListener("click", this.turnLeft.bind(this))
        document.getElementById('Right')!.addEventListener("click", this.turnRight.bind(this))
        document.getElementById('Up')!.addEventListener("click", this.turnUp.bind(this))
        document.getElementById('Down')!.addEventListener("click", this.turnDown.bind(this))
        this.run()  
    }

    // 键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){
        // if(event.key==||event.key==||event.key==||event.key==)
        this.direction=event.key        
    }
    // 四个方向方法有待改善
    turnLeft(){
        this.direction="ArrowLeft" 
    }
    turnRight(){
        this.direction="ArrowRight" 
    }
    turnUp(){
        this.direction="ArrowUp" 
    }
    turnDown(){
        this.direction="ArrowDown" 
    }
    // 蛇移动
    run(){
        let X=this.snake.X
        let Y=this.snake.Y

        switch(this.direction){
            case "ArrowUp":
                Y-=10
                break
            case "ArrowDown":
                Y+=10
                break
            case "ArrowLeft":
                X-=10
                break
            case "ArrowRight":
                X+=10
                break
        }

        this.checkEat(X,Y)

        try{
            this.snake.X=X
            this.snake.Y=Y
        }catch(e){
            alert("SCORE: "+this.scorePanel.score+"        "+"LEVEL: "+this.scorePanel.level+"\n\n"+
                (e as any).message+'GAME OVER🐍')
            this.isLive=false
        }

        this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)
    }

    //检查蛇是否吃到食物
    checkEat(X:number,Y:number){
        if( X===this.food.X&&Y===this.food.Y ){
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }

}

export default GameControl