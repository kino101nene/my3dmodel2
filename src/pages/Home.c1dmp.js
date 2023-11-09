$w.onReady(function () {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const loader = new THREE.GLTFLoader();
    
    // Use the raw GitHub URL here
    loader.load('https://github.com/kino101nene/my3dmodel2/blob/b182fecef8619acbd5b2a9fa116d6fc3c3d6b205/src/cube3.glb', function (gltf) {
        const model = gltf.scene;
        scene.add(model);
        renderer.render(scene, camera);
    });
});
