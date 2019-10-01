import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { Category } from './category';
import { Supplier } from './supplier';

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

  public create(product: Product, category: number, supplier: number) {
    return this.http.post<Product>(this.API + "/createProduct/" + category + "/" + supplier, product);
  }

  public update(product: Product, category: number, supplier: number) { 
    return this.http.put<Product>(this.API + "/updateProduct/" + category + "/" + supplier, product);
  }

  public delete(id: number) {
    return this.http.delete(this.API + "/product/" + id);
  }

}
