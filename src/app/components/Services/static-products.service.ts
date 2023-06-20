import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductsService {
  private prdList: IProduct[] = [];

  constructor() {
    this.prdList = [
      {
        id: 100,
        name: 'Lenovo Thinkpad laptop',
        price: 1000000000,
        quantity: 1,
        imgUrl: 'https://fakeimg.pl/200x100/',
        categoryId: 1,
      },
      {
        id: 200,
        name: 'Apple MacBok laptop',
        price: 200000000,
        quantity: 0,
        imgUrl: 'https://fakeimg.pl/200x100/',
        categoryId: 1,
      },
      {
        id: 300,
        name: 'Lenovo tap 2',
        price: 3000,
        quantity: 10,
        imgUrl: 'https://fakeimg.pl/200x100/',
        categoryId: 2,
      },
      {
        id: 400,
        name: 'Samsong Tap',
        price: 4000,
        quantity: 2,
        imgUrl: 'https://fakeimg.pl/200x100/',
        categoryId: 2,
      },
      {
        id: 500,
        name: 'Samsong Note 10',
        price: 5000,
        quantity: 0,
        imgUrl: 'https://fakeimg.pl/200x100/',
        categoryId: 3,
      },
      {
        id: 600,
        name: 'Samsong 522 Ultra',
        price: 60000000,
        quantity: 1,
        imgUrl: 'https://fakeimg.pl/200x100/',
        categoryId: 3,
      },
    ];
  }

  getAllproducts(): IProduct[] {
    return this.prdList;
  }

  getProductByCatId(catId: number): IProduct[] {
    if (catId == 0) return this.prdList;
    else
      return this.prdList.filter(
        (prd) => prd.categoryId == catId
      );
  }

  getProductById(prdId: number): IProduct {
    return this.prdList.find((prd) => prd.id == prdId)!;

    // let foundProduct = this.prdList.find((prd) => prd.id == prdId);
    // return foundProduct? foundProduct: null;
  }

  addNewProduct(newPrd: IProduct){
    this.prdList.push(newPrd);
  }
}
