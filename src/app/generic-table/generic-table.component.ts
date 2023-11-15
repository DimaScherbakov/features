import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.less'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class GenericTableComponent {
@Input() config!: any;
@Input() tableDataSource!: MatTableDataSource<any>;
@Input() displayedColumns!: string[];
@Input() actionTemplate!: TemplateRef<any>;

  toggleRow(element: { expanded: boolean; }) {
    element.expanded = !element.expanded;
  }
}
