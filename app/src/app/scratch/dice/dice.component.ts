import { animate } from '@angular/animations';
import { rendererTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as THREE from 'three'
import { AnimationClip, CubeReflectionMapping, KeyframeTrack, NumberKeyframeTrack, Sphere } from 'three';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})

export class DiceComponent implements OnInit {
  name = 'Angular'
  scene;
  camera;
  renderer;
  cube;
  animate;
  go;
  yo;

  blo = Math.random()
  
  constructor() {

  }

  ngOnInit(): void {

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(25, 350 / 210, 0.5, 1000);
    this.scene.background = new THREE.Color('gainsborod')
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(350, 210);

    document.getElementById('rboxk').appendChild(this.renderer.domElement);
    
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshPhongMaterial({ color: 'yellow' });
    this.cube = new THREE.Mesh(geometry, material);

    this.scene.add(this.cube);

    const color = 0xFFFFFF;
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    this.scene.add(light);
    
    this.camera.position.z = 4.2;

   
    
    //let animate = this.makeAnimate(go, yo)
    
    //let animate = this.makeAnimate(go, yo)
    this.makeAnimate()();
  }

  makeAnimate(dx?,dy?){

    if(!dx){
      dx = Math.random() * .6
    }

    if(!dy){
      dy = Math.random() * .6
    }

    let animate = this.animate = () => {
      if (dy < .001) {
        this.cube.material.color.set('blue')
        this.renderer.render(this.scene, this.camera)
      }
      else {
  
        requestAnimationFrame(this.animate);
  
        this.cube.rotation.x += dx;
        this.cube.rotation.y += dy;
        let bro = Math.floor(dx * 2200)
        dx = dx * .98
        dy = dy * .98
  
        this.cube.material.color.set('hsl(' + bro + ',60%,60%)')
  
        this.renderer.render(this.scene, this.camera);
      };
    }

    return animate;
  }

  ani() {
    //this.cube.material.color.set('red');
    
    //this.renderer.render(this.scene, this.camera);

    this.makeAnimate()(); 
    //this.animate(go, yo);
    // var go = Math.random() * .6
    // var yo = Math.random() * .6
    // var animate = function () {
    //   if (yo < .001) {
    //     this.cube.material.color.set('blue')
    //     renderer.render(scene, camera)
    //   }
    //   else {

    //     requestAnimationFrame(animate);

    //     this.cube.rotation.x += go;
    //     this.cube.rotation.y += yo;
    //     var bro = Math.floor(yo * 220)
    //     go = go * .98
    //     yo = yo * .98

    //     this.cube.material.color.set('hsl(' + bro + ',60%,60%)')

    //     renderer.render(scene, camera);
    //   };
    // }


    // animate();
  }


}
