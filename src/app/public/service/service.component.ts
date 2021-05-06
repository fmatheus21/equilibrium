import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/_service/app.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  service: any[];
  grid: any[];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.loadService();
  }

  private loadService() {
    this.appService.findService()
      .subscribe(data => {
        this.returnService(data);
        this.returnGrid(data);
      })
  }

  private returnService(data) {
    var result = JSON.parse(JSON.stringify(data));
    result = Object.keys(result).map(e => result[e].service);
    result.forEach((e: any) => {
      this.service = e;
    })
  }

  private returnGrid(data) {
    var result = JSON.parse(JSON.stringify(data));
    result = Object.keys(result).map(e => result[e].grid);
    result.forEach((e: any) => {
      this.grid = e;
    })
  }

}
