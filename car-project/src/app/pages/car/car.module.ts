import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car.component';
import { CarItemComponent } from './car-item/car-item.component';
import { CarRoutingModule } from './car-routing.module';
import { CarListComponent } from './car-list/car-list.component';
import { MaterialModule } from 'src/app/material.module';
import { AticleItemComponent } from 'src/app/components/aticle-item/aticle-item.component';
import { SmartCardComponent } from 'src/app/components/smart-card/smart-card.component';
@NgModule({
  declarations: [
    CarComponent,
    CarItemComponent,
    CarListComponent,
    AticleItemComponent,
    SmartCardComponent,
  ],
  imports: [CommonModule, CarRoutingModule, MaterialModule],
})
export class CarModule {}
