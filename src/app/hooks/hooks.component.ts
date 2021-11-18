import { Component, OnInit ,OnChanges,DoCheck,SimpleChange, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit ,OnChanges,DoCheck {
   
  @Input() myNumber :any;  
    constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
    OnChanges(changes:SimpleChange) {
    const newNumberChanges:SimpleChange=this.myNumber;
  }

  ngOnInit() {
    console.log("ngOnInit() -> value:",this.myNumber);
  }

  ngDoCheck(){
    console.log("ngDoCheck() -> value:",this.myNumber);

  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit() -> only gets called once ");
    
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked() -> Its gets called only once after ngAfterContentChecked");

  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit() -> Its gets called only once after ngAfterViewInit");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy() -> component has been DESTROYED!")
  }

}
