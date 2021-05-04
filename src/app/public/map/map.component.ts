import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/script.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private scriptService: ScriptService) { }

  ngOnInit(): void {

    this.scriptService.loadExternalScript('http://maps.google.com/maps/api/js?key=AIzaSyBKS14AnP3HCIVlUpPKtGp7CbYuMtcXE2o').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/map-script.js').then(() => { }).catch(() => { });

  }

}
