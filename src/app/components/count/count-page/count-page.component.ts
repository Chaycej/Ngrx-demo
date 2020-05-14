import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../../state/reducers/count.reducer';
import { incrementCountAction, decrementCountAction, setCountAction } from '../../../state/actions/count.actions';
import { LoggingService } from '../../../services/logging.service';

@Component({
  selector: 'app-count-page',
  styleUrls: ['count-page.component.scss'],
  templateUrl: 'count-page.component.html'
})
export class CountPageComponent implements OnInit {

  public count: number;

  constructor(
    private loggingService: LoggingService,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.store.pipe(select('state')).subscribe(state => {
      this.count = state.count;
    })
  }

  incrementCount(): void {
    this.loggingService.logIncrement().subscribe(response => {
      if (response) {
        console.log('response: ', response);
        this.store.dispatch(incrementCountAction());
      }
    });
  }

  decrementCount(): void {
    this.loggingService.logDecrement().subscribe(response => {
      if (response) {
        console.log('response: ', response);
        this.store.dispatch(decrementCountAction());
      }
    });
  }

  setCount(value: number): void {
    this.loggingService.logCustomValue().subscribe(response => {
      if (response) {
        console.log('response: ', response);
        this.store.dispatch(setCountAction({ value: value }));
      }
    });
  }
}