import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/_service/app.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  welcome: any[];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.loadWelcome();
  }

  private loadWelcome() {
    this.appService.findWelcome()
      .subscribe(data => {
        this.returnWelcome(data);
      })
  }

  private returnWelcome(data) {
    var result = JSON.parse(JSON.stringify(data));
    result = Object.keys(result).map(e => result[e].welcome);
    result.forEach((e: any) => {
      this.welcome = e;
    })
  }

}
