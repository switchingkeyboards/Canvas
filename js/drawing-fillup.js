class BucketFill extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }

    /* 
    http://richmond.com/app/Widgetes/colorfill/nutzy-colorfill.html
    -   I want to fill up the area
    -   I need to identify the color of current area
    -  var result = contextReal.getImageData(0, 0, 50, 50); this is how you capture data
    - ImageData
    - filling color: 
      var imageData = contextReal.getImageData(0, 0, 100, 100);
      contextReal.putImageData(imageData, 600, 600);
    
contextReal.getImageData(0, 0, 2, 2);
    imageData.data= [203,53,148,255]

    contextReal.putImageData(imageData, 600, 600);


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
        var imgData = contextReal.getImageData(coord[0], coord[1], 1, 1);
        console.log(this.origX);
        console.log(this.origY);
        console.log(imgData.data);
    }
    // onDragging(coord,event){
    //     this.contextDraft.strokeStyle = "green";
    //     this.contextDraft.lineWidth = 5;
    //     this.contextDraft.beginPath();
    //     this.contextDraft.moveTo(this.origX,this.origY);
    //     this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
    //     this.contextDraft.lineTo(coord[0],coord[1]);
    //     this.contextDraft.stroke();
    // }

    onMouseUp(coord){

        /* 
        1)  Now, I can capture the color of mousedown
        2)  Go to the top of that column and put a mark-1
        3)  check left and right and put a mark-2
        4)  paint color on mark-1
        




        */
        var imgData = contextReal.getImageData(coord[0], coord[1], 1, 1);
        var r = imgData.data[0];
        var g = imgData.data[1];
        var b = imgData.data[2];
        var a = imgData.data[3];

        var nextImgData = contextReal.getImageData(coord[0], coord[1]+1, 1, 1);
        var nextr = nextImgData.data[0];
        var nextg = nextImgData.data[1];
        var nextb = nextImgData.data[2];
        var nexta = nextImgData.data[3];
        
        while(r == nextr && g == nextg && b == nextb && a == nexta){
            var i = 1;
            
        };




        // this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // this.contextReal.strokeStyle = "green";
        // this.contextReal.lineWidth = 5;
        // this.contextReal.beginPath();
        // this.contextReal.moveTo(this.origX,this.origY);
        // this.contextReal.lineTo(coord[0],coord[1]);
        // this.contextReal.stroke();
        // // History
        // history.push($('#canvas-real')[0].toDataURL());
  

    }
    onMouseLeave(){}
    onMouseEnter(){}
}
