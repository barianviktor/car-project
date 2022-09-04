import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';
import { IColor } from '../models/interfaces/color.interface';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  readonly BASE_URL = environment.api_url;

  colors = new Subject<IColor[]>();
  constructor(private http: HttpClient) {
    this.getColors();
  }

  getColors() {
    this.http.get<IColor[]>(this.BASE_URL + '/colors').subscribe((colors) => {
      this.colors.next(colors);
    });
  }
  getColor(id: number): Observable<IColor> {
    return this.http.get<IColor>(this.BASE_URL + `/colors/${id}`);
  }

  addColor(color: IColor) {
    this.http.post(this.BASE_URL + '/colors', color).subscribe((x) => {
      this.getColors();
    });
  }
}
