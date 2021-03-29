import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { MainComponent } from './components/main/main.component';
import { InquiriesComponent } from './screens/inquiries/inquiries.component';
import { CatalogsComponent } from './screens/catalogs/catalogs.component';
import { OrdersComponent } from './screens/inquiries/orders/orders.component';
import { CalendarComponent } from './screens/inquiries/calendar/calendar.component';
import { ProductsComponent } from './screens/inquiries/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    InquiriesComponent,
    CatalogsComponent,
    OrdersComponent,
    CalendarComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
