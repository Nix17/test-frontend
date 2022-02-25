import { Component, OnInit } from '@angular/core';
import { ThesesResource } from '../../models/thesesResource';
import { HttpService } from '../../services/http.service';

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  thesesArray: ThesesResource[] = [];

  // constructor(private httpService: HttpService) { }
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getData().subscribe((data) => this.thesesArray = data);
  }

}
