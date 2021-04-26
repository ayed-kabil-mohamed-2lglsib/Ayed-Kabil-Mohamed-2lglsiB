import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})

export class AddproductComponent implements OnInit {
  
  
  constructor() { }
  url!:string;
  Addsucc = 'Product successfully added';
  add=false;

  ngOnInit(): void{
  }
   async addProduct(){ 
    var model = (<HTMLInputElement>document.getElementById("model")).value
    var price = (<HTMLInputElement>document.getElementById("price")).value
    var  dsp = (<HTMLInputElement>document.getElementById("dsp")).value
    var body = `{"model":"${model}" , "price":"${price}" , "dsp":"${dsp}" , "img":"${this.url}"}`
    const rep = await fetch("http://127.0.0.1:8000/addproduct" , {
      method:"POST",
      body : body
    })
    if (rep.ok){
      rep.json().then((data)=>{
        console.log(data)
        this.add=true;
      })
    }
  }
  onSelectFile(event:any){
    console.log("test")
    if(event.target.files && event.target.files[0]){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = async (data) => {
        this.url = data.target?.result as string;
        console.log(this.url)
      }
    }

  }

}
