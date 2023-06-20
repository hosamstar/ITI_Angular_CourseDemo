import { ICategory } from './../../models/icategory';
import { IProduct } from './../../models/iproduct';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnChanges {
  prdList: IProduct[];
  prdListOfCategory: IProduct[] = [];
  @Input() sentCatId: number = 0;
  orderTotalPrice: number = 0;
  @Output() totalPriceChanged: EventEmitter<number>;
  orderDate: Date;

  constructor() {
    this.totalPriceChanged = new EventEmitter<number>();
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
    this.orderDate = new Date();
    this.prdListOfCategory = this.prdList;
  }
  ngOnChanges() {
    this.filterProductByCatID();
  }

  private filterProductByCatID() {
    if (this.sentCatId == 0) this.prdListOfCategory = this.prdList;
    else
      this.prdListOfCategory = this.prdList.filter(
        (prd) => prd.categoryId == this.sentCatId
      );
  }

  ngOnInit(): void {}

  buy(prdPrice: number, count: any) {
    // Convert any to integer
    //let itemsCount: number; // Usually doesn't work
    //itemsCount = Number(count);
    //itemsCount = count as number; // Usually doesn't work
    //itemsCount = +count; // Interesting and EASY !!

    this.orderTotalPrice += parseInt(count) * prdPrice;
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }

  // ChangeSelectedCatId() {
  //   this.selectedCatId = 1;
  // }

  prdTrackByFn(index: number, prd: IProduct): number {
    return prd.id;
  }
}
