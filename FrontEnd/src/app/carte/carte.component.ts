import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  constructor() { }

 products:any;
  async ngOnInit() {
   const rep = await fetch("http://127.0.0.1:8000/allproduct");
   if (rep.ok){
     rep.json().then(data =>{
       this.products = data;
     })
   }
  }


}
