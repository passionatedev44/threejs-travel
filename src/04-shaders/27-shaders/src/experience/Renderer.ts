import * as THREE from "three";

import Camera from "./Camera";
import Experience from "./Experience";
import Sizes from "./utils/Sizes";

export default class Renderer {
	experience: Experience;
	canvas: Element;
	sizes: Sizes;
	scene: THREE.Scene;
	camera: Camera;
	renderer?: THREE.WebGLRenderer;

	constructor() {
		this.experience = new Experience();
		this.canvas = this.experience.canvas!;
		this.sizes = this.experience.sizes!;
		this.scene = this.experience.scene!;
		this.camera = this.experience.camera!;

		this.setRenderer();
	}

	setRenderer() {
		this.renderer = new THREE.WebGLRenderer({
			canvas: this.canvas,
		});
		this.renderer.setSize(this.sizes.width, this.sizes.height);
		this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	}

	resize() {
		this.renderer!.setSize(this.sizes.width, this.sizes.height);
		this.renderer!.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	}

	update() {
		this.renderer!.render(this.scene, this.camera.instance!);
	}
}
