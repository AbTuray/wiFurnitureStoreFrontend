import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {Environment} from '../enviroment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getBaseApi(){
    return this.environment.baseUrl;
  }

  constructor(
    private http: HttpClient,
    private environment: Environment
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.getBaseApi()}/products`);
  }
}
