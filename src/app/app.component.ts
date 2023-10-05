import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemConfig } from './checkbox-filter/checkbox-filter.component';
export interface UnitsListForTracksRequestParams {
  unitTypeIsDriversUnits: boolean;
  unitTypeIsAssetTrackersUnits: boolean;
  unitTypeIsCamerasUnits: boolean;
  unitId?: number;
  groupId?: number;
  sortIdx?: 'None' | 'FullName' | 'LastLocation' | 'LastLocationDetailed' | 'Time' | 'Share' | 'Geofence' | 'Chat' | 'Scan' | 'Speed' | 'Status' | 'Description' | 'Color' | 'TruckNo';
  isDesc?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  allItemsConfig: ItemConfig = {
    title: 'All',
    checked: true,
    value: 'all'
  };
  selectedItems?: ItemConfig[];

  itemsConfig: ItemConfig[] = [
    {
      title: 'Asset Trackers',
      checked: true,
      value: 'unitTypeIsAssetTrackersUnits'
    },
    {
      title: 'Drivers',
      checked: true,
      value: 'unitTypeIsDriversUnits'
    },
    {
      title: 'Camera',
      checked: true,
      value: 'unitTypeIsCamerasUnits'
    }
  ];

  selectItems(items: ItemConfig[]) {
   this.selectedItems = items;
    console.log(this.selectedItems);
  }

  changeSelectedItems(): void {
    this.selectedItems?.forEach(i => i.checked = true);
  }
}
