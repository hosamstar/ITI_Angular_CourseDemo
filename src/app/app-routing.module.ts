import { OrderMasterComponent } from './order/order-master/order-master.component';
import { ProductListComponent } from './order/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [ // First match wins !
  { path: '', component: MainLayoutComponent, children: [
    { path: '', redirectTo: '/home', pathMatch: 'full'}, // Default route
   { path: 'home', component: HomeComponent },
   { path: 'products', component: ProductListComponent},
   { path: 'products/:pid', component: ProductDetailsComponent},
   { path: 'order', component: OrderMasterComponent},
  ]},

   {path: 'login', component: UserLoginComponent},
    { path: '**', component: NotFoundComponent} // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
