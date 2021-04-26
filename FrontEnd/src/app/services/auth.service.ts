import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dbuser } from '../model/dbuser.model'
import{Observable} from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
constructor(private router : Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   let test=localStorage.getItem("isloggedIn");
   if(test=="true"){
     return true;
   }
   else{
     return this.router.navigate(["/404notfound"]);
   }
  }
} 

