import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {Observable} from "rxjs";
import {Product} from "../shared/product.model";
import {ProductList} from "../shared/product-list.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  $products: Observable<ProductList> | undefined;

  constructor(private _productService: ProductsService ) {}

  ngOnInit(): void {
    this.$products = this._productService.getProducts();

  }

  delete(product: Product) {
    this._productService.delete(product)
      .subscribe(() => {this.$products = this._productService.getProducts();
      });
  }
}
