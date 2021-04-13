import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-codes',
  templateUrl: './qr-codes.component.html',
  styleUrls: ['./qr-codes.component.css']
})
export class QrCodesComponent implements OnInit {

  gifID = 0;

  constructor() { }

  ngOnInit(): void {
    
  }

  tableRefresh(id) {
    this.gifID = id;
  }
  
  
}
