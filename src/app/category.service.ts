import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API: string;

  constructor(private http: HttpClient) {
    this.API = 'http://localhost:8080';
  }

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.API}/getCategories`);
  }

  create(category: Category) {
    return this.http.post<Category>(`${this.API}/createCategory`, category);
  }

  update(category: Category, categoryId: number) { 
    return this.http.put<Category>(`${this.API}/updateCategory/${categoryId}`, category);
  }

  delete(categoryId: number) {
    return this.http.delete(`${this.API}/category/${categoryId}`);
  }

}