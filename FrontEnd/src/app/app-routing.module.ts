import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { RootNavadminComponent } from './root-navadmin/root-navadmin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { CompteComponent } from './compte/compte.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AuthService } from './services/auth.service';
import { CarteComponent } from './carte/carte.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent} , 
  {path:"login" , component:LoginComponent}  ,
  {path:"footer", component:FooterComponent} ,
  {path:"header", component:HeaderComponent},
  {path:"login" , component:LoginComponent},
  {path:"home" , component:HomeComponent , },
  {path:"detail", component:DetailComponent},
  {path:"payment", component:PaymentComponent},
  {path:"admin", component:RootNavadminComponent},
  {path:"addproduct", component:AddproductComponent},
  {path:"allproduct", component:AllproductComponent},
  {path:"compte", component:CompteComponent , canActivate: [AuthService]},
  {path:"404notfound", component:PagenotfoundComponent},
  {path:"edit", component:EditproductComponent},
  {path:"card" , component:CarteComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
