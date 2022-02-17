import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { bookReducer } from './book/reducer';
import thunk from 'redux-thunk';

export type RootState = ReturnType<typeof combinedReducer>;

const combinedReducer = combineReducers({
  book: bookReducer,
});

const composeEnhancers = composeWithDevTools({});

export const store = createStore(combinedReducer, {}, composeEnhancers(applyMiddleware(thunk)));
