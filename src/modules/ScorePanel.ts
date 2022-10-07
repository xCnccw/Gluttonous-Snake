class ScorePanel{
    score=0
    level=1
    scoreEle:HTMLElement
    levelEle:HTMLElement

    maxLevel:number;
    upScore:number

    //分数和等级所在元素，在构造函数中进行初始化
    constructor(maxLevel:number=10,upScore:number=10){//没值的时候默认为10
        this.scoreEle=document.getElementById('score')!
        this.levelEle=document.getElementById('level')!
        this.maxLevel=maxLevel
        this.upScore=upScore
    }
    //加分
    addScore(){
        this.scoreEle.innerHTML=++this.score+''
        //判断分数是多少
        if(this.score%this.upScore===0){
            this.levelUp()
        }
    }
    //等级提升
    levelUp(){
        if(this.level<this.maxLevel){
            this.levelEle.innerHTML=++this.level+''
        }
    }
}

export default ScorePanel