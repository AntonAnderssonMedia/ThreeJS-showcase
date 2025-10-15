import './style.css'
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Scene setup 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
}); // Selects the canvas element with id 'bg'

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Create a torus knot
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torusKnot = new THREE.Mesh(geometry, material);

scene.add(torusKnot);

// Lighting
const pointLight = new THREE.PointLight(0xffffff, 100, 0);
pointLight.position.set(0, 0, 0);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(pointLight, ambientLight);

// Light + Grid helper
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);

// randomly scatter stars
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));   

  star.position.set(x, y, z);
  scene.add(star);
}

// call the addStar function 200 times
Array(200).fill().forEach(addStar);

// Background
// const spaceTexture = new THREE.TextureLoader().load('space4.jpg');
// scene.background = spaceTexture;


// render the scene
renderer.render(scene, camera); // Render after adding the sphere
function animate() {
  requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.02;
    torusKnot.rotation.y += 0.000;
    torusKnot.rotation.z += 0.02;  

    controls.update();

  renderer.render(scene, camera);
}

animate();
