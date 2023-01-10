import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/mocks/products/products.mock';
import { BasketService } from 'src/app/services/basket/basket.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  product?: Products;
  quantity: number = 1;
  //j'appelle les éléments qui vont me servir a créer des fonctions dans ce fichier
  constructor(
    private basketService: BasketService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    ) {}



  //j'ai créé des fonctions dans le basket service, maintenant il faut que je les utilise ici


  
  // pour ajouter au panier via la fonction qu'on a créé dans le service qui s'appelle  addProductToBasket
  addToBasket() {
    // on doit créer une condition au cas ou le produit n'existe pas
    //on lui dit de rien retourner quand le produit n'existe pas
    if(this.product) return;


  }
}
      