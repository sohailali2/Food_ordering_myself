import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public myNumber:any =20;
  isVisible : boolean =true;
  get counter(){
    return this.myNumber;
  }
  set counter(value){
    this.myNumber=value;
  }
  increment(){
    this.myNumber++;
  }
  decrement(){
    this.myNumber--;
  }
  switchVisiblity(){
    this.isVisible=this.isVisible;
  }
  
  constructor() { }
}
