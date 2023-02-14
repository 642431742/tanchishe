import Food from "./food.js";
import Snake from "./snake.js";

export default class Game{
    // 属性     
    // 1. 地图
    // 2. 蛇的对象
    // 3. 食物的对象
    // 4. 存放定时器
    // 5. 积分  
    // 6. 级别  (蛇越长 速度越快)
    constructor (selector){
        this.map = document.querySelector('#map');
        this.snake = new Snake(selector);
        this.food = new Food(selector);
        this.timer = 0; //定时器
        this.score = 0; //积分
        this.level = 1; //级别
        // this.Init();
    }
    // 方法 

    // 1. 开始游戏
    Init(){
        
        this.timer = setInterval(()=>{

                    // 1 让蛇走一步 
                this.snake.move();
                // 2 判断蛇是否吃到食物
                if(this.snake.isEat(this.food.x,this.food.y)){
                    // 吃到食物 创建一个头 
                    this.snake.createOne();
                    // 让食物重新随机生成位置 
                    this.food.changePosition();
                    // 积分变化
                    this.ChangeScore();
                }
                // 吃到食物 创建一个头 
                // 让食物重新随机生成位置 
                // 积分变化
                // 是否出界
                if(this.snake.isDie()){
                    // 游戏结束
                    clearInterval(this.timer);
                    alert('游戏结束');
                    return;
                }

        },120-this.level*5);



    }
    // 2. 暂停游戏  
    Pause(){
        clearInterval(this.timer);
    }
    // 3. 重新开始 
    Restart(){
        //刷新网页
        window.location.reload();
    }

    // 4. 积分变化 
    ChangeScore(){
        this.score++;
        this.level++;
    }

    // 5. 键盘控制方向 
    ChangeDir(dir){
        this.snake.direction  = dir;
    } 

}