import { createAction, props } from '@ngrx/store';

export const incrementCountAction = createAction(
  '[Count] Increment'
);

export const decrementCountAction = createAction(
  '[Count] Decrement'
);

export const setCountAction = createAction(
  '[Count] Custom Value',
  props<{ value: number }>()
);