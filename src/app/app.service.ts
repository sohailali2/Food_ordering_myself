import { style } from '@angular/animations';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataModel } from './model';
@Injectable({
    providedIn: 'root'
})
export class AppSettingsService {

    cartData: DataModel[] = [];
    cart: BehaviorSubject<DataModel[]>
    constructor()
    {
        this.cart = new BehaviorSubject(this.cartData);
    }
    addItem(item:DataModel)
    {
        this.cartData.push(item);
        this.cart.next(this.cartData);
    }
    data: DataModel[] = [
        {
            id: 1,
            name: "Chicken Burger",
            image: ('../../assets/images/70.png'),
            description: 'Tender and juicy chicken patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more.		',
            price: 149,
            foodtag: ('../../assets/images/nonveg.svg'),
            cart:"Add",
        },
        {
            id: 2,
            name: "French Indian  ",
            image: ('../../assets/images/bu2.png'),
            description: 'The worlds favorite Indian burger! Crunchy potato and peas patty topped with veg sauce, ketchup, tomatoes and onions',
            price: 135,
            foodtag: ('../../assets/images/Veg.svg'),
            cart:"Add",
        },
        {
            id: 3,
            name: "Chicken French",
            image: ('../../assets/images/5294.png'),
            description: 'Tender and juicy chicken patty cooked to perfection, with creamy mayonnaise and crunchy lettuce adding flavour to each bite.	',
            price: 170,
            foodtag: ('../../assets/images/nonveg.svg'),
            cart:"Add",
        },
        {
            id: 4,
            name: "Barack Chicken",
            image: ('../../assets/images/lo.png'),
            description: 'Tender and juicy chicken patty cooked to perfection, with creamy mayonnaise and crunchy lettuce adding flavour to each bite.	',
            price: 180,
            foodtag: ('../../assets/images/Veg.svg'),
            cart:"Add",
        },
        {
            id: 5,
            name: "Sandwich Juciy",
            image: ('../../assets/images/menu5.jpg'),
            description: "Too hot to handle chicken burger.You are warned!",
            price: 100,
            foodtag: ('../../assets/images/Veg.svg'),
            cart:"Add",
        },
        {
            id: 6,
            name: "McChicken Pizza",
            image: ('../../assets/images/pizza.jpg'),
            description: 'Tender and juicy chicken patty cooked to perfection, with creamy mayonnaise and crunchy lettuce adding flavour to each bite.	',
            price: 90,
            foodtag: ('../../assets/images/Veg.svg'),
            cart:"Add",
        },
        {
            id: 7,
            name: " Whopper Burger",
            image: ('../../assets/images/65.png'),
            description: 'The worlds favorite Indian burger! Crunchy potato and peas patty topped with veg sauce, ketchup, tomatoes and onions',
            price: 150,
            foodtag: ('../../assets/images/Veg.svg'),
            cart:"Add",
        },
        {
            id: 8,
            name: " Black Icecream ",
            image: ('../../assets/images/menu8.jpg'),
            description: "Our signature blackcurent icecream.",
            price: 70,
            foodtag: ('../../assets/images/Veg.svg'),
            cart:"Add",
        },
    ];
    onGet(){
        return this.data;
      }
    
      onGetDataModel(id:number){
        return this.data.find(burger=>burger.id === id);
      }
   
}