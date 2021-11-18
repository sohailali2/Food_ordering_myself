import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../app.service';
import { DataModel } from '../model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public appSettingService: AppSettingsService) { }
  cartData: DataModel[] = [];

  ngOnInit(): void {
    this.cartData = this.appSettingService.cartData;
  }

}
