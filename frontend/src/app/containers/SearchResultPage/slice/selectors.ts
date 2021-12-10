import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) =>
  (state && state.searchResult) || initialState;

export const selectSearchResult = createSelector([selectSlice], state => state);
