import { Component } from '@angular/core';

@Component({
  selector: 'app-count-page',
  styleUrls: ['count-page.component.scss'],
  templateUrl: 'count-page.component.html'
})
export class CountPageComponent {

  public count: number;

  constructor() {
    this.count = 0;
  }

  public incrementCount(): void {
    this.count++;
  }

  public decrementCount(): void {
    if (this.count > 0) {
      this.count--;
    }
  }

  public setCount(value: number): void {
    this.count = value;
  }
}