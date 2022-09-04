import { Component, OnInit } from '@angular/core';
import { from, map, Observable, of, tap } from 'rxjs';
import { CarDto } from 'src/app/models/dtoModels/carDto';
import { ICar } from 'src/app/models/interfaces/car.interface';
import { IColor } from 'src/app/models/interfaces/color.interface';
import { IDesign } from 'src/app/models/interfaces/design.interface';
import { IMaker } from 'src/app/models/interfaces/maker.interface';
import { IMotor } from 'src/app/models/interfaces/motor.interface';
import { ITransmission } from 'src/app/models/interfaces/transmission.interface';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { DesignService } from 'src/app/services/design.service';
import { MakerService } from 'src/app/services/maker.service';
import { MotorService } from 'src/app/services/motor.service';
import { TransmissionService } from 'src/app/services/transmission.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  car?: CarDto;
  design?: IDesign;
  carObjs?: ICar;
  maker?: IMaker;
  transmission?: ITransmission;
  motor?: IMotor;
  colors: IColor[] = [];
  constructor(
    private colorService: ColorService,
    private designService: DesignService,
    private makerService: MakerService,
    private carService: CarService,
    private transmissionService: TransmissionService,
    private motorService: MotorService
  ) {}

  ngOnInit(): void {
    this.carService
      .getCar(1)
      .pipe(
        tap((car) => {
          this.designService.getDesign(car.design).subscribe((x) => {
            this.design = x;
          });
        }),
        tap((car) => {
          this.makerService.getMaker(car.maker).subscribe((x) => {
            this.maker = x;
          });
        }),
        tap((car) => {
          this.transmissionService
            .getTransmission(car.transmission)
            .subscribe((x) => {
              this.transmission = x;
            });
        }),
        tap((car) => {
          this.motorService.getMotor(car.motor).subscribe((x) => {
            this.motor = x;
          });
        }),
        tap((car) => {
          from(car.avaiableColors).subscribe((color) => {
            this.colorService.getColor(color).subscribe((colorObj) => {
              this.colors?.push(colorObj);
            });
          });
          /* this.motorService.getMotor(car.motor).subscribe((x) => {
            this.motor = x;
          }); */
        })
      )
      .subscribe((x) => {
        this.car = x;
      });
    /* this.colorService.getColor(1).subscribe((x) => {
      console.log(x);
    });
    this.designService.getDesign(1).subscribe((x) => {
      console.log(x);
    });
    this.makerService.getMaker(1).subscribe((x) => {
      console.log(x);
    }); */
    /* this.carService.getCar(1).subscribe((x) => {
      console.log(x);
    }); */
    /* this.transmissionService.getTransmission(1).subscribe((x) => {
      console.log(x);
    });
    this.motorService.getMotor(1).subscribe((x) => {
      console.log(x);
    }); */
  }
}
