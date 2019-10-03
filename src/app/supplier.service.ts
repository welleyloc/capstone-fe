import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private API: string;

  constructor(private http: HttpClient) {
    this.API = 'http://localhost:8080';
  }

  findAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.API}/getSuppliers`);
  }

  create(supplier: Supplier) {
    return this.http.post<Supplier>(`${this.API}/createSupplier`, supplier);
  }

  update(supplier: Supplier, supplierId: number) { 
    return this.http.put<Supplier>(`${this.API}/updateSupplier/${supplierId}`, supplier);
  }

  delete(supplierId: number) {
    return this.http.delete(`${this.API}/supplier/${supplierId}`);
  }
}