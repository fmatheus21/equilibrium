import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/_service/app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: any[];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.loadContact();
  }


  private loadContact() {
    this.appService.findContactUs()
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
