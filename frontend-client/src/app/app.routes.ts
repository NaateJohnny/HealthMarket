import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DrogariasComponent } from './drogarias/drogarias.component';
import { DrogariaDetailComponent } from './drogaria-detail/drogaria-detail.component';
import { MenuComponent } from './drogaria-detail/menu/menu.component';
import { ReviewsComponent } from './drogaria-detail/reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { LoggedInGuard } from './security/loggedin.guard';
import { CreateLoginComponent } from './security/create-login/create-login.component';
import { ProductsComponent } from './products/products.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login/:to', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'create-login', component: CreateLoginComponent},
    {path: 'drogarias/:id', component: DrogariaDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}

        ]
    },
    {path: 'drogarias', component: DrogariasComponent},
    {path: 'produtos', component: ProductsComponent},
    {path: 'order', loadChildren: './order/order.module#OrderModule',
        canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: '**', component: NotFoundComponent}

];
