import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private API: string;
  private SUPPLIERS_API: string;

  constructor(private http: HttpClient) {
    this.API = 'http://localhost:8080';
    this.SUPPLIERS_API = this.API + '/getSuppliers';
  }

  findAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.SUPPLIERS_API);
  }

  delete(supplierId: number) {
    return this.http.delete(this.API + "/supplier/" + supplierId);
  }
}