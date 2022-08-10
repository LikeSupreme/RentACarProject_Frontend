import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../modules/listResponseModel';
import { Car } from '../modules/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44347/api/";

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }


  getCarsByBrandId(brandId:number): Observable<ListResponseModel<Car>> {//new
    
    let newPath = this.apiUrl + "cars/getcarsbybrandid?brandId=" + brandId;//new

    return this.httpClient.get<ListResponseModel<Car>>(newPath);

  }

  getCarsByColorId(colorId:number): Observable<ListResponseModel<Car>> {//new
    
    let newPath = this.apiUrl + "cars/getcarsbycolorid?colorId=" + colorId;//new

    return this.httpClient.get<ListResponseModel<Car>>(newPath);

  }
}
