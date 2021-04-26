import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myimage:String="assets/photo/logo.jpg";
  image:String="assets/photo/Vespa Sprint 2017.png"
  image1:String="assets/photo/spring 1.png"
  image2:String="assets/photo/spring 2.png"
  image3:String="assets/photo/spring 3.png"
  image4:String="assets/photo/spring 4.png"

}

