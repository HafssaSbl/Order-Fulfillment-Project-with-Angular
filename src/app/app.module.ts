import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostProductComponent } from './components/post-product/post-product.component';
import { GetAllProductComponent } from './components/get-all-product/get-all-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { GetAllEntropotComponent } from './components/get-all-entropot/get-all-entropot.component';
import { PostEntropotComponent } from './components/post-entropot/post-entropot.component';
import { UpdateEntropotComponent } from './components/update-entropot/update-entropot.component';
import { PostCommandeComponent } from './components/post-commande/post-commande.component';
import { PostEmballageComponent } from './components/post-emballage/post-emballage.component';
import { PostStockageComponent } from './components/post-stockage/post-stockage.component';
import { UpdateCommandeComponent } from './components/update-commande/update-commande.component';
import { UpdateEmballageComponent } from './components/update-emballage/update-emballage.component';
import { UpdateStockageComponent } from './components/update-stockage/update-stockage.component';
import { GetAllCommandeComponent } from './components/get-all-commande/get-all-commande.component';
import { GetAllEmballageComponent } from './components/get-all-emballage/get-all-emballage.component';
import { GetAllStockageComponent } from './components/get-all-stockage/get-all-stockage.component'

@NgModule({
  declarations: [
    AppComponent,
    PostProductComponent,
    GetAllProductComponent,
    UpdateProductComponent,
    GetAllEntropotComponent,
    PostEntropotComponent,
    UpdateEntropotComponent,
    PostCommandeComponent,
    PostEmballageComponent,
    PostStockageComponent,
    UpdateCommandeComponent,
    UpdateEmballageComponent,
    UpdateStockageComponent,
    GetAllCommandeComponent,
    GetAllEmballageComponent,
    GetAllStockageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
