import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../modules/carDetail';
import { ListResponseModel } from '../modules/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44347/api/cars/getcardetails";//web api controller kısmına getcardetails operasyonu eklenecek.

  constructor(private httpClient:HttpClient) { }

  getCars(): Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl);
  }
}
