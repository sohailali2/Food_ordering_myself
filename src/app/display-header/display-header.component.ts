import { Component,Input, OnInit } from '@angular/core';
import { DataService } from '../setting/data.service';
@Component({
  selector: 'app-display-header',
  templateUrl: './display-header.component.html',
  styleUrls: ['./display-header.component.scss']
})
export class DisplayHeaderComponent implements OnInit {
  @Input() titleName: string | any;
  constructor(public apiService:DataService) { }

  ngOnInit(): void {
  }

}
