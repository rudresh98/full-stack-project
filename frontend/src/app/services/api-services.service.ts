import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { pipe, map } from 'rxjs';
import { Items } from '../Interfaces/items.interface';
@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  constructor(private http: HttpClient) {}
  public getDetails(): Observable<Items> {
    return this.http
      .get(environment.URL + 'getItems')
      .pipe(map((val: any) => val));
  }
  public setDetails(payload: Items): Observable<any> {
    return this.http
      .post(environment.URL + 'createItems', payload)
      .pipe(map((val: any) => val));
  }
  public deleteItem(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http
      .delete(environment.URL + 'deleteItem', { params })
      .pipe(map((val: any) => val));
  }

  public updateItem(payload: any) {
    return this.http.put(environment.URL + 'updateitem', payload);
  }
  public detailsItem(id: string) {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get(environment.URL + 'detailsItem', { params });
  }
}
