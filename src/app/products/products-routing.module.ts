import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {UpdateComponent} from "./update/update.component";
import {CreateComponent} from "./create/create.component";

const routes: Routes = [
  {path: 'update/:id', component: UpdateComponent},
  {path: 'create/', component: CreateComponent},
  {path: '', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
