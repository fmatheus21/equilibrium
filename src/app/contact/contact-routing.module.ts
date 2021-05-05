import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { RepresentativeComponent } from './representative/representative.component';

const routes: Routes = [
  { path: 'fale-conosco', component: ContactComponent },
  { path: 'representante', component: RepresentativeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
