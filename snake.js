export default class Snake {
    //属性 
    // 1. 地图 
    constructor(selector) {

        this.map = document.querySelector(selector);
         // 2. 蛇
        this.snake = []; // 一条蛇由多个小方块组成

        // 3. 方向 
        this.direction = 'right'; // 默认向右走

        this.createSnake();
        // this.move();
    }
    // 创建一个方块 
    createOne() {
        
        const head = this.snake[0];

        // 没有头创建头 有头创建身体
        if(head !== undefined){
            head.className = 'body';
        }

        let div = document.createElement('div');
        div.className = 'head';
        this.snake.unshift(div);

        const pos = {x:0,y:0};
        
        // 如果有头 按照现在的头的位置来创建身体
        if(head !== undefined){
            // 方向向右  头的left + 20  top不变
            // 方向向左  头的left - 20  top不变
            // 方向向上  头的top - 20   left不变
            // 方向向下  头的top + 20   left不变

            //获取原来的投的位置
            // 相对于定位的父级的位置
            // offsetLeft  offsetTop
            pos.x = head.offsetLeft;
            pos.y = head.offsetTop;

            switch(this.direction){
                case 'right':
                    pos.x += 20;
                    break;
                case 'left':
                    pos.x -= 20;
                    break;
                case 'top':
                    pos.y -= 20;
                    break;
                case 'bottom':
                    pos.y += 20;
                    break;
            }


        }
        div.style.left = pos.x + 'px';
        div.style.top  =  pos.y + 'px';
        this.map.appendChild(div);

    }

    createSnake() {
        // 创建一条蛇  五个格子  
        // 需要先创建一个格子 
        for(let i=0;i<5;i++){
            this.createOne();
        }
        // 把蛇放到地图上
        
        
    }

    // 移动
    move(){
        // 先把 this.snake中的最后一项删除
        const body = this.snake.pop();
        // 数组删除 页面上的元素也要删除
        // remove()  删除自己
        body.remove(); 
        //再创建一个头 就是移动的过程 
        this.createOne();

    }
    // 要么true false 
    isDie(){
        // 撞墙是头撞墙  先拿到头 
        const head = this.snake[0];
        if(head.offsetLeft<0 ||
             head.offsetTop <0 || 
             head.offsetLeft >= this.map.clientWidth || 
             head.offsetTop >= this.map.clientHeight){
            return true;
        }
        return false;

        }
    // 吃食物

    isEat(foodX,foodY){
        // 拿到蛇头 

        // 判断 蛇头的位置和食物的位置是否重合
        const head = this.snake[0];
        if(head.offsetLeft === foodX && head.offsetTop === foodY){
            return true;
        }
        return false;

    }
    

   

    //方法:
    // 1. 创建一条蛇  会越来越大 
    // 2. 移动  
    // 3. 吃食物
    // 4. 撞墙 

}