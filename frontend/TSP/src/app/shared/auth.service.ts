
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  fireauth: any;
  router: any;

  constructor(private http: HttpClient) { }

register(email:string,password:string){
  this.fireauth.createUserWithEmailAndPassword(email,password).then((res: any) => {
    alert('Register Successful');
    this.router.navigate(['/sign-in']);
    this.SendEmailForVarification(res.user)
  }).catch((err: any) => {
    alert(err.message);
    this.router.navigate(['/sign-up']);
  });
  
}



  forgotpassword(email: string){
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/VarifyEmailComponent'])
    },(err: any) => {
      alert('Something went wrong');
    });
  }

  SendEmailForVarification(user:any){
    user.SendEmailForVarification().then((result: any) => {
      this.router.navigate(['/verify-email']);
    }).catch((err: any) => {
      alert('Something Went Wrong. Not able to send Email');
    });

  }


   
}
