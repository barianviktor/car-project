import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CarService } from 'src/app/services/car.service';
import { Params } from '@angular/router';
import { ICar } from 'src/app/models/interfaces/car.interface';
@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss'],
})
export class CarItemComponent implements OnInit {
  car!: ICar;
  id?: number;
  loading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.carService.fetchCar(this.id).subscribe({
        next: (car) => {
          this.car = car;
          console.log(this.car);
        },
        error: (err) => {
          this.router.navigate(['/']);
          console.log(err);
        },
        complete: () => {
          this.loading = false;
        },
      });
    });
  }
}
