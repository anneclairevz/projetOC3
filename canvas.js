// transposer canvas en POO

class Canvas {
    constructor() {
        this.canvas = document.getElementById('canvas');
        console.log(this.canvas);
        this.context = this.canvas.getContext('2d');
        this.context.strokeStyle = "#222222";
        this.context.lineWidth = 2;
        this.drawing = false;
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

        /*window.requestAnimFrame = (function (callback) {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                }.bind(this);
        }.bind(this))();
        (function drawLoop() {
            requestAnimFrame(drawLoop);
            this.renderCanvas();
        }.bind(this))();*/


        /*  this.canvas.addEventListener("touchstart", function (e) {
      this.mousePos = this.getTouchPos(this.canvas, e);
      let touch = e.touches[0];
      let mouseEvent = new MouseEvent("mousedown", {
          clientX: touch.clientX,
          clientY: touch.clientY
      });
      this.canvas.dispatchEvent(mouseEvent);
  }, false);
  this.canvas.addEventListener("touchend", function (e) {
      let mouseEvent = new MouseEvent("mouseup", {});
      this.canvas.dispatchEvent(mouseEvent);
  }, false);
  this.canvas.addEventListener("touchmove", function (e) {
      let touch = e.touches[0];
      let mouseEvent = new MouseEvent("mousemove", {
          clientX: touch.clientX,
          clientY: touch.clientY
      });
      this.canvas.dispatchEvent(mouseEvent);
  }, false);*/

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

}









/*let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
context.strokeStyle = "#222222";
context.lineWidth = 2;


let drawing = false;
let mousePos = {
    x: 0,
    y: 0
};
let lastPos = mousePos;*/

/*
canvas.addEventListener("mousedown", function (e) {
    drawing = true;
    lastPos = getMousePos(canvas, e);
}, false);
canvas.addEventListener("mouseup", function (e) {
    drawing = false;
}, false);
canvas.addEventListener("mousemove", function (e) {
    mousePos = getMousePos(canvas, e);
}, false);
*/

// position de la souris dans le canvas

/*function getMousePos(canvasDom, mouseEvent) {
    let rect = canvasDom.getBoundingClientRect();
    return {
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top
    };
}*/



// Get a regular interval for drawing to the screen

/*
window.requestAnimFrame = (function (callback) {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimaitonFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
*/


// dessiner ds le canvas
/*
function renderCanvas() {
    if (drawing) {
        this.context.moveTo(this.lastPos.x, lastPos.y);
        context.lineTo(mousePos.x, mousePos.y);
        context.stroke();
        lastPos = mousePos;
    }
}*/

// Allow for animation

/*(function drawLoop() {
    requestAnimFrame(drawLoop);
    renderCanvas();
})();*/

// mise en place du tactile pr version mobile, tablettes

/*canvas.addEventListener("touchstart", function (e) {
    mousePos = getTouchPos(canvas, e);
    let touch = e.touches[0];
    let mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchend", function (e) {
    let mouseEvent = new MouseEvent("mouseup", {});
    canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchmove", function (e) {
    let touch = e.touches[0];
    let mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}, false);*/

// Get the position of a touch relative to the canvas

/*function getTouchPos(canvasDom, touchEvent) {
    let rect = canvasDom.getBoundingClientRect();
    return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top
    };
}*/

// Prevent scrolling when touching the canvas
/*
document.body.addEventListener("touchstart", function (e) {
    if (e.target == canvas) {
        e.preventDefault();
    }
}, false);
document.body.addEventListener("touchend", function (e) {
    if (e.target == canvas) {
        e.preventDefault();
    }
}, false);
document.body.addEventListener("touchmove", function (e) {
    if (e.target == canvas) {
        e.preventDefault();
    }
}, false);*/
