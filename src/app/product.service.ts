import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private API: string;
  private PRODUCTS_API: string;

  constructor(private http: HttpClient) {
    this.API = 'http://localhost:8080';
    this.PRODUCTS_API = this.API + '/dashboard';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.PRODUCTS_API);
  }

  public get(id: number) {
    return this.http.get(this.API + "/" + id);
  }

  public create(product: Product) {
    return this.http.post<Product>(this.API + "/createProduct", product);
  }

  public update() { }

  public delete(id: number) {
    return this.http.delete(this.API + "/" + id);
  }

}
