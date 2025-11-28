import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../Interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsAPi {
  http = inject(HttpClient);
  private baseUrl = 'https://basic-crud-operations-production.up.railway.app/products/';
  getProducts() {
    return this.http.get<{ message: string; Products: Product[] }>(this.baseUrl);
  }
  addProduct(data: Partial<Product>) {
    return this.http.post(this.baseUrl, data);
  }
  updateProduct(id: string, data: Partial<Product>) {
    data._id = id;
    const requestBody={id, ...data};
    return this.http.put(this.baseUrl, requestBody);
  }
  deleteProduct(id: string) {
    return this.http.delete(this.baseUrl+id); 
  }
}
