/* import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDto } from '../models/dtoModels/carDto';
import { ICar } from '../models/interfaces/car.interface';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  readonly BASE_URL = environment.api_url;
  constructor(private http: HttpClient) {}

  fetchCar(id: number): Observable<ICar> {
    return this.http.get<ICar>(this.BASE_URL + `/cars/${id}`).pipe(
      map((carDto) => {
        const car: ICar = {
          ...carDto,
        };
        return car;
      })
    );
  }
  /* 
  */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  concatAll,
  concatMap,
  forkJoin,
  map,
  mergeAll,
  mergeMap,
  Observable,
  switchMap,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDto } from '../models/dtoModels/carDto';
import { ICar } from '../models/interfaces/car.interface';
import { IColor } from '../models/interfaces/color.interface';
import { IDesign } from '../models/interfaces/design.interface';
import { IMaker } from '../models/interfaces/maker.interface';
import { IMotor } from '../models/interfaces/motor.interface';
import { ITransmission } from '../models/interfaces/transmission.interface';
import { ColorService } from './color.service';
import { DesignService } from './design.service';
import { MakerService } from './maker.service';
import { MotorService } from './motor.service';
import { TransmissionService } from './transmission.service';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  readonly BASE_URL = environment.api_url;
  constructor(
    private http: HttpClient,
    private colorService: ColorService,
    private designService: DesignService,
    private makerService: MakerService,
    private motorService: MotorService,
    private transmissionService: TransmissionService
  ) {}
  /*   fetchCar(id: number): Observable<ICar> {
    return this.http.get<CarDto>(this.BASE_URL + `/trycars/${id}`).pipe(
      switchMap((carDto) => {
        return this.castCarDtoToCarObj(carDto);
      })
    );
  } */
  fetchCar(id: number): Observable<ICar> {
    return this.http.get<ICar>(this.BASE_URL + `/cars/${id}`).pipe(
      map((carDto) => {
        console.log(carDto);

        return carDto;
      })
    );
  }
  getCar(id: number): Observable<CarDto> {
    return this.http.get<CarDto>(this.BASE_URL + `/trycars/${id}`).pipe(
      map((carDto) => {
        console.log(carDto);

        return carDto;
      })
    );
  }
  /*   getCar(id: number): Observable<any> {
    return this.http.get<any>(this.BASE_URL + `/trycars/${id}`).pipe(
      concatMap(() => this.transmissionService.getTransmission(1)),
      concatMap(() => this.motorService.getMotor(1))
    ); .pipe(
      map(async (x) => {
        const car: ICar = await this.castCarDtoToICar(x);

        return car;
      })
    );
  }
  async castCarDtoToICar(carDto: CarDto): Promise<ICar> {
    const motorResponse = await this.motorService
      .getMotor(carDto.motor)
      .toPromise();
    const transmissionResponse = await this.transmissionService
      .getTransmission(carDto.transmission)
      .toPromise();
    const makerResponse = await this.makerService
      .getMaker(carDto.maker)
      .toPromise();
    const designResponse = await this.designService
      .getDesign(carDto.design)
      .toPromise();
    const colors: IColor[] = [];
    carDto.avaiableColors.forEach(async (colorId) => {
      const color = await this.colorService.getColor(colorId).toPromise();
      colors.push(color!);
    });

    let car: ICar = {
      id: carDto.id,
      maker: makerResponse!,
      design: designResponse!,
      avaiableColors: colors!,
      model: carDto.model,
      title: carDto.title,
      description: carDto.description,
      madeIn: carDto.madeIn,
      cardImage: carDto.cardImage,
      motor: motorResponse!,
      transmission: transmissionResponse!,
      seats: carDto.seats,
      images: carDto.images,
      price: carDto.price,
      mainImage: carDto.mainImage,
    };
    console.log(car);

    return car;
  } */
  /*   castCarDtoToCarObj(carDto: CarDto): ICar {
    let color: IColor[] = [];
    let design: IDesign | undefined = undefined;
    let maker: IMaker | undefined = undefined;
    let motor: IMotor | undefined = undefined;
    let transmission: ITransmission | undefined = undefined;
    this.designService.getDesign(carDto.design).subscribe((designDto) => {
      console.log(designDto);

      design = designDto;
    });
    this.makerService.getMaker(carDto.design).subscribe((makerDto) => {
      maker = makerDto;
    });
    this.motorService.getMotor(carDto.motor).subscribe((motorDto) => {
      motor = motorDto;
    });
    this.transmissionService
      .getTransmission(carDto.transmission)
      .subscribe((transmissionDto) => {
        transmission = transmissionDto;
      });
    for (let colorId of carDto.avaiableColors) {
      this.colorService.getColor(colorId).subscribe((colorDto) => {
        color.push(colorDto);
      });
    }

    let car: ICar = {
      id: carDto.id,
      maker: maker,
      design: design,
      avaiableColors: color,
      model: carDto.model,
      title: carDto.title,
      description: carDto.description,
      madeIn: carDto.madeIn,
      cardImage: carDto.cardImage,
      motor: motor,
      transmission: transmission,
      seats: carDto.seats,
      images: carDto.images,
      price: carDto.price,
      mainImage: carDto.mainImage,
    };
    console.log(car);

    return car;
  } */
  /* getCar(id: number): Observable<any> {
    return this.http.get<CarDto>(this.BASE_URL + `/trycars/${id}`).pipe(
      map((carDto) => {
        let color: IColor[] | undefined = undefined;
        let design: IDesign | undefined = undefined;
        let maker: IMaker | undefined = undefined;
        this.designService.getDesign(carDto.design).subscribe((x) => {
          design = x;
        });
        this.makerService.getMaker(carDto.design).subscribe((x) => {
          maker = x;
        });
        for (let colorId of carDto.avaiableColors) {
          this.colorService.getColor(colorId).subscribe((x) => {
            color?.push(x);
          });
        }
        if (color && maker && design) {
          let car: ICar = {
            id: carDto.id,

            maker: maker,
            design: design,
            avaiableColors: color,

            model: carDto.model,
            title: carDto.title,
            description: carDto.description,
            madeIn: carDto.madeIn,
            cardImage: carDto.cardImage,

            motor: Motor.benzin,
            transmission: Transmission.automatic,
            seats: carDto.seats,
            images: carDto.images,
            price: carDto.price,
            mainImage: carDto.mainImage,
          };
          return car;
        }
      })
    );
  } */
}
