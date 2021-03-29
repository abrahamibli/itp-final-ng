import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CatalogsComponent } from './screens/catalogs/catalogs.component';
import { HomeComponent } from './screens/home/home.component';
import { CalendarComponent } from './screens/inquiries/calendar/calendar.component';
import { InquiriesComponent } from './screens/inquiries/inquiries.component';
import { OrdersComponent } from './screens/inquiries/orders/orders.component';
import { ProductsComponent } from './screens/inquiries/products/products.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "", component: MainComponent, children: [
      { path: "home", component: HomeComponent },
      {
        path: "inquiries", component: InquiriesComponent, children: [
          { path: "calendar", component: CalendarComponent },
          { path: "orders", component: OrdersComponent },
          { path: "products", component: ProductsComponent },
        ],
      },
      { path: "catalogs", component: CatalogsComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
