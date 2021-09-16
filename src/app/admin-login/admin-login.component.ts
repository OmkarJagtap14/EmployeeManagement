import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username : string = "admin";
  password : string = "a";
  errorMsg : string = "Invalid Credentials";

  constructor(private router : Router) {
    
   }

  ngOnInit(): void {
  }

  onSubmit(adminLoginForm : NgForm) : void {
    // debugger;
    //console.log(adminLoginForm.value);
   // console.log(adminLoginForm.value.username);
    if((this.username == adminLoginForm.value.username && this.password == adminLoginForm.value.password)){
        alert("Loged in");
        this.router.navigate(['/dashboard']);
        // this.router.navigate([{outlets: { home: 'dashboard'}}]);
       
    }else{
      alert(this.errorMsg);
      location.reload();
    }

  }

}
