import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/mocks/products/products.mock';
import { BasketProduct, BasketService } from 'src/app/services/basket/basket.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product?: Products;
  img?: Products;
  img1?: Products;
  img2?: Products;
  img3?: Products;
  img4?: Products;
  img5?: Products;
  img6?: Products;
  img7?: Products;
  img8?: Products;
  img9?: Products;


  constructor (
    private ProductsService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(){
    this.initProduct();
    // this.details = this.getDetails();
  
  }
// Products
  initProduct(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const foundProduct = this.ProductsService.getProduct(id);
    if(foundProduct){
      this.product = foundProduct;
    }
    else{
      this.router.navigate(['not-found'])
    }
  }






// Ajouter un produit au panier
  // addToBasket(){
  //   // Si il n'y a pas de produit, ne fait rien
  //   if(!this.product) return;
  //   // Sinon on crée un nouvel objet de type BasketProduct
  //   const basketProduct: BasketProduct = {
  //     product: this.product,
  //     quantity: this.quantity
  //   }

  //   // On appel la fonction addProductToBasket() du BasketService
  //   this.basketService.addProductToBasket(basketProduct);
  // }


  
}
