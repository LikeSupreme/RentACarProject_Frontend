import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/modules/car';
import { ListResponseModel } from 'src/app/modules/listResponseModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  carResponseModel: ListResponseModel<Car> = {
    data: this.cars,
    message: "",
    success: true
  }

  dataLoaded = false;

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
}
