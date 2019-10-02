import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API}/dashboard`);
  }

  getById(id: number) {
    return this.http.get(`${this.API}/${id}`);
  }

  create(product: Product, categoryId: number, supplierId: number) {
    return this.http.post<Product>(`${this.API}/createProduct/${categoryId}/${supplierId}`, product);
  }

  update(product: Product, categoryId: number, supplierId: number) { 
    return this.http.put<Product>(`${this.API}/updateProduct/${categoryId}/${supplierId}`, product);
  }

  delete(id: number) {
    return this.http.delete(`${this.API}/product/${id}`);
  }

}
