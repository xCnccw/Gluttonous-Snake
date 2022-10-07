class Button{
    Left:HTMLElement
    Right:HTMLElement
    Up:HTMLElement
    Down:HTMLElement
    element:HTMLElement
    constructor(){
        this.element=document.getElementById('Button')!
        this.Left=document.getElementById('Left')!
        this.Right=document.getElementById('Right')!
        this.Up=document.getElementById('Up')!
        this.Down=document.getElementById('Down')!
        this.init()
    }
    init(){
        //绑定键盘事件
        document.addEventListener('click',this.buttonclick.bind(this))
    }
    Left(){
        
    }
    

}

export default Button