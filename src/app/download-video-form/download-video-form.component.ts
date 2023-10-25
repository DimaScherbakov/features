import { Component } from '@angular/core';
const seconds = [0, 5, 10, 20, 30, 60, 90, 120];
@Component({
  selector: 'app-download-video-form',
  templateUrl: './download-video-form.component.html',
  styleUrls: ['./download-video-form.component.css']
})
export class DownloadVideoFormComponent {
  public isDownloadPrepared = false;
  public secondsBefore: any = {
    filterName: '',
    selectedId: '0',
    items: seconds.map(value => ({id: `${value}`, text: `${value}`})),
  };

  public secondsAfter: any = {
    filterName: '',
    selectedId: '0',
    items: seconds.map(value => ({id: `${value}`, text: `${value}`})),
  };

  setSecondsBefore({ currentValue }: any) {

  }
  setSecondsAfter({ currentValue }: any) {

  }
}
