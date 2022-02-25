import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { ThesesResource } from '../../models/thesesResource';
import { Person } from '../../models/person';


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
    'Front Task Theses',
    'Well done!'
  )
];


@Component({
  selector: 'app-item-table-expansion',
  templateUrl: './item-table-expansion.component.html',
  styleUrls: ['./item-table-expansion.component.css']
})
export class ItemTableExpansionComponent implements OnInit {


  isChangeBtnActive = true;
  isOpenBtnActive = true;

  @Input() theses!: ThesesResource;
  // theses: ThesesResource = TT[1];

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatAccordion) accordion!: MatAccordion;



}
