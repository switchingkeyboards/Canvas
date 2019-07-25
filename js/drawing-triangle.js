class DrawingTriangle extends PaintFunction{
    constructor(contextReal, contextDraft, selectedStrokeColour, selectedFillColour){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.selectedStrokeColour = selectedStrokeColour;
        this.selectedFillColour = selectedFillColour;
    }

    onMouseDown(coord,event){
        this.contextDraft.fillStyle = this.selectedFillColour;
        this.contextDraft.strokeStyle = this.selectedStrokeColour;
        this.contextDraft.lineWidth = this.selectedLineWidth;
        this.origX = coord[0];
        this.origY = coord[1];
        // this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // this.contextDraft.beginPath();
        // console.log(this.origX, this.origY)
    }

    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.lineTo((coord[0]/2), coord[1]/2);
        this.contextDraft.closePath();
        this.contextDraft.stroke();
        this.contextDraft.fill();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        console.log(coord)
        this.contextReal.fillStyle = this.selectedFillColour;
        this.contextReal.strokeStyle = this.selectedStrokeColour;
        this.contextReal.lineWidth = this.selectedLineWidth;
        this.contextReal.beginPath();
        // this.contextReal.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.lineTo(coord[0], coord[1]);
        this.contextReal.lineTo(coord[0]/2, coord[1]/2);

        this.contextReal.closePath();
        this.contextReal.stroke();
        this.contextReal.fill();

        // History
        history.push($('#canvas-real')[0].toDataURL());
    }

    onMouseLeave(){}
    onMouseEnter(){}

}
