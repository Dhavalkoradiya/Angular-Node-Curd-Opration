import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from './product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiBaseURL = 'http://localhost:1234/products/';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // Get list of products from remote server.
  productList(): Observable<Product[]> {
    return this.http.get<Product[]>( apiBaseURL + 'list' );
  }

  // Send product data to remote server to create it.
  productCreate(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>( apiBaseURL + 'create', product, httpOptions);
  }

  // Get a product details from remote server.
  productDetail(id: string): Observable<Product> {
    return this.http.get<Product>( apiBaseURL + 'id/' + id);
  }

  // Send product data to remote server to update it.
  productUpdate(product: Product, productID: number): Observable<Product> {
    return this.http.put<Product>( apiBaseURL + 'update/' + productID, product, httpOptions);
  }

  // Send product ID to remote server to delete it.
  productDelete(productID: string) {
    return this.http.delete<Product>( apiBaseURL + 'delete/' + productID);
  }
}
