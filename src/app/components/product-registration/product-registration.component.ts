    import { Component, OnInit } from '@angular/core';
    import { UsernamePipe } from 'src/app/Pipes/username.pipe';
    import { Product } from 'src/app/product.interface';
    import { ProductService } from 'src/app/services/product-service.service';


    @Component({
      selector: 'app-product-registration',
      templateUrl: './product-registration.component.html',
      styleUrls: ['./product-registration.component.scss'],
    })
    export class ProductRegistrationComponent implements OnInit {
      
      newProduct: Product = { id: 0, name: '', quantity: 0, price: 0, addedBy : ''};
      
      email: string = "";
      username: string = "";
      hasGeneratedUsername: boolean = false;
      products: Product[] = [];
     
      constructor(private usernamePipe: UsernamePipe, private productService: ProductService) {
      
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
          this.products = JSON.parse(storedProducts);
        }
      }
      ngOnInit(): void {
        throw new Error('Method not implemented.');
      }

      generateUsername() {
        this.username = this.usernamePipe.transform(this.email);
        this.hasGeneratedUsername = true;
      }

      addProduct() {
        if (!this.hasGeneratedUsername) {
          alert("Por favor, gere um nome de usuário para cadastrar um produto.");
          return;
        }
        if (this.newProduct.id == 0 || this.newProduct.name == '' || this.newProduct.quantity == 0 || this.newProduct.price == 0) {
          alert("Por favor, preencha todos os campos do formulário para cadastrar um produto.");
          return;
        }
        this.newProduct.addedBy = this.username;
        this.productService.addProduct(this.newProduct).subscribe((product) => {
          this.products.push(product);
          localStorage.setItem('products', JSON.stringify(this.products));
        });
        this.newProduct = { id: 0, name: '', quantity: 0, price: 0, addedBy: ''};
      }
      
        

      clearUsername(): void {
        this.username = "";
        this.email = "";
        this.hasGeneratedUsername = false;
      }

      hasUsername(): boolean {
        return this.hasGeneratedUsername;
      }
    }
