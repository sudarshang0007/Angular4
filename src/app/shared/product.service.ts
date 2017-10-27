import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


import {Iproduct} from '../interface/Iproduct';

@Injectable()
export class ProductService {

  private productUrl = './api/products/products.json';

  constructor(private _http: HttpClient) {}

  getProducts(): Observable<Iproduct[]> {
    return this._http.get<Iproduct[]>(this.productUrl);
  }

  getServiceProduct(): Observable<Iproduct[]> {
    console.log('Inside Product Service');
    return this._http.get<Iproduct[]>(this.productUrl)
      .do(data => console.log('data'))
      .catch(this.handleError);
  }

   handleError(err: HttpErrorResponse) {
    return Observable.throw(err.message);
  }
}
