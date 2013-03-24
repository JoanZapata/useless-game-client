
const ZOOM = 2;

// Create the stage
var stage = new Kinetic.Stage({
  container: 'container',
  width: 512 * ZOOM,
  height: 512 * ZOOM
});

// Background layer
var layer = new Kinetic.Layer();
var imageObj = new Image();
imageObj.onload = function() {
  var background = new Kinetic.Image({
    x: 0,
    y: 0,
    image: imageObj,
    width: 512 * ZOOM,
    height: 512 * ZOOM
  });
  layer.add(background);
  stage.add(layer);
};
imageObj.src = 'img/map.png';