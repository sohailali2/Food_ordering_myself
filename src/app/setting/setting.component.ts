import { Component, OnInit } from '@angular/core';
import { DataModel } from '../model';
import { DataService } from './data.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  public data: DataModel[] = [];
  datae:any;
  appSettingService: any;
  constructor(private user:DataService) {
    this.user.getData().subscribe(data=> {
      console.warn(data)
      this.datae=data;
    })
   }

   ngOnInit(): void {
    this.data = this.appSettingService.onGet();
  }
  addCart(display:DataModel)
  {
    this.appSettingService.addItem(display);
  }

  

}
