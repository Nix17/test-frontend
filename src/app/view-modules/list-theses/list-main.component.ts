import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-main',
  template: `
  <h1 class="text-center text-uppercase font-weight-normal">Список тезисов</h1><hr>
  <app-table></app-table>
  `,
  providers: [ HttpService ]
})
export class ListMainComponent implements OnInit {

  // constructor(private http: HttpService) { }
  constructor(private http: HttpClient) { }

  data!: any;

  ngOnInit(): void {

  }

}
