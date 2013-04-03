
const ZOOM = 1;
var elem = (document.compatMode === "CSS1Compat") ? 
    document.documentElement :
    document.body;
var width = elem.clientWidth;
var height = elem.clientHeight -8; 
console.log(width + " "+height);

// Create the stage
var stage = new Kinetic.Stage({
  container: 'container',
  width: width, //512 * ZOOM,
  height: height //512 * ZOOM
});

// Background layer
var layer = new Kinetic.Layer();
var imageObj = new Image();
imageObj.onload = function() {
  var background = new Kinetic.Image({
    x: 0,
    y: 0,
    image: imageObj,
    width: width, //512 * ZOOM,
    height: height //512 * ZOOM
  });
  layer.add(background);
  stage.add(layer);
};
imageObj.src = 'img/map.png';