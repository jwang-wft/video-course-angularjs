import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  src = 'http://localhost:8000/videos/home.mp4';
  poster = 'http://localhost:8000/videos/NASA.jpg';
  constructor() { }

  ngOnInit() {
  }

}
