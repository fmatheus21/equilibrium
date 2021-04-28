import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FeaturedComponent } from './featured/featured.component';
import { ServiceComponent } from './service/service.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TeamComponent } from './team/team.component';
import { CounterComponent } from './counter/counter.component';
import { PriceComponent } from './price/price.component';
import { FluidComponent } from './fluid/fluid.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SliderComponent,
    WelcomeComponent,
    FeaturedComponent,
    ServiceComponent,
    AppointmentComponent,
    TeamComponent,
    CounterComponent,
    PriceComponent,
    FluidComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SliderComponent,
    WelcomeComponent,
    FeaturedComponent,
    ServiceComponent,
    AppointmentComponent,
    TeamComponent,
    CounterComponent,
    PriceComponent,
    FluidComponent,
    TestimonialComponent
  ]
})
export class PublicModule { }
