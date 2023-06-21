import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-admin',
  templateUrl: './notification-admin.component.html',
  styleUrls: ['./notification-admin.component.css']
})
export class NotificationAdminComponent {
  admin:any[]| undefined;
  url:string='http://localhost:8080/admin/get/';

  // constructor(private service: AppService, private router:Router){
    
  // }
}
