import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dining-halls',
  templateUrl: './dining-halls.component.html',
  styleUrls: ['./dining-halls.component.css']
})
export class DiningHallsComponent implements OnInit {

  diningHallId = 0;
  pageLabel = "Select A Food Court";

  constructor() { }

  ngOnInit(): void {
  }

  tableRefresh(id) {
    this.diningHallId = id;
    this.pageLabel = "What Are You Hungry For?";
  }

}
