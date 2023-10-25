import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadVideoFormComponent } from './download-video-form.component';

describe('DownloadVideoFormComponent', () => {
  let component: DownloadVideoFormComponent;
  let fixture: ComponentFixture<DownloadVideoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadVideoFormComponent]
    });
    fixture = TestBed.createComponent(DownloadVideoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
