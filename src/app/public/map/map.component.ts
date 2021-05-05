import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/script.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  latitude: string;
  longitude: string;

  constructor(private scriptService: ScriptService) { }

  ngOnInit(): void {
    this.initializeMap();
    this.scriptService.loadExternalScript('http://maps.google.com/maps/api/js?key=AIzaSyBKS14AnP3HCIVlUpPKtGp7CbYuMtcXE2o').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/map-script.js').then(() => { }).catch(() => { });

  }


  private initializeMap() {
    this.latitude = '-22.71577840955095';
    this.longitude = '-43.26182683141034';
  }

}
