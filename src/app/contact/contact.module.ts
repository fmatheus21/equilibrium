import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { PublicModule } from '../public/public.module';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    PublicModule
  ]
})
export class ContactModule { }
