import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ICategory } from 'src/app/models/icategory';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss'],
})
export class OrderMasterComponent implements OnInit, AfterViewInit {
  catList: ICategory[];
  selectedCatId: number = 0;
  recievedOrderTotalPrice: number = 0;

  // clientNameInpElem: ElementRef = new ElementRef(); //worst sol to initialize object, it needs informations that I dont have!
  //clientNameInpElem: ElementRef = {} as ElementRef; // better sol
  //clientNameInpElem?: ElementRef; //optinal more better sol
  //clientNameInpElem: ElementRef | undefined = undefined; // optional same as before
  // clientNameInpElem: ElementRef | null = null;
  @ViewChild('clientNameInp') clientNameInpElem!: ElementRef; // Non-null assertion operator

  @ViewChild(ProductListComponent) prdListCompObj!: ProductListComponent;

  constructor() {
    this.catList = [
      { id: 1, name: 'Laptops' },
      { id: 2, name: 'Tablets' },
      { id: 3, name: 'Mobiles' },
    ];
  }
  ngAfterViewInit(): void {
    this.clientNameInpElem.nativeElement.value = 'Your Name Here';
    this.clientNameInpElem.nativeElement.style.border = '2px solid red';
  }

  ngOnInit(): void {}

  onTotalPriceChanged(totalPrice: number) {
    this.recievedOrderTotalPrice = totalPrice;
  }

  completeOrder() {
    // for test
    // this.prdListCompObj.prdList[0].quantity-=1;
  }
}
