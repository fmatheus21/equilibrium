import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/_service/app.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  featured: any[];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.loadFeatured();
  }

  private loadFeatured() {
    this.appService.findFeatured()
      .subscribe(data => {
        this.returnFeatured(data);
      })
  }

  private returnFeatured(data) {
    var result = JSON.parse(JSON.stringify(data));
    result = Object.keys(result).map(e => result[e].featured);
    result.forEach((e: any) => {
      this.featured = e;
    })
  }

}
