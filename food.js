export default class Food {
/* 
    属性:
        1.地圖
        2. 食物
        3.位置坐标 定位食物的位置  
    方法:
        1.渲染食物
        2.随机生成食物的位置


*/
    constructor(selector) {
        //地图
        this.map = document.querySelector(selector);
        //食物
        this.food = document.createElement('div');
        this.food.className = 'food';
        this.map.appendChild(this.food);
        //坐标
        this.x = 0;
        this.y = 0;
        this.changePosition()
    }

    changePosition() {
        //随机生成食物的位置
        // console.log(this.map.clientWidth);// 1000
        // console.log(this.map.clientHeight);// 600 
        // 1000/20 = 50
        // 600/20 = 30
        const rowX = this.map.clientWidth / 20
        const rowY = this.map.clientHeight / 20
        // left top 随机数  
        const posX = Math.floor(Math.random() * rowX)* 20;
        const posY = Math.floor(Math.random() * rowY)* 20;

        //给坐标赋值
        this.x = posX;
        this.y = posY;
        //给元素赋值
        this.food.style.left = this.x  + 'px';
        this.food.style.top = this.y  + 'px';

        
    }
}