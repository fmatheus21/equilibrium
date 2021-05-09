import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/script.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private scriptService: ScriptService) { }

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
