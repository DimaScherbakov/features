import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { map, Observable, share, shareReplay, switchMap } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  sharedPost$!: Observable<Post>;
  date1 = new FormControl();

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.sharedPost$ = this.date1.valueChanges.pipe(
      switchMap((v) => {
        console.log('datepicker value changed', v);
        return this.getPost();
      }),
      share()
    );
  }

  ngAfterViewInit() {
    setTimeout(() => this.date1.patchValue(new Date()), 0);
  }

  private getPost(): Observable<Post> {
    const id = this.getRandomInt(5);
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(map(v => v as Post));
  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * max) || 1;
  }
}
