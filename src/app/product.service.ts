import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/products.json';


  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.apiUrl);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

  updateProduct(id: Number, Product: any){
    const url = `https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`;
    return this.http.put(url, Product);
      
    
    }
  

  deleteProduct(id: number): Observable<any>{
    const url = `https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`;
    return this.http.delete(url);
  }
}
