import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductDetailsPhotos, PRODUCTSDETAILS } from 'src/app/mocks/products/product-details-photos.mock';
import { ProductDetailsPhotosService } from 'src/app/services/product-details-photos.service';

@Component({
  selector: 'app-product-details-photos',
  templateUrl: './product-details-photos.component.html',
  styleUrls: ['./product-details-photos.component.css']
})
export class ProductDetailsPhotosComponent {
  detail?: ProductDetailsPhotos;

  // imgSrc = '';
  // imageButton = [
  //   {
  //     src: 
  //   }
  // ]
  // imgButtons: ProductDetailsPhotos[] = PRODUCTSDETAILS;
  // imageSource : 


  constructor(
    private detailsService : ProductDetailsPhotosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(){
    this.initDetail();
  }
  

  initDetail(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const foundDetail = this.detailsService.getDetailPhoto(id);
    if(foundDetail){
      this.detail = foundDetail;
    }
    else{
      this.router.navigate(['not-found'])
    }
  }
}
