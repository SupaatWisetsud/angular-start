import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component'
import { ProductListComponent } from './product-list/product-list.component'
import { ProductAlertComponent } from './product-alert/product-alert.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { CartComponent } from './cart/cart.component'
import { ShippingComponent } from './shipping/shipping.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'products/:productId',
        component: ProductDetailComponent
      },
      {
        path: 'carts',
        component: CartComponent
      },
      {
        path: 'shipping',
        component: ShippingComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
