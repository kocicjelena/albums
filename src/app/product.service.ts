import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { map } from 'rxjs/operators';
//import 'rxjs/operators';
//import 'rxjs/add/operator;
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IProduct } from './product';

@Injectable()
export class ProductService {
   private _producturl='https://my-json-server.typicode.com/kocicjelena/pictures/albums';
    private _userurl='https://my-json-server.typicode.com/kocicjelena/pictures/users';
   constructor(private _http: Http){}
   httpdata;
   getproducts(): Observable<IProduct[]> {
      return this._http.get(this._producturl)
      .map((response: Response) => <IProduct[]> response.json())
      .do((data) => {this.displaydata(JSON.stringify(data));});
       
      //.do((data) => {JSON.stringify(data)});
     // .do((data) => {this.displaydata(data);});
   }
      getproduct(): Observable<IProduct[]> {
      return this._http.get(this._producturl)
      .map((response: Response) => <IProduct[]> response.json());}
  DeleteUser(id){
 return this._http.delete('this._userurl');
}
       Find(){
       console.log(JSON.stringify(this.httpdata));window.location.href = '/photos';return JSON.stringify(this.httpdata);} 
      //.do((data) => {JSON.stringify(data)});
     // .do((data) => {this.displaydata(data);});
   
  // getPrint(): {return JSON.stringify(data);}
    displaydata(data) {this.httpdata = data;}
}
