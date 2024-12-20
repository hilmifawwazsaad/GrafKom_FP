document.addEventListener('DOMContentLoaded', () => {
    const arContainer = document.getElementById('ar-container');

    // Create a scene element
    const scene = document.createElement('a-scene');
    scene.setAttribute('embedded', '');
    scene.setAttribute('arjs', '');

    // Create a marker element
    const marker = document.createElement('a-marker');
    marker.setAttribute('preset', 'hiro');

    // Create a box inside the marker
    const box = document.createElement('a-box');
    box.setAttribute('position', '0 0.5 0');
    box.setAttribute('material', 'color: blue;');

    // Append the box to the marker
    marker.appendChild(box);

    // Create the camera entity
    const cameraEntity = document.createElement('a-entity');
    cameraEntity.setAttribute('camera', '');

    // Append the marker and camera entity to the scene
    scene.appendChild(marker);
    scene.appendChild(cameraEntity);

    // Append the scene to the container
    arContainer.appendChild(scene);
});
