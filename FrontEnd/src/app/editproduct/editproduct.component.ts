import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  url!:string;
  id:any;
  product:any;
  model!:string ;
  description!:string;
  price!:string;
  Editsucc = 'Product successfully updated';
  edit=false;
  constructor(private router: ActivatedRoute) { 
    
  }

  async ngOnInit(){
    this.router.queryParams.subscribe(async params=>{
      this.id=params["id"];
      const rep = await fetch("http://127.0.0.1:8000/product?id="+this.id);
    if (rep.ok){
      rep.json().then((data)=>{
        this.model=data[0].Model;
        this.description=data[0].Description;
        this.price=data[0].Price;
        this.url=data[0].Image;
        console.log(this.product);
      
      })
    }
      })
    
  }
  getmodel(){
return this.model;
  }
  getdescription(){
return this.description;
  }
  getprice(){
return this.price;
  }

  async EditProduct(){ 

    var model = (<HTMLInputElement>document.getElementById("model")).value
    var price = (<HTMLInputElement>document.getElementById("price")).value
    var  dsp = (<HTMLInputElement>document.getElementById("dsp")).value
    var body = `{"model":"${model}" , "price":"${price}" , "dsp":"${dsp}" , "img":"${this.url}"}`
    const rep = await fetch("http://127.0.0.1:8000/edit?id="+this.id , {
      method:"POST",
      body : body
    })
    if (rep.ok){
      rep.json().then((data)=>{
        console.log(data)
        this.edit=true;
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
