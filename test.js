import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer({alpha: true});

renderer.setClearColor(new THREE.Color('lightgrey'), 0);
renderer.domElement.style.position = 'absolute';
renderer.domElement.style.top = '0px';
renderer.domElement.style.left = '0px';

document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
const camera = new THREE.Camera();

scene.add(camera);

