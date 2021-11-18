import { Component, OnInit, ViewChild } from '@angular/core';
import {AppSettingsService} from '../app.service'
import { DataModel } from '../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data: DataModel[] = [];
  constructor(public appSettingService:AppSettingsService) { }

  ngOnInit(): void {
    this.data = this.appSettingService.onGet();
  }
  addCart(burger:DataModel)
  {
    burger.cart = "Added";
    this.appSettingService.addItem(burger);
  }
}
