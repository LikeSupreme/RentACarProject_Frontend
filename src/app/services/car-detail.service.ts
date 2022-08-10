import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../modules/carDetail';
import { ListResponseModel } from '../modules/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44347/api/";//web api controller kısmına getcardetails operasyonu eklenecek.

  constructor(private httpClient:HttpClient) { }

  getCarDetails(): Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  // getCarsByBrandId(brandId:number): Observable<ListResponseModel<CarDetail>> {//new
    
  //   let newPath = this.apiUrl + "cars/getcarsbybrandid?brandId=" + brandId;//new

  //   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);

  // }

  // getCarsByColorId(colorId:number): Observable<ListResponseModel<CarDetail>> {//new
    
  //   let newPath = this.apiUrl + "cars/getcarsbycolorid?colorId=" + colorId;//new

  //   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
}
