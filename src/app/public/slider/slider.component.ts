import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ScriptService } from 'src/app/script.service';
import { AppService } from 'src/app/_service/app.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  images: any[];

  constructor(
    private scriptService: ScriptService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  ngOnInit() {

    /* Revolution Slider */
    this.scriptService.loadExternalScript('./assets/plugins/revolution/js/jquery.themepunch.revolution.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/plugins/revolution/js/jquery.themepunch.tools.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/plugins/revolution/js/extensions/revolution.extension.actions.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/plugins/revolution/js/extensions/revolution.extension.carousel.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/plugins/revolution/js/extensions/revolution.extension.kenburn.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/plugins/revolution/js/extensions/revolution.extension.migration.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/plugins/revolution/js/extensions/revolution.extension.navigation.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/plugins/revolution/js/extensions/revolution.extension.parallax.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/plugins/revolution/js/extensions/revolution.extension.video.min.js').then(() => { }).catch(() => { });

    this.scriptService.loadExternalScript('./assets/js/main-slider-script.js').then(() => { }).catch(() => { });

  }



}
