class DrawingEllipse extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }

    onMouseDown(coord,event){
        var size = document.getElementById("myRange"); //get slider size
        var mySize = size.value;
        this.contextDraft.lineWidth = mySize;
        this.contextReal.fillStyle = "white";
        this.contextReal.strokeStyle = "black";
        this.origX = coord[0];
        this.origY = coord[1];
    }
    
    onDragging(coord,event){
        this.contextDraft.fillStyle = "white";
        this.contextDraft.strokeStyle = "black";
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // this.contextDraft.clearRect(this.origX - coord[0]-this.origX/2 - 1, this.origY - coord[0]-this.origX/2 - 1, coord[0]-this.origX/2 * 2 + 2, coord[0]-this.origX/2 * 2 + 2);
        var radiusX = Math.abs(coord[0]-this.origX/2)
        var radiusY = Math.abs(coord[1]-this.origY/2)
        this.contextDraft.ellipse(this.origX, this.origY, radiusX, radiusY, Math.PI / 4, 0, 2 * Math.PI);
        this.contextDraft.fill();
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextReal.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        var radiusX = Math.abs(coord[0]-this.origX/2)
        var radiusY = Math.abs(coord[1]-this.origY/2)
        this.contextReal.ellipse(this.origX, this.origY, radiusX, radiusY, Math.PI / 4, 0, 2 * Math.PI);
        //this.contextDraft.clearRect(this.origX - coord[0]-this.origX/2 - 1, this.origY - coord[0]-this.origX/2 - 1, coord[0]-this.origX/2 * 2 + 2, coord[0]-this.origX/2 * 2 + 2);
        var size = document.getElementById("myRange"); //get slider size
        var mySize = size.value;
        this.contextReal.lineWidth = mySize;
        this.contextReal.fill();
        this.contextReal.stroke();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}