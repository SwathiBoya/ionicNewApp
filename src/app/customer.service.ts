import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor() { }
  customers: any = [
    {
      id:1,
      name:'Swathi',
      email:'swathi@gmail.com',
      phone:'9999999999',
      address:'India'
    },
    {
      id:2,
      name:'Divya',
      email:'divya@gmail.com',
      phone:'992343499',
      address:'India'
    }
  ];
  getCustomer(){
    return this.customers;
  }
}
