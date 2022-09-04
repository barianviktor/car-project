import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarItemComponent } from './car-item/car-item.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarComponent } from './car.component';

const routes: Routes = [
  {
    path: 'cars',
    component: CarComponent,
    children: [
      { path: '', component: CarListComponent },
      { path: ':id', component: CarItemComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
