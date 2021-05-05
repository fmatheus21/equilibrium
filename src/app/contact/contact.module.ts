import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { PublicModule } from '../public/public.module';
import { RepresentativeComponent } from './representative/representative.component';


@NgModule({
  declarations: [ContactComponent, RepresentativeComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    PublicModule
  ]
})
export class ContactModule { }
