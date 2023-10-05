import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output, SimpleChanges
} from '@angular/core';

export interface ItemConfig {
  value: string;
  checked: boolean;
  title: string;
}

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxFilterComponent implements OnChanges {
  @Input() allItemsConfig?: ItemConfig;
  @Input() itemsConfig?: ItemConfig[];
  allItems?: ItemConfig;
  items?: ItemConfig[];
  @Output() itemsSelected: EventEmitter<ItemConfig[]> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['itemsConfig'].currentValue) {
      this.items = this.deepClone(changes['itemsConfig'].currentValue);
    }
    if (changes['allItemsConfig'].currentValue) {
      this.allItems = this.deepClone(changes['allItemsConfig'].currentValue);
    }
  }

  changeAll() {
    const checked: boolean = !!(this.allItems?.checked);
    this.items?.forEach(i => this.silentChangeItem(i, checked));
    this.itemsSelected.emit(this.deepClone(this.items));
  }

  changeItem(item: ItemConfig) {
    const isEveryItemChecked = this.items?.every(({checked}) => checked);
    if (!item.checked && this.allItems) {
      this.allItems.checked = false;
    }
    if (isEveryItemChecked && this.allItems) {
      this.allItems.checked = true;
    }
    this.itemsSelected.emit(this.deepClone(this.items));
  }

  silentChangeItem(item: ItemConfig, checked: boolean): void {
    const changedItem = this.items?.find(({value}) => value === item.value);
    if (changedItem) {
      changedItem.checked = checked;
    }
  }

  private deepClone<T>(v: T): T {
    return JSON.parse(JSON.stringify(v));
  }
}
