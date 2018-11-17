import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data = [];
  constructor() {
    this.data = ['abc', 'xyz', 'ahdjas', 'ksgd']
  }

  ngOnInit() {

  }
  onclick() {
    console.log("parent");

  }

}
