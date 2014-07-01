require.config({
  paths: {
    "three": "bower_components/threejs/build/three",
    "jquery": "bower_components/jquery/dist/jquery.min"
  }
});

require(["jquery", "three"],
  function($){
    console.log("Three");
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

  }
);
