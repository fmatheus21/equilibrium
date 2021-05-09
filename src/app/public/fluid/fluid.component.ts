import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/_service/app.service';

@Component({
  selector: 'app-fluid',
  templateUrl: './fluid.component.html',
  styleUrls: ['./fluid.component.css']
})
export class FluidComponent implements OnInit {

  fluid: any[];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.loadFluid();
  }

  private loadFluid() {
    this.appService.findFluid()
      .subscribe(data => {
        this.returnFluid(data);
      })
  }

  private returnFluid(data) {
    var result = JSON.parse(JSON.stringify(data));
    result = Object.keys(result).map(e => result[e].fluid);
    result.forEach((e: any) => {
      this.fluid = e;
      console.log(this.fluid)
    })
  }

}
