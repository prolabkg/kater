import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import  bestlerSlice  from './brestler/reducer'


const makeStore = () =>
  configureStore({
    reducer: {
      [bestlerSlice.name]: bestlerSlice.reducer,
    },
    devTools: true,
  });


export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;


export const wrapper = createWrapper<AppStore>(makeStore);