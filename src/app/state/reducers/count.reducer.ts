import { incrementCountAction, decrementCountAction, setCountAction } from '../actions/count.actions';
import { createReducer, Action, on } from '@ngrx/store';

export interface State {
  count: number;
};

export const initialState: State = {
  count: 0
};

const countReducer = createReducer(
  initialState,
  on(incrementCountAction, state => ({ ...state, count: state.count + 1 })),
  on(decrementCountAction, state => ({ ...state, count: state.count - 1})),
  on(setCountAction, (state, { value }) => ({ ...state, count: value }))
)

export function reducer(initialState: State | undefined, action: Action) {
  return countReducer(initialState, action);
}