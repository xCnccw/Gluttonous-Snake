class Snake{
    //表示设的元素
    head:HTMLElement
    bodies:HTMLCollection
    element:HTMLElement

    constructor(){
        this.element=document.getElementById('snake')!
        this.head=document.querySelector('#snake>div')!
        this.bodies=this.element.getElementsByTagName('div')
    }
    
    //蛇头的坐标
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }

    set X(value:number){
        //新值和旧值相同，则直接返回不再修改
        if(this.X===value){
            return
        }
        if(value<0||value>290){
            //判断蛇撞墙了
            throw new Error('蛇撞墙了！')
        }
        //禁止水平方向掉头
        if(this.bodies[1]&&(this.bodies[1]as HTMLElement).offsetLeft===value){
            if(value>this.X){
                value=this.X-10
            }else{
                value=this.X+10
            }
        }

        this.moveBody()
        this.head.style.left=value+'px'
        this.checkHeadBody()
    }
    set Y(value:number){
        //新值和旧值相同，则直接返回不再修改
        if(this.Y===value){
            return
        }
        if(value<0||value>290){
            //判断蛇撞墙了
            throw new Error('蛇撞墙了！')
        }
        //禁止垂直方向掉头
        if(this.bodies[1]&&(this.bodies[1]as HTMLElement).offsetTop===value){
            if(value>this.Y){
                value=this.Y-10
            }else{
                value=this.Y+10
            }
        }

        this.moveBody()
        this.head.style.top=value+'px'
        this.checkHeadBody()
    }

    // 蛇增加身体
    addBody(){
        this.element.insertAdjacentHTML('beforeend',"<div></div>")
    }
    moveBody(){
        for(let i=this.bodies.length-1;i>0;i--){
            // 获取前边的身体位置
            let X=(this.bodies[i-1] as HTMLElement).offsetLeft
            let Y=(this.bodies[i-1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left=X+'px';
            (this.bodies[i] as HTMLElement).style.top=Y+'px';
        }
    }
    //检查身体有没有相撞
    checkHeadBody(){
        for(let i=1;i<this.bodies.length;i++){
            let bd=this.bodies[i] as HTMLElement
            if(this.X===bd.offsetLeft&&this.Y===bd.offsetTop){
                throw new Error('真的菜！撞到自己了！')
            }
        }
    }
}

export default Snake