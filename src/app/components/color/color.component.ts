import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/modules/color';
import { ListResponseModel } from 'src/app/modules/listResponseModel';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: Color[] = [];
  filterText = "";
  currentColor:Color;
  colorResponseModel: ListResponseModel<Color> = {
    data: this.colors,
    message: "",
    success: true
  }

  dataLoaded = false;

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
      this.dataLoaded = true;
    })
  }


  setCurrentColor(color: Color) {//new
    this.currentColor = color;
  }

  getCurrentColorClass(color: Color) {
    if (color == this.currentColor) {
      return "list-group-item active";
    }
    else {
      return "list-group-item";
    }
  }

  getAllColorClass(){
    if (!this.currentColor) {
      return "list-group-item active";
    }
    else {
      return "list-group-item";
    }
  }







}
