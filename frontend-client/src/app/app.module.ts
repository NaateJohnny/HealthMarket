import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DrogariasComponent } from './drogarias/drogarias.component';
import { DrogariaComponent } from './drogarias/drogaria/drogaria.component';
import { DrogariaDetailComponent } from './drogaria-detail/drogaria-detail.component';
import { MenuComponent } from './drogaria-detail/menu/menu.component';
import { ShoppingCartComponent } from './drogaria-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './drogaria-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './drogaria-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';
import { CreateLoginComponent } from './security/create-login/create-login.component';
import { ApplicationErrorHandler } from './app.error-handler';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DrogariasComponent,
    DrogariaComponent,
    DrogariaDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent,
    CreateLoginComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'},
              {provide: ErrorHandler, useClass: ApplicationErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
