import * as THREE from "three";

export function threeJsLogic() {
  // Pillars of Three JS
  // Scene, Camera & renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 96;

  const canvas = document.getElementById("myThreeJsCanvas");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff, 0);
  document.body.appendChild(renderer.domElement);

  //   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //   The work happens here below
  //   +++++++++++++++++++++++++++
  // this is the content that appears on the canvas
  const geometry = new THREE.SphereGeometry(65, 67, 61);
  const material = new THREE.MeshBasicMaterial({
    color: 0xf5f4f0,
    wireframe: true,
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const animate = () => {
    // rotating the cube
    mesh.rotation.x += 0.0003;
    mesh.rotation.y += 0.00033;

    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  };
  animate();
}
