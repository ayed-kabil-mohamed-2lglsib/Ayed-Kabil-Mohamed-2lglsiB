import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits : Produit[];
  constructor() {
    this.produits = [
      {id_product : 1 ,Model : "vespa sprint 2017", Price : 3000 , Description : "azeazeaz"},
      {id_product : 2 , Model : "vespa sprint 2018", Price : 5000 , Description : "test 123"}

       ];
       
   }
   listeProduits():Produit[]
 {
     return this.produits;
   }
   addProduit(produit : Produit){
     this.produits.push(produit);   }

    supprimerProduit(prod: Produit){ 
   const index = this.produits.indexOf(prod, 1); 
   if (index > -1) { 
     this.produits.splice(index, 1); 
   }
   
   
 }
 
}

