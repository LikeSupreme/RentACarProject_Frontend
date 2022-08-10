import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/modules/carDetail';
import { ListResponseModel } from 'src/app/modules/listResponseModel';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails: CarDetail[] = [];
  filterText="";
  carDetailReponseModel: ListResponseModel<CarDetail> = {
    data: this.carDetails,
    message: "",
    success: true
  }

  dataLoaded = false;

  constructor(private carDetailService:CarDetailService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe(response=>{
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }

}
