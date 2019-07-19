class DrawingTriangle extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;   
        // this.contextDraft = contextDraft;         
    }
    
    onMouseDown(coord,event){
        this.context.strokeStyle = "black";
        this.context.beginPath();
        this.origX = coord[0];
        this.origY = coord[1];
        this.context.moveTo(this.origX, this.origY);
        this.context.lineTo(coord[0]-100,coord[1]);
        this.context.lineTo(coord[0]-50,coord[1]-100);
        this.context.lineTo(coord[0],coord[1]);
        this.context.closePath();
        this.context.stroke();
    }
    // onMouseDown(coord,event){
        
    //     this.contextDraft.strokeStyle = "black";
    //     // this.contextReal.beginPath();
    //     // this.contextReal.moveTo(CoordX,CoordY);
    //     this.contextDraft.lineTo(coord[0],coord[1]);
    //     this.contextReal.closePath();
    // }
    // onDragging(coord,event){
    //     // this.contextDraft.fillStyle = "black";
    //     this.contextDraft.strokeStyle = "black";        
    //     this.contextDraft.lineTo(coord[0],coord[1]);
    //     this.contextDraft.lineTo(coord[1],coord[0]);
    //     this.contextDraft.closePath();
        // this.contextReal.fill(); 
        // this.contextDraft.stroke();
        // this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // this.contextDraft.fill(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        // this.contextDraft.stroke(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
    // }

    onMouseMove(){}
    // onMouseUp(coord){
    //     this.contextReal.fillStyle = "black";
    //     this.contextDraft.strokeStyle = "black";
        // this.contextDraft.lineTo(coord[0],coord[1]);
        // console.log(coord + 'drag 2');
        //this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // this.contextReal.fill(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        // this.contextDraft.stroke(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        // this.contextDraft.closePath();
        // this.contextReal.fill(); 
        // this.contextDraft.stroke(); 
    //}
    onMouseLeave(){}
    onMouseEnter(){}
    
}
