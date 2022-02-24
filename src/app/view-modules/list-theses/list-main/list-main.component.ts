import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-main',
  templateUrl: './list-main.component.html',
  styleUrls: ['./list-main.component.css'],
  providers: [ HttpService ]
})
export class ListMainComponent implements OnInit {

  // constructor(private http: HttpService) { }
  constructor(private http: HttpClient) { }

  data!: any;

  ngOnInit(): void {

  }

}
