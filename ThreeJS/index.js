import * as THREE from "three"


const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
// const camera = new THREE.PerspectiveCamera(field of view, aspect, near, far);
camera.position.z = 2;
const scene = new THREE.Scene();


const geo = new THREE.IcosahedronGeometry(1.0,2);
const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true });
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const wireMat = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });

const wireMesh = new THREE.Mesh(geo, wireMat);
mesh.add(wireMesh);

const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
scene.add(hemiLight);

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
renderer.render(scene, camera);
//Once I tried to import orbit controls the entire shape got removed tested this by even putting the import at the end of the code
//and putting a console.log("test") before the import and it showed the import was the issue
//I should solve this but Im new to three.js and I don't know how to solve it yet and this isnt a good sign lol
// Ill go on with the tutorial and learn and come back to solve this issue for now enjoy this splendid shape