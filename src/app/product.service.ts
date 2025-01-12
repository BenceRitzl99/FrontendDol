import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/products.json';


  constructor(private db: AngularFireDatabase, private http: HttpClient) { }

  // getAllProducts(): Observable<any> {
  //   return new Observable((observer) => {
  //     fetch(this.apiUrl)
  //       .then(response => response.json())
  //       .then(data => {
  //         observer.next(data);  
  //         observer.complete();
  //       })
  //       .catch(error => {
  //         observer.error(error);  
  //       });
  //   });
  // }

  // addProduct(product: any): Observable<any> {
  //   return this.http.post(this.apiUrl, product);
  // }

  // updateProduct(id: Number, Product: any){
    
    
    
      
    
  //   }
  

  // deleteProduct(id: number): Observable<any>{
  //   const url = `https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`;
  //   return this.http.delete(url);
  // }
  getAllProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

  updateProduct(id: string, product: any): Observable<any> {
    const url = `https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`;
    return this.http.put(url, product)
  }

  deleteProduct(id: string): Observable<any> {
    const url = `https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/${id}.json`;
    return this.http.delete(url);
  }
}
