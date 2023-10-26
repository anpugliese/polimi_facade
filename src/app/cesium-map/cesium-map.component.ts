import { Component, OnInit } from '@angular/core';
declare let Cesium: any;

Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyOWRlMTZhMi0zYWZlLTQ3NjUtODc5Yi0wNDA4MmQ1ODUyMjAiLCJpZCI6MTc0MDY2LCJpYXQiOjE2OTgzMTIzMjF9.YzVYoaT5BAbidnu_tjK6axQ0WLoLtoIPWUSl6E0VsKM"

@Component({
  selector: 'app-cesium-map',
  templateUrl: './cesium-map.component.html',
  styleUrls: ['./cesium-map.component.css']
})
export class CesiumMapComponent implements OnInit {
  viewer: any;
  constructor() {}
  ngOnInit() {
    // Create a Cesium viewer
    this.viewer = new Cesium.Viewer('cesiumContainer', {
      infoBox: false,
      selectionIndicator: false,
      shadows: true,
      shouldAnimate: true,
    });
    
    console.log("enter here");
    
    this.createModel('assets/model1.glb', 20);
    console.log(this.viewer.entities);
    

  }

  createModel(url: any, height: any) {
    this.viewer.entities.removeAll();
  
    const position = Cesium.Cartesian3.fromDegrees(
      0,0,
      height
    );
    const heading = Cesium.Math.toRadians(90);
    const pitch = 90;
    const roll = 0;
    const hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
    const orientation = Cesium.Transforms.headingPitchRollQuaternion(
      position,
      hpr
    );
  
    const entity = this.viewer.entities.add({
      name: url,
      position: position,
      orientation: orientation,
      model: {
        uri: url,
        minimumPixelSize: 800,
        maximumScale: 200000,
      },
    });
    this.viewer.trackedEntity = entity;
    console.log(entity);
    
  }
  
}
