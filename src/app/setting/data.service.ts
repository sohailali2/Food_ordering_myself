import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { DataModel } from './modules';
@Injectable({
  providedIn: 'root'
})
export class DataService {

   cartData: DataModel[] =[];
   cart!: BehaviorSubject<DataModel[]>;


  constructor(private http: HttpClient) { 
    this.cart = new BehaviorSubject(this.cartData)
  }
  addItem(item:DataModel)
    {
        this.cartData.push(item);
        this.cart.next(this.cartData);
    }
  getData()
  {
      let url="https://jsonplaceholder.typicode.com/todos/";
      return this.http.get(url);
  } 
  getDataById(id:number){
    let url=`https://jsonplaceholder.typicode.com/todos/${id}`;
    return this.http.get(url);

  }
  data: DataModel[] = [];
}