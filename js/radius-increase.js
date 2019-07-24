class Radius extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
var setWidth = function(newWidth){
    if (newWidth < minWidth)
        newWidth = minWidth;
     else if (newWidth > maxWidth)
        newWidth = maxWidth;
    this.context.lineWidth = radius*2;  
}

var minWidth = 0.5,
    maxWidth = 100,
    defaultWidth = 10,
    lineVal = document.getElementById('line-value'),
    inVal = document.getElementById('line-thick'),
    deVal = document.getElementById('line-thin');

