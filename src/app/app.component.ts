import { Component } from '@angular/core';
import { ScriptService } from './script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'equilibrium';

  constructor(private scriptService: ScriptService) { }

  ngOnInit() {

    /* this.scriptService.loadExternalScript('./assets/plugins/revolution/js/jquery.themepunch.revolution.min.js').then(() => { }).catch(() => { });
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
     this.scriptService.loadExternalScript('./assets/js/main-slider-script.js').then(() => { }).catch(() => { });*/

    this.scriptService.loadExternalScript('./assets/js/script.js').then(() => { }).catch(() => { });

  }

}
