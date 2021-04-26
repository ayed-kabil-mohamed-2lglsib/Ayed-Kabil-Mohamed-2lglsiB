import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import  { IvyCarouselModule }  from  'angular-responsive-carousel' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CarteComponent } from './carte/carte.component';
import { CarousellComponent } from './carousell/carousell.component';
import { AboutecabmotoComponent } from './aboutecabmoto/aboutecabmoto.component';
import { ContacteComponent } from './contacte/contacte.component';
import { DetailComponent } from './detail/detail.component';
import { PaymentComponent } from './payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootNavadminComponent } from './root-navadmin/root-navadmin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CompteComponent } from './compte/compte.component';
import { Header2Component } from './header2/header2.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditproductComponent } from './editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,

    CarteComponent,
    CarousellComponent,
    AboutecabmotoComponent,
    ContacteComponent,
    DetailComponent,
    PaymentComponent,
    RootNavadminComponent,
    AddproductComponent,
    AllproductComponent,
    CompteComponent,
    Header2Component,
    PagenotfoundComponent,
    EditproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MDBBootstrapModule.forRoot(),
    IvyCarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
