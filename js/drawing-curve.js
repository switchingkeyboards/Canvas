class DrawingCurve extends PaintFunction{

    constructor(contextReal,contextDraft,selectedStrokeColour){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.selectedStrokeColour = selectedStrokeColour;

        this.originalX = 0;
        this.originalY = 0;
        this.newX = 0;
        this.newY = 0;
        this.mousedownCounter = 0;
    }

    onMouseDown(coord,event){
        if(this.mousedownCounter === 0 ){
            this.origX = coord[0];
            this.origY = coord[1];
            this.originalX = this.origX;
            this.originalY = this.origY;
            console.log(this.mousedownCounter);
            console.log('Origin Location:' + this.originalX +','+ this.originalY);
        }
    }

    onDragging(coord,event){
        this.contextDraft.strokeStyle = this.selectedStrokeColour;
        this.contextDraft.lineWidth = this.selectedLineWidth;

        if(this.mousedownCounter === 0 ){
            this.contextDraft.beginPath();
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.moveTo(this.originalX,this.originalY);
            this.contextDraft.lineTo(coord[0],coord[1]);
            this.contextDraft.stroke();
            this.newX = coord[0];
            this.newY = coord[1];
            console.log('New Location:' + this.newX +','+ this.newY);
            console.log(this.mousedownCounter);

            this.contextDraft.beginPath();
            this.contextDraft.fillRect((coord[0]+this.originalX)/2, (coord[1]+this.originalX)/2, 10, 10);
            this.contextDraft.stroke();
            this.contextDraft.fillStyle = 'lightgrey';

        }

        if(this.mousedownCounter === 1 ){
            this.contextDraft.beginPath();
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.moveTo(this.originalX,this.originalY);
            this.contextDraft.quadraticCurveTo(coord[0], coord[1], this.newX, this.newY);
            this.contextDraft.stroke();
            console.log(this.mousedownCounter);

            this.contextDraft.beginPath();
            this.contextDraft.fillRect(coord[0], coord[1], 10, 10);
            this.contextDraft.stroke();




        }
    }

    onMouseMove(){


    }

    onMouseUp(coord){

        if(this.mousedownCounter === 0){
            this.mousedownCounter = 1;
            console.log(this.mousedownCounter);
        } else {
            this.contextReal.strokeStyle = this.selectedStrokeColour;
            this.contextReal.lineWidth = this.selectedLineWidth;

            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextReal.beginPath();

            this.contextReal.moveTo(this.originalX,this.originalY);
            this.contextReal.quadraticCurveTo(coord[0], coord[1], this.newX, this.newY);
            this.contextReal.stroke();



            this.mousedownCounter = 0;
            console.log(this.mousedownCounter);




        }




        // History
        history.push($('#canvas-real')[0].toDataURL());

    }



    onMouseLeave(){}
    onMouseEnter(){}



}
