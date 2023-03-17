import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.interface';
import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    products: Product[] = [];
    addedProducts: Product[] = [];
    newProduct: Product = { id: 0, name: '', quantity: 0, price: 0, addedBy: '' };
    searchTerm: string = '';
    originalProducts: Product[] = [];

    constructor(private productService: ProductService) { }
  
    ngOnInit() {
      this.productService.getProducts().subscribe(products => {
        this.originalProducts = products;
        this.products = this.originalProducts;
      });
    }

    searchProduct() {
      if (this.searchTerm) {
        this.products = this.originalProducts.filter(product => {
          return product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
        this.addedProducts.forEach(product => {
          if (product.name.toLowerCase().includes(this.searchTerm.toLowerCase())) {
            this.products.push(product);
          }
        });
      } else {
        this.products = [...this.originalProducts, ...this.addedProducts];
      }
    }       
    
    clearSearch() {
      this.searchTerm = '';
      this.products = [...this.originalProducts];
      this.addedProducts = [];
    }    
}
