import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { TranslateService } from './translate.service';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  
  
  

  constructor(private productService: ProductService, private translateService: TranslateService){
    this.translateService.setLanguage('en');
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((product: Product[]) => {
      console.log(product);
    });

    this.productService.addProduct({name: 'New Product', description: 'New Product Description', price: 100}).subscribe(response => {
      console.log(response);
    });

    this.productService.updateProduct('1', {name: 'New Product', description: 'New Product Description', price: 100}).subscribe(response => {
      console.log(response);
    });

    this.productService.deleteProduct('1').subscribe(response => {
      console.log(response);
    });
  }






      

  onLangChange(lang: String) {
    this.translateService.setLanguage(lang);
    
  }
  title = 'dolgozat';
}
