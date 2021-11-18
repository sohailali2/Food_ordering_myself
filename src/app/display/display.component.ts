import { Component, OnInit } from '@angular/core';
import { DataModel } from '../model';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../setting/data.service';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  public id?: number;
  public data: any={};

  constructor(private route:ActivatedRoute,public dataService:DataService) { }

  ngOnInit(): void {
   this.id = +this.route.snapshot.params['id'];
     this.dataService.getDataById(this.id).subscribe(data=> {
      console.warn(data)
      this.data=data;
    })
    
    console.log(this.data);
  }

}
