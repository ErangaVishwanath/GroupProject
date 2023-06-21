import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit  {
  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues: { location: string; }) {
    console.log(formValues);
    this.apixuService.getWeather(formValues.location).subscribe(data => this.weatherData = data)
    console.log(this.weatherData);

  }

  
  public weatherSearchForm!: FormGroup;
  public weatherData: any;
  constructor(private formBuilder: FormBuilder, private apixuService: ApixuService) {}


  public cityName!: string;
  public description!: string;
  public currentTemperature!: number;
  public minTemperature!: number;
  public maxTemperature!: number;    
  public icon!: string;
}
