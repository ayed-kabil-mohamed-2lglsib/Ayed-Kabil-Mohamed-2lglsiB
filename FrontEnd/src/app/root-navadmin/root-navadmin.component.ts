import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root-navadmin',
  templateUrl: './root-navadmin.component.html',
  styleUrls: ['./root-navadmin.component.css']
})
export class RootNavadminComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    logout(){
      localStorage.clear();
      this.router.navigate(["/home"])
    }
    home(){
      this.router.navigate(["/compte"])
    }
  constructor(private breakpointObserver: BreakpointObserver, private router : Router) {}

}
