import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regissucc = 'You have  successfully registered';
  regisfail = 'Please fill in the registration field'
  registerr:any;
myimage:string="assets/photo/test.jpg";
form!: FormGroup;
  constructor(private formBuilder: FormBuilder , private htttp: HttpClient) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group( {
      fullname: '',
      password:'',
      address:'',
      phone:'',
      email:''
    });
  }
  async register(){
  var fullname = (<HTMLInputElement>document.getElementById("fullname")).value
    var password = (<HTMLInputElement>document.getElementById("password")).value
    var  address = (<HTMLInputElement>document.getElementById("address")).value
    var  phone = (<HTMLInputElement>document.getElementById("phone")).value
    var  email = (<HTMLInputElement>document.getElementById("email")).value
    if (fullname == "" && password=="" && address=="" && phone == "" && email == ""){
      this.registerr=0;
      console.log(this.registerr);

    }else{
    var body = `{"fullname":"${fullname}" , "password":"${password}" , "address":"${address}" , "phone":"${phone}" , "email":"${email}"}`
    const rep = await fetch("http://127.0.0.1:8000/register" , {
    method:"POST",
    body : body
  })
  if (rep.ok){
    rep.json().then((data)=>{
      
      console.log(data);
      this.registerr=true;

    })
  }
}
 
}

}
