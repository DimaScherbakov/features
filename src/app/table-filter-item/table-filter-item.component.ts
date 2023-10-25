import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-table-filter-item',
  templateUrl: './table-filter-item.component.html',
  styleUrls: ['./table-filter-item.component.css']
})
export class TableFilterItemComponent {
  @Input() data: any;
  @Input() dropdownPosition: string = 'auto';
  @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(NgSelectComponent) public ngSelectComponent?: NgSelectComponent;

  constructor() {}

  onSelectValueChanged(selectedItem: any | Event) {
    if (selectedItem instanceof Event) {
      return;
    }
    this.valueChanged.emit({
      data: this.data,
      currentValue: selectedItem.id,
    });
  }

  public getInputValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  selectSearchFn = (search: string, item: any): boolean => {
    const itemText = item.text ?? '';
    return itemText.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  };
}
