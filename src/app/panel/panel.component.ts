import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  AfterViewInit, ViewChild, ChangeDetectorRef,
} from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() title?: string;
  @Input() subTitle?: string;
  @Input() isExpanded = true;
  @Input() hideToggle = false;
  @Input() disableToggle = false;

  // workaround for table filters in panel header
  @Input() public isOverflowVisible = false;
  @Output() isOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  private expanded$: Subject<boolean> = new Subject();
  private element?: HTMLElement;
  @ViewChild('expansionPanel') expansionPanelRef?: ElementRef;

  constructor(
    private elementRef: ElementRef,
    private cdRef: ChangeDetectorRef
  ) {
  }

  public ngOnInit(): void {
    this.element = this.elementRef.nativeElement.querySelector('.mat-expansion-panel');
    this.expanded$
      .pipe(debounceTime(500))
      .subscribe(() => {
        this.element?.classList.remove('overflow-hidden');
      });
  }

  ngAfterViewInit(): void {
    // workaround for table filters in panel header
    const matContent = this.elementRef?.nativeElement?.querySelector('.mat-content');
    matContent.style.overflow = this.isOverflowVisible ? 'visible' : 'hidden';
  }

  public togglePanel(event: Event): void {
    if (this.disableToggle) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }

    this.element?.classList.add('overflow-hidden');
    this.isExpanded = !this.isExpanded;
    this.isOpen.emit(this.isExpanded);
    this.expanded$.next(this.isExpanded);
    const matContent = this.elementRef?.nativeElement?.querySelector('.mat-expansion-panel');
    const isCollapsed = !this.isExpanded;
    if (isCollapsed) {
      setTimeout(() => {
        matContent.style.overflow = this.isOverflowVisible && !this.isExpanded ? 'visible' : 'hidden';
      }, 250);
    } else {
      matContent.style.overflow = this.isOverflowVisible && !this.isExpanded ? 'visible' : 'hidden';
    }
    // this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
  }
}
