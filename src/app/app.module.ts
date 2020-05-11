import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './nav/topnav/topnav.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './nav/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/store/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
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
