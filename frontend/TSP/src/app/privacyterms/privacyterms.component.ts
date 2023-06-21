import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-privacyterms',
  templateUrl: './privacyterms.component.html',
  styleUrls: ['./privacyterms.component.css']
})
export class PrivacytermsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  disabled=false;
  checked=false;

  onChange(event: any){
    console.log(event)
  }

}
