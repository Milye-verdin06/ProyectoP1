import { Component, OnInit } from '@angular/core';
declare var tablas: any;

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
})
export class TableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    tablas();
  }
}
