import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppSettingsService } from '../app.service';
import { DataModel } from '../model';

@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.scss']
})
export class BurgerDetailComponent implements OnInit {
  public id?: number;
  public data: DataModel|undefined;

  constructor(private route:ActivatedRoute,public appSettingService:AppSettingsService) { }

  ngOnInit(): void {
   this.id = +this.route.snapshot.params['id'];
    this.data = this.appSettingService.onGetDataModel(this.id);
  }
  addCart(burger:DataModel)
  {
      burger.cart = "Added";
      this.appSettingService.addItem(burger);
  }
}
