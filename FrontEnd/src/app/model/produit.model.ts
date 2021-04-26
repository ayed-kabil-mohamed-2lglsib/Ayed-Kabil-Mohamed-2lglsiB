export class Produit {
    id_product: number;
    Model : string;
    Price : number;
    Description : string;
    
    constructor(Model: string, Price : number, Description : string , id_product : number ) {
      this.id_product=id_product;
      this.Model = Model ;
      this.Price = Price;
      this.Description = Description;
    }
}