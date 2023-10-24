import { Options } from '@angular-slider/ngx-slider';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  datepicker: any = {
    startDate: moment("2023-10-23T05:00:00.000Z"),
    endDate: moment("2023-10-24T12:34:40.411Z")
  };
  sliderValue = 0;
  intervals = [
    {
      "from": 1698066091,
      "to": 1698067179
    },
    {
      "from": 1698071254,
      "to": 1698073431
    },
    {
      "from": 1698075334,
      "to": 1698078358
    },
    {
      "from": 1698083822,
      "to": 1698087330
    },
    {
      "from": 1698087714,
      "to": 1698113199
    },
    {
      "from": 1698113270,
      "to": 1698113871
    },
    {
      "from": 1698150865,
      "to": 1698151589
    }
  ]

  sliderMin = this.datepicker.startDate / 1000;
  sliderMax = this.datepicker.endDate / 1000;
  timestampDiff = this.sliderMax - this.sliderMin;
  options: Options = {
    floor: this.sliderMin,
    ceil: this.sliderMax,
    showTicks: false,
    step: 100,
    hideLimitLabels: true,
    hidePointerLabels: false,
    showSelectionBar: false,
    translate: (v, l) => {
      return moment(v*1000).toISOString();
    }
  };

  normalizeTimestamp(timestamp: number): number {
    return ((timestamp - this.sliderMin) / this.timestampDiff) * 100;
  }
}
