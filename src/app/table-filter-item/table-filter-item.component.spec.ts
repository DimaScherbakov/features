import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilterItemComponent } from './table-filter-item.component';

describe('TableFilterItemComponent', () => {
  let component: TableFilterItemComponent;
  let fixture: ComponentFixture<TableFilterItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableFilterItemComponent]
    });
    fixture = TestBed.createComponent(TableFilterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
