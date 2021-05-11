import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { RepresentativeComponent } from './representative/representative.component';

const routes: Routes = [
  {
    path: 'fale-conosco',
    component: ContactComponent,
    data: {
      title: 'Fale Conosco | Equilibrium Rações'
    }
  },
  {
    path: 'representante',
    component: RepresentativeComponent,
    data: {
      title: 'Representante | Equilibrium Rações'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
