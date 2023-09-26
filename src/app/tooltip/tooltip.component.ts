import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {
  @Input() lines: string[] = [];
  tooltipCoordinates: { left: number; top: number } = {top: 0, left: 0};
  constructor(public elementRef: ElementRef) {
  }
}
