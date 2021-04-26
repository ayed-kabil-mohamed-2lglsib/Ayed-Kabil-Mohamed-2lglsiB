import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousell',
  templateUrl: './carousell.component.html',
  styleUrls: ['./carousell.component.css']
})
export class CarousellComponent implements OnInit {
  myimage1:string="assets/photo/1.png";
  myimage2:string="assets/photo/2.jpg";
  myimage3:string="assets/photo/3.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
