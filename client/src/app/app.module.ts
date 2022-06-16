import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SliderComponent } from './slider/slider.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QualityDescriptionComponent } from './quality-description/quality-description.component';
import { ProductsExpComponent } from './products-exp/products-exp.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AllElectProductsComponent } from './all-elect-products/all-elect-products.component';
import { AllWatchesProdComponent } from './all-watches-prod/all-watches-prod.component';
import { AllFurnitureProdComponent } from './all-furniture-prod/all-furniture-prod.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutsModule } from './layouts/layouts.module';
import { MobileComponent } from './modules/components/mobile/mobile.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './modules/components/update-product/update-product.component';

// import { AuthInterceptor } from '../auth.interceptor'
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    SliderComponent,
    AboutUsComponent,
    QualityDescriptionComponent,
    ProductsExpComponent,
    AllProductsComponent,
    AllElectProductsComponent,
    AllWatchesProdComponent,
    AllFurnitureProdComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductDetailsComponent,
    MobileComponent,
    UpdateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    LayoutsModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
