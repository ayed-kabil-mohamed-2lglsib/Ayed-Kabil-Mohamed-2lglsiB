import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

  produits : Produit[]; 

  constructor(private produitService: ProduitService , private router : Router) { 
    this.produits = produitService.listeProduits();


  }
    product:any;
    supprimerProduit(prod: Produit) 
    { 
       //console.log(p);
       this.produitService.supprimerProduit(prod);

    } 
    async update(id:any){
      var tr = document.getElementById(id);
      
       
    }
 async delete(id:any){
   var tr = document.getElementById(id);
   tr?.remove();
   const  rep = await fetch("http://127.0.0.1:8000/delete?id="+id);
  if (rep.ok){
    rep.json().then(data =>{  
      console.log(data);
    })
  }
 }
  async ngOnInit() {
    const rep = await fetch("http://127.0.0.1:8000/allproduct");
    if (rep.ok){
    rep.json().then(data =>{
      this.product =data;
    })
    }
  }
  Goto(id:any){
   this.router.navigate(["/edit"],{
     queryParams:{
       id:id
     }
   })
  }

  myimage:String="assets/photo/logo.jpg";
  myimage1:String="assets/photo/1v.jpg";
  myimage2:String="assets/photo/vespaapayé.png";
  myimage3:String="assets/photo/2v.webp";
}
