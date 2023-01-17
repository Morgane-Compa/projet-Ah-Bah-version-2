import { Injectable } from '@angular/core';
import { ProductDetailsPhotos, PRODUCTSDETAILS } from '../mocks/products/product-details-photos.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsPhotosService {

  constructor() { }
  getDetailsPhotos():ProductDetailsPhotos[]{
    return PRODUCTSDETAILS;
  }

  getDetailPhoto(id:number) : ProductDetailsPhotos | undefined {
    return PRODUCTSDETAILS.find(details => details.id === id)
  }

}
