import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { dbuser } from '../model/dbuser.model';
import {AuthService} from '../services/auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user = new dbuser();
  loginErr = 'Invalid email and or password.';
  userForm:any;

  loginn= true;
  erreur!: number;
constructor(private router: Router, private authService : AuthService){}
dbuser:any;
 async ngOnInit(){
    const rep = await fetch("http://127.0.0.1:8000/login");
    if (rep.ok){
      rep.json().then(data =>{
        this.dbuser =data;})}
  
    
      }


  myimage:string="assets/photo/pic/385870.jpg";
compte(){
  this.router.navigate(["/compte"])
}
async login(){
 
  
      for (let i = 0; i < this.dbuser.length; i++) {
   
    
        if(this.user.email == this.dbuser[i].email && this.user.password == this.dbuser[i].password){
          console.log("successfull")
          this.loginn = true;
          localStorage.setItem("isloggedIn","true");
          this.router.navigate(["/compte"])
}
        
        else if(this.user.email != this.dbuser[i].email && this.user.password != this.dbuser[i].password) {
          this.loginn = false;
        }
        else if(this.user.email == null && this.user.password == null){
          
        }
}
if(this.user.email == "admin@gmail.com" && this.user.password == "admin"){
  console.log("admin successfull !")
  this.loginn = true;
  localStorage.setItem("isloggedIn","true");
  this.router.navigate(["/allproduct"]);
}
}


}
