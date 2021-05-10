import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/_service/app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: any[];
  accordion: any[];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.loadAbout();
  }

  private loadAbout() {
    this.appService.findAbout()
      .subscribe(data => {
        this.returnAbout(data);
        this.returnAccordion(data);
      })
  }

  private returnAbout(data) {
    var result = JSON.parse(JSON.stringify(data));
    result = Object.keys(result).map(e => result[e].about);
    result.forEach((e: any) => {
      this.about = e;
    })
  }

  private returnAccordion(data) {
    var result = JSON.parse(JSON.stringify(data));
    result = Object.keys(result).map(e => result[e].accordion);
    result.forEach((e: any) => {
      this.accordion = e;
    })
  }

}
