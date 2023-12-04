const artContainer = document.getElementById('artContainer');
const motorcycleContainer = document.getElementById('motorcycle');
let loopCount = 0;

// Initialize Three.js scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // Adjust the camera position

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
motorcycleContainer.appendChild(renderer.domElement);

// Add ambient light to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Load the motorcycle model
const loader = new THREE.GLTFLoader();
loader.load('D:/Homework/2023 Dig Photo/Digital Final/low-poly_motorcycle__7.gltf', (gltf) => {
  gltf.scene.scale.set(0.02, 0.02, 0.02); // Adjust the scale as needed
  scene.add(gltf.scene);
});

// Function to change the art based on loop count
function changeArt() {
  // Display loop count for illustration
  artContainer.innerText = `Loop ${loopCount + 1}`;

  // Increment the loop count
  loopCount++;

  // You can add more complex art-changing logic here
}

// Event listener for user interaction
artContainer.addEventListener('click', changeArt);

// Initial art setup
changeArt();

// Loop the art every 5 seconds (adjust as needed)
setInterval(changeArt, 5000);

// Animate the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
