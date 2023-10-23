import { Options } from '@angular-slider/ngx-slider';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sliderValue = 0;
  intervals = [
    {
      "from": 1698006775,
      "to": 1698007378
    },
    {
      "from": 1698011218,
      "to": 1698014000
    },
    {
      "from": 1698014989,
      "to": 1698020676
    },
    {
      "from": 1698020887,
      "to": 1698030000
    }
  ];

  sliderMin = 0;
  sliderMax = 100;

  value: number = 0;
  highValue: number = 100;
  options: Options = {
    floor: 0,
    ceil: 100,
    showTicks: true,
    step: 1,
    hideLimitLabels: false,
    hidePointerLabels: false,
    showSelectionBar: false
  };

  normalizeTimestamp(timestamp: number): number {
    let minTimestamp = this.intervals[0].from;
    let maxTimestamp = this.intervals[this.intervals.length - 1].to;

    return ((timestamp - minTimestamp) / (maxTimestamp - minTimestamp)) * (this.sliderMax - this.sliderMin);
  }
}
