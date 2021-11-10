import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './list/products.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    ProductsComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
