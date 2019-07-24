class DrawingLine extends PaintFunction{
    constructor(contextReal, selectedStrokeColour){
        super();
        this.context = contextReal;
        this.selectedStrokeColour = selectedStrokeColour;
    }

    onMouseDown(coord,event){
        this.context.strokeStyle = this.selectedStrokeColour;
        this.context.lineWidth = this.selectedLineWidth; //change size when slider value change
        this.context.lineJoin = "round";
        this.context.lineCap = "round"; // Smooth when draw thick line (end of lines are rounded)
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }

    onMouseUp(coord){
        // History
        history.push($('#canvas-real')[0].toDataURL());
    }
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.context.stroke();
    }
}
