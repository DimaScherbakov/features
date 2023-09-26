import {
  ComponentRef,
  Directive,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import { TooltipComponent } from './tooltip/tooltip.component';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit{
  @HostListener('mouseover') showTooltip() {
    if (this.tooltipComponent) {
      this.renderer.appendChild(this.viewContainerRef.element.nativeElement, this.tooltipComponent.instance.elementRef.nativeElement );
    }
  }

  @HostListener('mouseleave') hideTooltip() {
    if(this.tooltipComponent) {
      this.renderer.removeChild(this.viewContainerRef.element.nativeElement, this.tooltipComponent.instance.elementRef.nativeElement );
    }
  }
  @Input() lines: string[] = [];
  private tooltipComponent: ComponentRef<TooltipComponent> | undefined;
  constructor(private viewContainerRef: ViewContainerRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.tooltipComponent = this.viewContainerRef.createComponent(TooltipComponent);
    this.tooltipComponent.setInput('lines', this.lines);
  }
}
