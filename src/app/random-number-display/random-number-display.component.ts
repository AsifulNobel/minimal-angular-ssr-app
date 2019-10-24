import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-random-number-display',
  templateUrl: './random-number-display.component.html',
  styleUrls: ['./random-number-display.component.css']
})
export class RandomNumberDisplayComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(PLATFORM_ID) private platformId: object
  ) { }

  randomNumber: string;
  destroy$ = new Subject<void>();

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      timer(1000, 3000).pipe(
        tap(_ => this.randomNumber = (Math.random() * 100).toFixed(0)),
        takeUntil(this.destroy$)
      ).subscribe();
    } else {
      this.randomNumber = '0';
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
