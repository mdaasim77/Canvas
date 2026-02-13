// ============= GET CANVAS BY ID.

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

// ============= RECTANGLE CODE FILL WITH COLOR

// context.fillStyle = "skyblue";
// context.fillRect(0, 0, 200, 100);

// ============= LINE CODE USED X axis AND Y axis TO MOVE.

// context.moveTo(0, 0);
// context.lineTo(200, 100);
// context.stroke();

// ============= CIRCLE CODE USED X axis AND Y axis TO MOVE.

// context.beginPath();
// context.arc(300, 300, 100, 0, 2 * Math.PI);
// context.stroke();

// ============= FOR LOOP CODE FOR CANVAS.

// let x = 100;
// let y = 100;
// let w = 80;
// let h = 80;
// let g = w + 10;

// for (i = 0; i < 5; i++) {
//   for (j = 0; j < 5; j++) {
//     context.beginPath();
//     context.rect(x + g * i, y + g * j, w, h); // use variable instead of number is also a way
//     context.stroke();

//     // new concept in this we use condition statement

//     // if(i>0 && i<4){
//     //     context.beginPath();
//     //     context.rect(x+10+g*i,y+10+g*j,w-20,h-20);
//     //     context.stroke();
//     // }

//     // ============= using math.randon() fn we create random square in our grid layout.

//     // if (Math.random() > 0.5) {
//     //   context.beginPath();
//     //   context.rect(x + 10 + g * i, y + 10 + g * j, w - 20, h - 20);
//     //   context.stroke();
//     // }
//   }
// }

// ============= LINEAR GRADIENT COLOR.

let lg = context.createLinearGradient(0, 0, 200, 0);

lg.addColorStop(0, "red");
lg.addColorStop(1, "blue");

context.fillStyle = lg;
context.fillRect(50, 50, 200, 100 );
