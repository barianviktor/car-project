import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDesign } from '../models/interfaces/design.interface';
@Injectable({
  providedIn: 'root',
})
export class DesignService {
  readonly BASE_URL = environment.api_url;

  designs = new Subject<IDesign[]>();
  constructor(private http: HttpClient) {
    this.getDesigns();
  }
  getDesigns() {
    //return this.http.get<IDesign[]>(environment.api + 'designs');
    this.http
      .get<IDesign[]>(this.BASE_URL + '/designs')
      .subscribe((designs) => {
        this.designs.next(designs);
      });
  }
  getDesign(id: number): Observable<IDesign> {
    //return this.http.get<IDesign[]>(environment.api + 'designs');
    return this.http.get<IDesign>(this.BASE_URL + `/designs/${id}`);
  }
  addDesign(design: IDesign) {
    this.http.post(this.BASE_URL + '/designs', design).subscribe((x) => {
      this.getDesigns();
    });
  }
}
