import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer, RootState } from './reducers';

export const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
