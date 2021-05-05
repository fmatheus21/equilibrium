import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/_service/app.service';

@Component({
  selector: 'app-representative',
  templateUrl: './representative.component.html',
  styleUrls: ['./representative.component.css']
})
export class RepresentativeComponent implements OnInit {

  contact: any[];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.loadContact();
  }


  private loadContact() {
    this.appService.findContactRepresentative()
      .subscribe(data => {
        this.returnContact(data);
      })
  }

  private returnContact(data) {
    var result = JSON.parse(JSON.stringify(data));
    result = Object.keys(result).map(e => result[e].contactRepresentative);
    result.forEach((e: any) => {
      this.contact = e;
      console.log(this.contact)
    })
  }

}
