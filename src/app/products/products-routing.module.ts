import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from './list/products.component';
import {UpdateComponent} from './update/update.component';
import {AuthGuard} from '../auth/guards/auth.guard';
import {WriteProductsGuard} from '../auth/guards/write-products.guard';
import {ReadProductsGuard} from '../auth/guards/read-products.guard';

const routes: Routes = [
  {
    path: 'update/:id',
    component: UpdateComponent,
    canActivate: [WriteProductsGuard]
  },
  {
    path: '',
    component: ProductsComponent,
    canActivate: [ReadProductsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
