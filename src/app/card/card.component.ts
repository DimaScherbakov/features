import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  merge,
  Observable,
  of,
  Subject,
  switchMap
} from 'rxjs';
import { Post } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() cardNumber: number = 0;
  @Input() sharedPost$!: Observable<Post>;
  post$!: Observable<Post>;

  private refresh$ = new Subject();
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const reloadData$ = this.refresh$.pipe(switchMap(() => this.getPost()));
    this.post$ = merge(this.sharedPost$, reloadData$);
  }

  refresh() {
    this.refresh$.next(null);
  }

  private getPost(): Observable<Post> {
    const id = this.getRandomInt(5);
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
      map(v => v as Post)
    );
  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * max) || 1;
  }
}
