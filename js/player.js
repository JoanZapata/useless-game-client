var playerLayer = new Kinetic.Layer();
var animations = {
  idle: generate(3, 0, 3, 0, 48, 48),
  bottom: generate(0, 0, 6, 0, 48, 48),
  top: generate(0, 1, 6, 1, 48, 48),
  right: generate(0, 2, 6, 2, 48, 48),
  left: generate(0, 3, 6, 3, 48, 48)
};

function generate(sx, sy, dx, dy, w, h){
  var array = new Array();
  var count = 0;
  for (var x = sx; x <= dx; x++) {
    for (var y = sy; y <= dy; y++) {
      array[count] = {
        x: x*w, y:y*h, width: w, height: h
      };
      count++;
    }
  }
  return array;
};


var playerObj = {
  x: 8, y: 0
}

var blob = null;
var playerImg = new Image();
playerImg.onload = function() {
  blob = new Kinetic.Sprite({
    x: 0,
    y: 0,
    scale: ZOOM,
    image: playerImg,
    animation: 'idle',
    animations: animations,
    frameRate: 10
  });

  displayPlayer();
  layer.add(blob);
  stage.add(playerLayer);
  blob.start();

  blob.setAnimation('bottom');

};
playerImg.src = 'img/spriteLink.png';

function displayPlayer(direction){
  if (blob == null)
    return;

  blob.setAnimation(direction);
  blob.setX((16*ZOOM/2) + playerObj.x * 16 * ZOOM);
  blob.setY(playerObj.y * 16 * ZOOM);
  playerLayer.draw();
}


displayPlayer("idle");