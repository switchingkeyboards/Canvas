class DrawingCircle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }

    onMouseDown(coord,event){
        this.contextReal.fillStyle = "white";
        this.contextReal.strokeStyle = "black";
        this.contextDraft.lineWidth = 5;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    
    onDragging(coord,event){
        this.contextDraft.fillStyle = "white";
        this.contextDraft.strokeStyle = "black";
        this.contextReal.lineWidth = 5;
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // this.contextDraft.clearRect(this.origX - coord[0]-this.origX/2 - 1, this.origY - coord[0]-this.origX/2 - 1, coord[0]-this.origX/2 * 2 + 2, coord[0]-this.origX/2 * 2 + 2);
        this.contextDraft.arc(this.origX, this.origY, Math.abs(coord[1]-this.origY/2), 0, 2*Math.PI);
        this.contextDraft.fill();
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextReal.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        //this.contextDraft.clearRect(this.origX - coord[0]-this.origX/2 - 1, this.origY - coord[0]-this.origX/2 - 1, coord[0]-this.origX/2 * 2 + 2, coord[0]-this.origX/2 * 2 + 2);
        this.contextReal.arc(this.origX, this.origY, Math.abs(coord[1]-this.origY/2), 0, 2*Math.PI);
        this.contextReal.fill();
        this.contextReal.stroke();
        // History
        history.push($('#canvas-real')[0].toDataURL());
        
    }
    onMouseLeave(){}
    onMouseEnter(){}
}