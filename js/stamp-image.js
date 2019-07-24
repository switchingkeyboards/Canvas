class StampGrizz extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
        // this.namedVariable = 'name';
    }

    onMouseDown(coord, event) {
        // console.log(this.namedVariable)

        var img = new Image();
        img.src = './img/grizz.png';
        // this.context.drawImage(img, coord[0], coord[1]);
        
        img.onload =  () => {  //arrow function: "this" in the function refers to "this" in class
        // console.log('happy')
            this.context.drawImage(img, coord[0], coord[1], 150, 150);
        // console.log('sad')
            }                //let img load first, the draw

////////^^^^^ this part same as above ^^^^^^////////////
        // img.onload = (function () {
        //     console.log('happy')
        //     this.context.drawImage(img, coord[0], coord[1]);
        //     console.log('sad')
        // }).bind(this);
    }
    onDragging(coord, event){
        var img = new Image();
        img.src = './img/grizz.png';
        img.onload =  () => {  
            this.context.drawImage(img, coord[0], coord[1], 150, 150);
        }
    }
    onMouseUp() {}
}

class StampPan extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }
    onMouseDown(coord, event) {
        var img = new Image();
        img.src = './img/pan.png';
        img.onload =  () => {  
            this.context.drawImage(img, coord[0], coord[1], 150, 150);
        }
    }
    onDragging(coord, event){
        var img = new Image();
        img.src = './img/pan.png';
        img.onload =  () => {  
            this.context.drawImage(img, coord[0], coord[1], 150, 150);
        }
    }
    onMouseUp(){}
}

class StampIce extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }
    onMouseDown(coord, event) {
        var img = new Image();
        img.src = './img/ice.png';
        img.onload =  () => {  
            this.context.drawImage(img, coord[0], coord[1], 150, 150);
        }
    }
    onDragging(coord, event){
        var img = new Image();
        img.src = './img/ice.png';
        img.onload =  () => {  
            this.context.drawImage(img, coord[0], coord[1], 150, 150);
        }
    }
    onMouseUp() {}
}

class StampStack extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }
    onMouseDown(coord, event) {
        var img = new Image();
        img.src = './img/stack.png';
        img.onload =  () => {  
            this.context.drawImage(img, coord[0], coord[1], 150, 150);
        }
    }
    onDragging(coord, event){
        var img = new Image();
        img.src = './img/stack.png';
        img.onload =  () => {  
            this.context.drawImage(img, coord[0], coord[1], 150, 150);
        }
    }
    onMouseUp() {}
}

class StampBaby extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }
    onMouseDown(coord, event) {
        var img = new Image();
        img.src = './img/baby.png';
        img.onload =  () => {  
            this.context.drawImage(img, coord[0], coord[1], 170, 170);
        }
    }
    onDragging(coord, event){
        var img = new Image();
        img.src = './img/baby.png';
        img.onload =  () => {  
            this.context.drawImage(img, coord[0], coord[1], 170, 170);
        }
    }
    onMouseUp() {}
}

class StampSleep extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }
    onMouseDown(coord, event) {
        var img = new Image();
        img.src = './img/sleep.png';
        img.onload =  () => {  
            this.context.drawImage(img, coord[0], coord[1], 160, 160);
        }
    }
    onDragging(coord, event){
        var img = new Image();
        img.src = './img/sleep.png';
        img.onload =  () => {  
            this.context.drawImage(img, coord[0], coord[1], 160, 160);
        }
    }
    onMouseUp() {}
}