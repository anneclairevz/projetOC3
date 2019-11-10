
// transposer canvas en POO

class Canvas {
    constructor() {
        this.canvas = document.getElementById('canvas');
        console.log(this.canvas);
        this.context = this.canvas.getContext('2d');
        this.context.strokeStyle = "#222222";
        this.context.lineWidth = 2;
        this.drawing = false;
        this.filled = false;
        this.mousePos = {
            x: 0,
            y: 0
        };

        this.lastPos = this.mousePos;
        this.touchPos = {
            x: 0,
            y: 0
        };
        this.lastTouchPos = this.touchPos;
        this.Init(); //La classe appelle une de ses propres fonctions.
    }
    Init() {
        this.canvas.addEventListener("mousedown", this.startDrawing.bind(this));
        this.canvas.addEventListener("mouseup", this.endDrawing.bind(this));
        this.canvas.addEventListener("mousemove", this.moveDrawing.bind(this));
        this.canvas.addEventListener("touchstart", this.startTouchDrawing.bind(this));
        this.canvas.addEventListener("touchend", this.endTouchDrawing.bind(this));
        this.canvas.addEventListener("touchleave", this.endTouchDrawing.bind(this));
        this.canvas.addEventListener("touchmove", this.moveTouchDrawing.bind(this));

    }
    moveDrawing(e) {
        this.mousePos = this.getMousePos(this.canvas, e);
        this.renderCanvas();
    }

    startDrawing(e) { //Je capture l evenement de la souris 
        this.drawing = true; //true commence à dessiner
        this.lastPos = this.getMousePos(this.canvas, e); // recupere la position de la souris
        this.renderCanvas(); //fonction de dessin 
    }
    endDrawing(e) {
        this.drawing = false;
    }

    //fonction tracé sur mobile

    startTouchDrawing(e) {
        this.drawing = true;
        this.lastPos = this.getTouchPos(this.canvas, e);
        console.log(this.lastPos);
        this.renderCanvas();
    }

    endTouchDrawing() {
        this.drawing = false;
    }

    moveTouchDrawing(e) {
        this.mousePos = this.getTouchPos(this.canvas, e);
        console.log(this.drawing);
        this.renderCanvas();
    }

    renderCanvas() {
        if (this.drawing) {
            this.context.moveTo(this.lastPos.x, this.lastPos.y);
            this.context.lineTo(this.mousePos.x, this.mousePos.y);
            this.context.stroke();
            this.lastPos = this.mousePos;
            this.filled = true;
        }

    }

    getMousePos(canvasDom, mouseEvent) {
        let rect = canvasDom.getBoundingClientRect();
        return {
            x: mouseEvent.clientX - rect.left,
            y: mouseEvent.clientY - rect.top
        };
    }

    getTouchPos(canvasDom, touchEvent) {
        let rect = canvasDom.getBoundingClientRect();
        return {
            x: touchEvent.touches[0].clientX - rect.left,
            y: touchEvent.touches[0].clientY - rect.top
        };

    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.beginPath();
    }
}
