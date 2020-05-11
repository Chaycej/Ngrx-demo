import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-count-display',
  styleUrls: ['count-display.component.scss'],
  templateUrl: 'count-display.component.html'
})
export class CountDisplayComponent {

  @Input() count: number;

  @Output() decrementCount: EventEmitter<any> = new EventEmitter();
  @Output() incrementCount: EventEmitter<any> = new EventEmitter();
  @Output() setCount: EventEmitter<number> = new EventEmitter();

  @ViewChild('inputValue') inputValue: ElementRef;

  constructor() {}

  public _decrementCount(): void {
    this.decrementCount.emit();
  }

  public _incrementCount(): void {
    this.incrementCount.emit();
  }

  public _setValue(value: any): void {
    const count = this.inputValue.nativeElement.valueAsNumber;
    if (!isNaN(count)) {
      this.setCount.emit(count);
    }
  }
}