import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  products: any[] = [];
  
  

  constructor(private ProductService: ProductService, private TranslateService: TranslateService){
    this.TranslateService.setLanguage('en');
  }

  ngOnInit(): void {
    this.ProductService.getAllProducts().subscribe(data => {
      

      this.products = Object.keys(data).map(key => {
        return {id: key, ...data};

      });
      
      
      
    })
  }

  onLangChange(lang: String) {
    this.TranslateService.setLanguage(lang);
    
  }
  title = 'dolgozat';
}
