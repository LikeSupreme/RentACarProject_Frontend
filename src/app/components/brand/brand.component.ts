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
  filterText = "";
  currentBrand: Brand;
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
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
      this.dataLoaded = true;
    })
  }

  setCurrentBrand(brand: Brand) {//new
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return "list-group-item active";
    }
    else {
      return "list-group-item";
    }
  }

  getAllBrandClass(){
    if (!this.currentBrand) {
      return "list-group-item active";
    }
    else {
      return "list-group-item";
    }
  }
}
