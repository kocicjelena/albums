import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IInventory } from './inventory';
import { InventoryService } from './inventory.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
@Component ({
   selector: 'my-inv',
   templateUrl: './inventory.component.html',
   providers: [InventoryService]
})
export class AppInventory implements OnInit, OnDestroy {
  
  id: number;
  private sub: any;
  inventories: IInventory[];
  constructor(private route: ActivatedRoute, private _inventory: InventoryService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
 this._inventory.getinventories()
      .subscribe(inventories => this.inventories = inventories);
       // In a real app: dispatch action to load the details here.
    });
  }
   
   
   
   //ngOnInit() : void {
     // this._product.getproducts()
    //  .subscribe(iproducts => this.iproducts = iproducts);
   //}
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  public currentImage;

public setImage = (id) => {
  if (this.currentImage === id) return;
  this.currentImage = id;
}
}
