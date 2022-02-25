import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Person } from '../../models/person';
import { ThesesResource } from '../../models/thesesResource';
import { HttpService } from '../../services/http.service';

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ HttpService ]
})
export class TableComponent implements OnInit {

  thesesArray: ThesesResource[] = [];

  displayedColumns: string[] = ['position', 'thesesForm', 'created', 'update'];
  dataSource = new MatTableDataSource(this.thesesArray);

  @ViewChild(MatTable) table!: MatTable<ThesesResource>;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getData().subscribe(
      (data) => {
        this.thesesArray = data;
        console.log(this.dataSource.data = data);
      }
    );
  }



}
