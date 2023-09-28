
function drawStuff() {
    const myCanvas = document.getElementById("myCanvas");
    const painter = myCanvas.getContext("2d"); //דו מימד
  
    // Empty rectangle:
    painter.beginPath();
    painter.strokeStyle = "blue";
    painter.strokeRect(10, 10, 100, 100); // x, y, width, height
  
    // Empty circle:
    painter.beginPath();
    painter.strokeStyle = "red";
    painter.arc(300, 300, 100, 0, 2 * Math.PI); // x, y, radius, start angle, end angle (with radians)
    // painter.arc(300, 300, 100, 0, 180);
    // painter.arc(300, 300, 100, 0, Math.PI);  //start from angle 0 deg to 180 deg
    // painter.arc(300, 300, 100, Math.PI, 2 * Math.PI);
    painter.stroke();
  
    // Empty text:
    painter.beginPath();
    painter.strokeStyle = "green";
    painter.font = "40px Arial"; //size, font type
    painter.strokeText("Hello world", 20, 400); //text, x, y
  
    // Line:
    painter.beginPath();
    painter.strokeStyle = "grey";
    painter.moveTo(500, 400); // start position
    painter.lineTo(640, 480); // end position
    painter.stroke();
  
    // Full rectangle:
    painter.beginPath();
    painter.fillStyle = "yellow";
    painter.fillRect(10, 210, 100, 100); //x, y, width, height
  
    // Full circle:
    painter.fillStyle = "red";
    painter.beginPath();
    painter.arc(300, 100, 100, 0, 2 * Math.PI); // x, y, radius, start angle, end angle (with radians)
    painter.fill();
  
    // Full text:
    painter.beginPath();
    painter.fillStyle = "green";
    painter.font = "40px David"; //size, font type
    painter.fillText("Full world", 20, 200); //text, x, y
  }
  
  const myCanvas = document.getElementById("myCanvas");
  const painter = myCanvas.getContext("2d");
  
  function mouseDraw(event) {
    /*
    event buttons
    0- none pressed
    1- left click pressed
    2- right
     */
    // console.log("in mouseDraw");
    //   console.log(event);
  
    // Try this - not start from offset:
    // painter.lineTo(event.clientX, event.clientY);
    painter.lineTo(event.offsetX, event.offsetY);
    painter.stroke();
  }