import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

export interface customerSchema {
  id: string;
  name: string;
  address: string;
  salary: number;
}

const ELEMENT_DATA: customerSchema[] = [
  {id: 'C001', name: 'Nimal', address: 'Colombo', salary: 20000},
  {id: 'C002', name: 'Bandara', address: 'Panadura', salary: 25000},
  {id: 'C003', name: 'Wasantha', address: 'Kalutara', salary: 30000},
  {id: 'C004', name: 'Namal', address: 'galle', salary: 45000},
  {id: 'C005', name: 'Samantha', address: 'Matara', salary: 48000},
];

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'address', 'salary', 'operate'];
  dataSource = ELEMENT_DATA;


  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  loadData(id: string) {
    /*this._router.navigate(['/customer/detail', id]).then(response=>{
      console.log('success');
    }, error=>{
      console.log(error);
    })*/
    this._router.navigate([]).then(response=>{
      window.open('/customer/detail/'+id, '_blank');
    });
  }
}
