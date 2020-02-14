import { Injectable, Input } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { map } from 'rxjs/operators';
//import 'rxjs/operators';
//import 'rxjs/add/operator;
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IInventory } from './inventory';

@Injectable()
export class InventoryService {
 
    private _inventoryurl='https://my-json-server.typicode.com/kocicjelena/pictures/photos/';
   constructor(private _http: Http){};
   httpdata;
   getinventories(): Observable<IInventory[]> {
      return this._http.get(this._inventoryurl)
      .map((response: Response) => <IInventory[]> response.json())
      .do((data) => {this.displaydata(JSON.stringify(data));});
      
   }
      getinventory(): Observable<IInventory[]> {
      return this._http.get(this._inventoryurl)
      .map((response: Response) => <IInventory[]> response.json());}

        
   displaydata(data) {this.httpdata = data;}
}
