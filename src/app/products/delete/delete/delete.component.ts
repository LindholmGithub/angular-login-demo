import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../shared/product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../shared/products.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  productForm = new FormGroup({
    id: new FormControl('', Validators.required)
  });
  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductsService) { }

  ngOnInit(): void {
  }

  delete() {
    let product = this.productForm.value as Product;
    this._productService.delete(product)
      .subscribe(product => {
        this._router.navigateByUrl('products');
      });
  }
}
