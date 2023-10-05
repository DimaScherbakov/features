import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appReadMore]',
  exportAs: 'appReadMore',
})
export class ReadMoreDirective implements AfterViewInit {
  /**
   * CSS class for expanded area
   */
  @Input() public expandCssClass = 'toh';

  // @ts-ignore
  @Input() public offsetLeft: string;
  // @ts-ignore
  private expandedTextElement: HTMLElement;
  private get isExpandable():boolean {
    return this.el?.nativeElement?.offsetWidth < this.el?.nativeElement?.scrollWidth;
  }

  constructor(public el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover')
  public expandText(): void {
    if(this.isExpandable) {
        this.renderer.appendChild(this.el.nativeElement, this.expandedTextElement);
    }
  }

  ngAfterViewInit(): void {
    const textContent = this.el.nativeElement.textContent;
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.el.nativeElement, 'text-overflow', 'ellipsis');
    this.renderer.setStyle(this.el.nativeElement, 'white-space', 'nowrap');
    this.renderer.setStyle(this.el.nativeElement.parentNode, 'position', 'relative');

    if (this.isExpandable) {
      this.initExpandableText(textContent);
    }
  }


  private initExpandableText(text: string): void {
    this.expandedTextElement = this.renderer.createElement('div');
    this.renderer.setProperty(this.expandedTextElement, 'textContent', text);
    this.renderer.addClass(this.expandedTextElement, this.expandCssClass);
    this.expandedTextElement.addEventListener('mouseleave', () => {
      this.renderer.removeChild(this.el.nativeElement, this.expandedTextElement);
      this.expandedTextElement.removeEventListener('mouseleave', () => {});
    });
    if (this.offsetLeft) {
      this.renderer.setProperty(this.expandedTextElement, 'left', this.offsetLeft);
    }
  }
}
