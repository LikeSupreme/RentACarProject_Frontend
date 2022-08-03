import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/modules/brand';
import { ListResponseModel } from 'src/app/modules/listResponseModel';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Brand[] = [];
  brandResponseModel: ListResponseModel<Brand> = {
    data: this.brands,
    message: "",
    success: true
  }

  dataLoaded = false;

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getCars().subscribe(response=>{
      this.brands = response.data;
      this.dataLoaded = true;
    })
  }
}
