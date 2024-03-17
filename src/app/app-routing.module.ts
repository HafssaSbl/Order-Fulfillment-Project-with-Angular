import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostProductComponent } from './components/post-product/post-product.component';
import { GetAllProductComponent } from './components/get-all-product/get-all-product.component';
import {  UpdateProductComponent } from './components/update-product/update-product.component';
import {PostEntropotComponent} from "./components/post-entropot/post-entropot.component";
import {GetAllEntropotComponent} from "./components/get-all-entropot/get-all-entropot.component";
import {UpdateEntropotComponent} from "./components/update-entropot/update-entropot.component";
import {PostCommandeComponent} from "./components/post-commande/post-commande.component";
import {GetAllCommandeComponent} from "./components/get-all-commande/get-all-commande.component";
import {UpdateCommandeComponent} from "./components/update-commande/update-commande.component";
import {PostEmballageComponent} from "./components/post-emballage/post-emballage.component";
import {GetAllEmballageComponent} from "./components/get-all-emballage/get-all-emballage.component";
import {UpdateEmballageComponent} from "./components/update-emballage/update-emballage.component";
import {PostStockageComponent} from "./components/post-stockage/post-stockage.component";
import {GetAllStockageComponent} from "./components/get-all-stockage/get-all-stockage.component";
import {UpdateStockageComponent} from "./components/update-stockage/update-stockage.component";

const routes: Routes = [
{ path:'product' , component: PostProductComponent},
{ path:'listproducts' , component: GetAllProductComponent},
{ path:'product/:id' , component: UpdateProductComponent},

  { path:'entropot' , component: PostEntropotComponent},
  { path:'listentropots' , component: GetAllEntropotComponent},
  { path:'entropot/:id' , component: UpdateEntropotComponent},

  { path:'commande' , component: PostCommandeComponent},
  { path:'listcommandes' , component: GetAllCommandeComponent},
  { path:'commande/:id' , component: UpdateCommandeComponent},

  { path:'emballage' , component: PostEmballageComponent},
  { path:'listemballages' , component: GetAllEmballageComponent},
  { path:'emballage/:id' , component: UpdateEmballageComponent},

  { path:'stockage' , component: PostStockageComponent},
  { path:'liststockages' , component: GetAllStockageComponent},
  { path:'stockage/:id' , component: UpdateStockageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
