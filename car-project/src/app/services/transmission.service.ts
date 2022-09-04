import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITransmission } from '../models/interfaces/transmission.interface';

@Injectable({
  providedIn: 'root',
})
export class TransmissionService {
  readonly BASE_URL = environment.api_url;
  constructor(private http: HttpClient) {}
  getTransmission(id: number): Observable<ITransmission> {
    return this.http.get<ITransmission>(this.BASE_URL + `/transmissions/${id}`);
  }
  getTransmissions(): Observable<ITransmission> {
    return this.http.get<ITransmission>(this.BASE_URL + `/transmissions`);
  }
}
