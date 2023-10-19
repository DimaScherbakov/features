import { Component } from '@angular/core';
import { delay, filter, finalize, from, Observable, of, repeat, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  thirtyTriesError = 'you have tried so many times, chill out';
  recordingUrlRepeats = 0;
  readonly urlDelay = 5000;
  readonly shortPeriodOfTime = 3000;

  readonly recordingUrlRepeatsLimit = 5;

  mockUrl = [
    {fileExists: false, url: ''},
    {fileExists: false, url: ''},
    {fileExists: false, url: ''},
    {fileExists: false, url: ''},
    {fileExists: false, url: ''},
    {fileExists: false, url: ''},
    {fileExists: true, url: 'video-url.mp4'},
  ];
  mockUpload = [{fileExists: false, url: ''},{fileExists: true, url: 'video-url.mp4'},];
  url = (mock: any) => {
    return from(mock).pipe(switchMap(v => of(v).pipe(delay(1000))));
  };
  urlRepetitive = () => {
    return this.url(this.mockUrl).pipe(
      tap((v: any) => {console.log('url repetitive', v)}),
      repeat({delay: this.urlDelay}),
      tap(() => this.recordingUrlRepeats += 1),
      take(this.recordingUrlRepeatsLimit),
      filter(v => v.fileExists),
      take(1)
    );
  }
  uploadRepetitive = () => {
    return from(this.mockUpload).pipe(
      tap((v) => {console.log('upload', v)}),
      repeat({delay: this.shortPeriodOfTime}),
      filter(v => v.fileExists),
      take(1),
      switchMap(() => this.urlRepetitive())
    );
  }

  flow$: Observable<any> = this.url([{fileExists: false, url: ''}]).pipe(
    tap((v: any) => {console.log('url', v)}),
    switchMap((urlData: any) => {
    return urlData.fileExists ? of(urlData) : this.uploadRepetitive();
  }),
    finalize(() => {
     if (this.recordingUrlRepeats >= this.recordingUrlRepeatsLimit) {
       console.log(this.thirtyTriesError);
     }
      this.recordingUrlRepeats = 0;
    })
  );
}
