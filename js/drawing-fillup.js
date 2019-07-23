class DrawingStraightLine extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }

    /* 
    http://richmond.com/app/Widgetes/colorfill/nutzy-colorfill.html
    -   I want to fill up the area
    -   I need to identify the color of current area
    -  contextReal.getImageData(0, 0, 1, 1); this is how you capture data
    var imageData = contextReal.getImageData(0, 0, 100, 100);
contextReal.getImageData(0, 0, 2, 2);
    imageData.data= [203,53,148,255]

    var imageData = context.getImageData(0,0,canvasWidth,canvasHeight);

    var imageData = contextReal.getImageData(0, 0, 3, 5);

    imageData.data = [
  255,255,255,255, 255,255,255,255, 0,0,0,255, 
  255,255,255,255, 255,255,255,255, 255,255,255,255, 
  0,0,0,255,       255,255,255,255, 255,255,255,255, 
  255,255,255,255, 255,255,255,255, 255,255,255,255, 
  255,255,255,255, 255,255,255,255, 255,255,255,255]



        I need something to check the current color
    -   It need to search if this area is the same color
        I need something to do searching
    -   It fills up the color, if the current area color is the same
    




    */





    
    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.strokeStyle = "green";
        this.contextDraft.lineWidth = 5;
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.strokeStyle = "green";
        this.contextReal.lineWidth = 5;
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.stroke();
        // History
        history.push($('#canvas-real')[0].toDataURL());
        //let currentHistoryIndex = history.length;

        //console.log(currentHistoryIndex);
        // console.log($('#canvas-real')[0].toDataURL());
        // console.log(history);

    }
    onMouseLeave(){}
    onMouseEnter(){}
}
