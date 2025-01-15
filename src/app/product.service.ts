import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app';
  private dataSubject = new Subject();


  constructor(private http: HttpClient) { }

 
  getAllProducts() {
    return this.http.get(`${this.apiUrl}/.json` );
  }

  addProduct(product: any) {
    product.price = parseFloat(product.price).toFixed(2);
    return this.http.post(`${this.apiUrl}/.json`, product);
  }

  updateProduct(id: string, product: any): Observable<any> {
    product.price = parseFloat(product.price).toFixed(2);
    return this.http.put(`${this.apiUrl}/${product.id}.json`, product)
  }

  deleteProduct(id: string){
    
    return this.http.delete(`${this.apiUrl}/${id}.json`);
  }
}
