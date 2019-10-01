import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API: string;
  private CATEGORIES_API: string;

  constructor(private http: HttpClient) {
    this.API = 'http://localhost:8080';
    this.CATEGORIES_API = this.API + '/getCategories';
  }

  public findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.CATEGORIES_API);
  }

  public delete(categoryId: number) {
    return this.http.delete(this.API + "/category/" + categoryId);
  }

}