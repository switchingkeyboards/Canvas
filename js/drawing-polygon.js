class DrawingPolygon extends PaintFunction{
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        this.context.fillStyle = "white";
        this.context.strokeStyle = "black";
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
    }
    
    onDragging(coord,event){
        // var coordinates = []
        // coordinates.push({x:mouseX, y:mouseY});
        // for (index = 1; index < coordinates.length; index++){
        //     this.context.lineTo(coordinates[index].x, coordinates[index].y)
        // };
        // if (coordinates.length > 10){
        //     return;
        // };
        // this.contextDraft.closePath();
        // this.contextDraft.fill();
        // this.contextDraft.stroke();
        this.contextDraft.strokeStyle = "black";        
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.lineTo(coord[1],coord[0]);
        this.contextDraft.closePath();
        // this.contextReal.fill(); 
        // this.contextDraft.stroke();
        // this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // this.contextDraft.fill(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        // this.contextDraft.stroke(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextReal.fillStyle = "black";
        this.contextDraft.strokeStyle = "black";
        this.context.lineTo(coordinates[index].x, coordinates[index].y)
        // this.contextDraft.lineTo(coord[0],coord[1]);
        // console.log(coord + 'drag 2');
        //this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // this.contextReal.fill(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        // this.contextDraft.stroke(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        this.contextReal.closePath();
        this.contextReal.fill(); 
        this.contextReal.stroke(); 
    }
    onMouseLeave(){}
    onMouseEnter(){}
    
}
