import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../../state/reducers/count.reducer';
import { incrementCountAction, decrementCountAction, setCountAction } from '../../../state/actions/count.actions';

@Component({
  selector: 'app-count-page',
  styleUrls: ['count-page.component.scss'],
  templateUrl: 'count-page.component.html'
})
export class CountPageComponent implements OnInit {

  public count: number;

  constructor(
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.store.pipe(select('state')).subscribe(state => {
      this.count = state.count;
    })
  }

  public incrementCount(): void {
    this.store.dispatch(incrementCountAction());
  }

  public decrementCount(): void {
    this.store.dispatch(decrementCountAction());
  }

  public setCount(value: number): void {
    this.store.dispatch(setCountAction({ value: value }));
  }
}