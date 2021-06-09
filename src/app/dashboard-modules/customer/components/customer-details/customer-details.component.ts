import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customerId: string | null ='';

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(response=>{
      this.customerId = response.get('id');
    }, error => {
      console.log(error);
    })
  }

  navigateToRoute() {
    this._router.navigate(['/customer/detail/'+this.customerId+'/addressDetail']).then()
  }
}
