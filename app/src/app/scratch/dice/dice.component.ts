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
  animate
  
  

  blo=Math.random()
  constructor() {
  

    
    
  
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 25, 350/210, 0.5, 1000 );
scene.background=new THREE.Color('gainsborod')

var renderer = new THREE.WebGLRenderer();
renderer.setSize( 350, 210);

document.body.appendChild(renderer.domElement);


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshPhongMaterial( { color: 'yellow' } );
var cube = new THREE.Mesh( geometry, material );

scene.add( cube );

const color = 0xFFFFFF;
const skyColor = 0xB1E1FF;  // light blue
const groundColor = 0xB97A20;  // brownish orange
const intensity = 1;
const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
scene.add(light);

camera.position.z = 4.2;




var go=Math.random()*.6
var yo=Math.random()*.6
var animate = function() {
  if(yo<.001){cube.material.color.set('orange')
  renderer.render(scene, camera)
}
  else{
  

  
  requestAnimationFrame( animate );

  cube.rotation.x += go;
  cube.rotation.y += yo;
  var bro=Math.floor(yo*220)
  go=go*.98
  yo=yo*.98
  
  cube.material.color.set('hsl('+bro+',60%,60%)')
  
  

  renderer.render( scene, camera );
};
}


animate();
  }
  ani(){'bum'}

   

  ngOnInit(): void {
  }

}
