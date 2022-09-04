import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMaker } from '../models/interfaces/maker.interface';
@Injectable({
  providedIn: 'root',
})
export class MakerService {
  readonly BASE_URL = environment.api_url;

  makers = new Subject<IMaker[]>();
  constructor(private http: HttpClient) {
    this.getMakers();
  }
  getMaker(id: number): Observable<IMaker> {
    return this.http.get<IMaker>(this.BASE_URL + `/makers/${id}`);
  }
  getMakers() {
    this.http.get<IMaker[]>(this.BASE_URL + '/makers').subscribe((makers) => {
      this.makers.next(makers);
    });
  }

  addMaker(maker: IMaker) {
    this.http.post(this.BASE_URL + '/makers', maker).subscribe((x) => {
      this.getMakers();
    });
  }
}
