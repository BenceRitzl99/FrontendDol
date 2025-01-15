import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  constructor(private base: BaseService, private translate: TranslateService) {
    
    this.translate.setLanguage('en');
    
  }

  languagechange(lang: string): void {
    this.translate.setLanguage(lang);
  }
  
  products : any

  columns = [
    {key: "id", title:"#", type:"plain"},
    {key: "category", title:"CATEGORY", type:"text"},
    {key: "description", title:"DESCRIPTION", type:"text"},
    {key: "name", title:"NAME", type:"text"},
    {key: "price", title:"PRICE", type:"number"},
  ]

  newData: any = []

  ngOnInit() {
      this.loadAllProducts();
  }

  loadAllProducts() {
    this.products.getAllProducts().subscribe((product: any) => {
      this.products = product ? Object.entries(product).map(([key, value]: any) => ({ ...value, id: key })) : []
    })
  }

  addData() {
    this.products.createProduct(this.products).subscribe(() => {
      this.loadAllProducts();
      this.products = { id: null, name: '', category: '', description: '', price: null }
    })
  }

  updateData(data: any) {
    this.products.price = parseFloat(data.price).toFixed(2)
    this.products.updateProduct(data).subscribe(() => this.loadAllProducts())
  }

  deleteProduct(product: {id: string}) {
    this.products.deleteProduct(product.id).subscribe(() => this.loadAllProducts())
  }
}



