import { Injectable } from '@angular/core';
import { Products } from 'src/app/mocks/products/products.mock';
import { ProductService } from '../products/product.service';

//je créer une interface pour enregistrer mes données
export interface BasketProduct {
  product: Products;
  totalPrice: number;
  productQuantity: number;

}


@Injectable({
  providedIn: 'root'
})


export class BasketService {

  totalPrice = 0;
  productQuantity = 1;
  product!: Products;

  constructor(private productsService: ProductService) { }

  // Fonction qui parse le panier enregistre
  private saveBasket(basket: BasketProduct[]) {
    localStorage.setItem('basket', JSON.stringify(basket));

  }

  //la fonction pour créer mon panier
 private createBasket() {
    const newBasket: [] = [];
    const stringifyBasket = JSON.stringify(newBasket);
    localStorage.setItem('basket', stringifyBasket);
  }

  // La fonction pour récupérer mon panier 
  getBasket() {
    const basket = localStorage.getItem('basket');

    if (basket) {
      return JSON.parse(basket);
    } else {
      this.createBasket();
      this.getBasket();
    }
  }


  //la fonction pour ajouter des articles au panier
  addProductToBasket(basketProduct: BasketProduct) {
    const basket = this.getBasket();
    const productExist = basket.find((Product: BasketProduct) => Product.product.id === basketProduct.product.id);

    if (productExist) {
      //on récupère l'index du produit si il existe
      const basketProductId = basket.indexOf(productExist);
      //on modifie la quantité de ce produit
      basket[basketProductId].productQuantity += basketProduct.productQuantity;
    } else {
      basket.push(basketProduct);
    }
    //j'enregistre
    this.saveBasket(basket);
    
  }

  //La fonction pour avoir le total de mon panier
  getTotalBasket() {
    
  }

}
