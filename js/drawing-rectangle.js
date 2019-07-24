class DrawingRectangle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        // this.contextReal.fillStyle = "white";
        // this.contextReal.strokeStyle = "black";
        this.origX = coord[0];
        this.origY = coord[1];
        
    }
    onDragging(coord,event){
        //console.log(coord)
        var size = document.getElementById("myRange"); //get slider size
        var mySize = size.value;
        this.contextDraft.lineWidth = mySize; 
        this.contextDraft.fillStyle = "white";
        this.contextDraft.strokeStyle = "black";
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.fillRect(this.origX,this.origY,(coord[0]- this.origX),(coord[1] - this.origY))
        this.contextDraft.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextReal.fillStyle = "blue";
        this.contextReal.strokeStyle = "black";
        var size = document.getElementById("myRange"); //get slider size
        var mySize = size.value;
        this.contextReal.lineWidth = mySize;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        this.contextReal.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
