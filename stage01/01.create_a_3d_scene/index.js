import * as THREE from 'three';

const main = () => {
    // 创建3D场景对象
    const scene = new THREE.Scene();

    // 创建几何体
    const geometry = new THREE.BoxGeometry(50, 50, 50);

    // 创建材质对象
    const material = new THREE.MeshBasicMaterial({
        color: 0x0000ff,
    });

    // 创建网格模型
    const mesh = new THREE.Mesh(geometry, material);

    // 设置网格模型在三维空间中的坐标(默认是坐标原点)
    mesh.position.set(0, 10, 0);

    // 添加网格模型到场景中
    scene.add(mesh);

    console.log('三维场景', scene);
};


main();