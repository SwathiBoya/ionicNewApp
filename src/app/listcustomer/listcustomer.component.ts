import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.scss'],
})
export class ListcustomerComponent implements OnInit {

  constructor( private customerService : CustomerService ) { }
  list = [];
  ngOnInit() {
    this.list = this.customerService.getCustomer();
  }
  deleteCustomer(){

  }
  selectCustomer(){

  }
}
