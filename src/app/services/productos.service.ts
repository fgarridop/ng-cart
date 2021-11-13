import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoInterface } from '../interfaces/producto-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}

  getProductos(): Observable<ProductoInterface[]> {
    return this.http.get<ProductoInterface[]>(
      'https://fakestoreapi.com/products'
    );
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }

  getProductoByCat(cat: string): Observable<ProductoInterface[]> {
    return this.http.get<ProductoInterface[]>(
      `https://fakestoreapi.com/products/category/${cat}`
    );
  }
}
