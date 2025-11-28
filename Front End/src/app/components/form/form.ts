import { Component, ElementRef, ViewChild, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Product } from '../../Interfaces';
import { ProductsAPi } from '../../services/products-api';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  providers: [ProductsAPi],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  API = inject(ProductsAPi);
  Products = signal<Product[]>([]);
  add_or_update = signal<Boolean>(false);
  current_id: string = '';
  @ViewChild('myForm') form!: NgModel;
  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    this.API.getProducts().subscribe({
      next: (res) => {
        console.log(res.Products);
        this.Products.set(res.Products);
      },
    });
  }
  createProduct(data: Partial<Product>) {
    this.API.addProduct(data).subscribe({
      next: (res) => {
        console.log(res);
        this.loadProducts();
      },
    });
    this.resetForm();
  }
  editProduct(product: Product) {
    this.add_or_update.set(true);
    this.current_id = product._id!;
    this.form.control.setValue({
      name: product.name,
      price: product.price,
      category: product.category,
    });
  }
  updateProduct(data: Partial<Product>) {
    this.add_or_update.set(false);
    this.API.updateProduct(this.current_id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.loadProducts();
      },
    });
    this.resetForm();
  }
  deleteProduct(id: string) {
    this.API.deleteProduct(id).subscribe({
      next: (res) => {
        console.log(res);
        this.loadProducts();
      },
    });
    this.resetForm();
  }
  resetForm() {
    this.add_or_update.set(false);
    this.form.control.reset();
  }
}
