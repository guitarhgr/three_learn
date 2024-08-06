import * as THREE from 'three';


const main = () => {
    // =============== 创建3D场景对象
    const scene = new THREE.Scene();




    // =============== 创建几何体
    const geometry = new THREE.BoxGeometry(50, 50, 50);

    // =============== 创建材质对象
    // 基础网格材质MeshBasicMaterial不受光照影响
    // 漫反射网格材质；MeshLambertMaterial
    const material = new THREE.MeshLambertMaterial({
        color: 0x00ffff,
    });

    // =============== 创建网格模型
    const mesh = new THREE.Mesh(geometry, material);

    // 设置网格模型在三维空间中的坐标(默认是坐标原点)
    mesh.position.set(0, 10, 0);

    // 添加网格模型到场景中
    scene.add(mesh);


    // =============== 创建透视相机
    // 用来设置渲染后，输出的画布宽高度。
    const fov = 30; // 视场角度
    const width = 800;
    const height = 500;
    const aspect = width / height; // Canvas画布宽高比
    const near = 1; // 近裁截面
    const far = 3000; // 远裁截面

    // 创建透视相机(30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面)
    const perspectiveCamera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    // 相机在Three.js三维坐标系中的位置
    perspectiveCamera.position.set(292, 223, 185);

    // 相机观察目标指向Three.js坐标系原点
    perspectiveCamera.lookAt(0, 0, 0);


    // =============== 创建辅助观察的坐标系
    const axesHelper = new THREE.AxesHelper(100);
    scene.add(axesHelper);


    // =============== 创建点光源
    const pointLight = new THREE.PointLight(0xffffff, 1.0);
    pointLight.decay = 0.0; // 光源光照强度不随距离改变衰减
    pointLight.position.set(400, 0, 0); // 点光源放在x轴上
    pointLight.position.set(400, 200, 300); // 偏移光源位置，观察渲染效果变化

    scene.add(pointLight); // 点光源添加到场景中

    // =============== 创建渲染器对象
    const renderer = new THREE.WebGLRenderer();

    // 设置three.js渲染区域的尺寸(像素px)
    renderer.setSize(width, height);

    // 执行渲染操作
    renderer.render(scene, perspectiveCamera);

    // three.js执行渲染命令会输出一个canvas画布，也就是一个HTML元素，可以插入到web页面中

    document.getElementById('webgl').appendChild(renderer.domElement);
};


main();