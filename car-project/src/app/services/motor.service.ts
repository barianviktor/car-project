import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMotor } from '../models/interfaces/motor.interface';

@Injectable({
  providedIn: 'root',
})
export class MotorService {
  readonly BASE_URL = environment.api_url;
  constructor(private http: HttpClient) {}
  getMotor(id: number): Observable<IMotor> {
    return this.http.get<IMotor>(this.BASE_URL + `/motors/${id}`);
  }
  getMotors(): Observable<IMotor> {
    return this.http.get<IMotor>(this.BASE_URL + `/motors`);
  }
}
