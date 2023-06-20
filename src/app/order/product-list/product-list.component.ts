import { StaticProductsService } from 'src/app/components/Services/static-products.service';
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
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnChanges{
  prdListOfCategory: IProduct[] = [];
  @Input() sentCatId: number = 0;
  orderTotalPrice: number = 0;
  @Output() totalPriceChanged: EventEmitter<number>;
  orderDate: Date;

  constructor(private statiscPrdService: StaticProductsService,
              private router: Router) {
    this.totalPriceChanged = new EventEmitter<number>();

    this.orderDate = new Date();
  }

  ngOnInit(): void {
    this.prdListOfCategory = this.statiscPrdService.getAllproducts();
  }

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

  ngOnChanges(): void {
    this.prdListOfCategory = this.statiscPrdService.getProductByCatId(this.sentCatId);
  }

  prdTrackByFn(index: number, prd: IProduct): number {
    return prd.id;
  }

  openProductDetails(prdId: number){
    // this.router.navigateByUrl(`/products/${prdId}`);
    // this.router.navigateByUrl('/products/' + prdId);
    this.router.navigate(['products', prdId]);
  }
}
