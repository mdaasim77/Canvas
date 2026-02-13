const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "skyblue";
    context.fillRect(0, 0, width, height);
    let x = 100;
    let y = 100;
    let w = 80;
    let h = 80;
    let g = w + 10;

    for (i = 0; i < 5; i++) {
      for (j = 0; j < 5; j++) {
        context.beginPath();
        context.rect(x + g * i, y + g * j, w, h); // use variable instead of number is also a way
        context.stroke();

        // new concept in this we use condition statement

        // if(i>0 && i<4){
        //     context.beginPath();
        //     context.rect(x+10+g*i,y+10+g*j,w-20,h-20);
        //     context.stroke();
        // }

        // ============= using math.randon() fn we create random square in our grid layout.

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + 10 + g * i, y + 10 + g * j, w - 20, h - 20);
          context.stroke();
        }
      }
    }
  };
};
canvasSketch(sketch, settings);
