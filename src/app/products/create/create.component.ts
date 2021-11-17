import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../shared/product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../shared/products.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    ownerId: new FormControl('', Validators.required)
  });
  productToCreate: Product | undefined;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductsService) { }

  ngOnInit(): void {
  }

  create(){
    if (this.productToCreate){
      let product = this.productForm.value as Product;
      product.name = this.productToCreate.name;
      product.ownerId = this.productToCreate.ownerId;
      this._productService.create(product)
        .subscribe(product => {
          this._router.navigateByUrl('products');
        });
    }
  }

}
