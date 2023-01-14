import { Component } from '@angular/core';
import { Products } from 'src/app/mocks/products/products.mock';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  products: Products[]=[];

  constructor(private productService : ProductService){}

  ngOnInit(){
    this.products = this.getProducts();
  }

  getProducts(){
    return this.productService.getProducts();
  }

}
