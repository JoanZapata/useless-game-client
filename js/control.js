
function keydown(event){
 console.log("Down");

 var direction = "idle";
 switch(event.keyCode){
    case 37: // left
    playerObj.x--;
    direction = "left";
    break;
    case 38: // top
    playerObj.y--;
    direction = "top";
    break;
    case 39: // right
    playerObj.x++;
    direction = "right";
    break;
    case 40: // bottom
    playerObj.y++;
    direction = "bottom";
    break;
  }
  displayPlayer(direction); 
  return false;
}

function keyup(event){
  console.log("Up");
  return false;
}
