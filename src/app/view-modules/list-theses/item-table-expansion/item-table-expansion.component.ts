import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-item-table-expansion',
  templateUrl: './item-table-expansion.component.html',
  styleUrls: ['./item-table-expansion.component.css']
})
export class ItemTableExpansionComponent implements OnInit {


  isChangeBtnActive = true;
  isOpenBtnActive = true;

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatAccordion) accordion!: MatAccordion;

}
