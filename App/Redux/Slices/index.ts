import {combineReducers} from 'redux';
import AccountsSlice, {accountSelectors} from './AccountsSlice';
import OrderSlice, {OrderSelectors} from './OrderSlice';

const rootReducer = combineReducers({
  accounts: AccountsSlice,
  order: OrderSlice,
});

export default rootReducer;

export const selectors = {
  account: accountSelectors,
  order: OrderSelectors,
};

export type RootState = ReturnType<typeof rootReducer>;
