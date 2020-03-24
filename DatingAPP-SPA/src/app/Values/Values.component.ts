import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-values',
  templateUrl: './Values.component.html',
  styleUrls: ['./Values.component.css']
})
export class ValuesComponent implements OnInit {
 values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getvalues();
  }

  getvalues() {
    this.http.get('http://localhost:5000/api/Values').subscribe( data => {
      this.values = data;
      console.log(this.values); });
    }
  }

