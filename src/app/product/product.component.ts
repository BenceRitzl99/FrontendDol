import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService, private translate: TranslateService) {
    
    
    
  }


  
  products : any

  columns = [
    {key: "id", title:"#", type:"plain"},
    {key: "category", title:"CATEGORY", type:"text"},
    {key: "description", title:"DESCRIPTION", type:"text"},
    {key: "name", title:"NAME", type:"text"},
    {key: "price", title:"PRICE", type:"number"},
  ]

  newProduct: any = []

  ngOnInit() {
      this.loadAllProducts();
  }

  loadAllProducts() {
    this.productService.getAllProducts().subscribe((product: any) => {
      this.products = product ? Object.entries(product).map(([key, value]: any) => ({ ...value, id: key })) : []
    })
  }

  addProduct() {
    this.newProduct.createProduct(this.newProduct).subscribe(() => {
      this.loadAllProducts();
      this.newProduct = { id: null, name: '', category: '', description: '', price: null }
    })
  }

  updateProduct(product: any, id: string) {
    product.price = parseFloat(product.price).toFixed(2)
    this.productService.updateProduct(product, id).subscribe(() => this.loadAllProducts())
  }

  deleteProduct(product: {id: string}) {
    this.productService.deleteProduct(product.id).subscribe(() => this.loadAllProducts())
  }
}



