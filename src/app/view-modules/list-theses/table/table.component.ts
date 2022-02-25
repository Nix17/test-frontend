import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
// import { filter } from 'rxjs';
import { Person } from '../../models/person';
import { ThesesResource } from '../../models/thesesResource';

const TT: ThesesResource[] = [
  new ThesesResource(
    1,
    new Person('Starostenkov', 'Andrey', 'Andreevich', 'WorkCompany'),
    'st.andrey17@yandex.ru',
    null,
    'Front Task Theses',
    'Well done!'
  ),
  new ThesesResource(
    2,
    new Person('Troshin', 'Ivan', 'Sergeevich', 'WorkCompany'),
    'gunman908@mail.ru',
    [
      new Person('Troshin', 'Ivan', 'Sergeevich'),
      new Person('Troshin', 'Ivan', 'Sergeevich'),
      new Person('Troshin', 'Ivan', 'Sergeevich')
    ],
    'Back Task Theses',
    'Well done!'
  )
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // thesesArray: ThesesResource[] = [];
  thesesArray: ThesesResource[] = TT;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.dataSource);
  }

  displayedColumns: string[] = ['position', 'thesesForm', 'created', 'update'];
  dataSource = new MatTableDataSource(TT);

}
