import { StoreData } from './../../viewModels/store-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  storeInfo: StoreData;
  isImageShown: boolean = true;
  togglebuttonTxt: string = '';

  constructor() {
    this.storeInfo = new StoreData('ITI Store', 'https://picsum.photos/400/200', ['Cairo', 'Alex', 'Qena'])
  }

  ngOnInit(): void {
  }

  toggleImage(){
    this.isImageShown = !this.isImageShown;
    
    this.togglebuttonTxt = this.isImageShown ? 'Hide Image' : 'Show Image';
  }

}
