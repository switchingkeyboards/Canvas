class DrawingEllipse extends PaintFunction{
    constructor(contextReal, contextDraft, selectedStrokeColour, selectedFillColour){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.selectedStrokeColour = selectedStrokeColour;
        this.selectedFillColour = selectedFillColour;
    }

    onMouseDown(coord,event){
        this.contextReal.fillStyle = this.selectedFillColour;
        this.contextReal.strokeStyle = this.selectedStrokeColour;
        this.contextReal.lineWidth = this.selectedLineWidth;
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord,event){
        this.contextDraft.fillStyle = this.selectedFillColour;
        this.contextDraft.strokeStyle = this.selectedStrokeColour;
        this.contextDraft.lineWidth = this.selectedLineWidth;
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
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
        this.contextReal.lineWidth = this.selectedLineWidth;
        this.contextReal.fill();
        this.contextReal.stroke();

        history.push($('#canvas-real')[0].toDataURL());
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
