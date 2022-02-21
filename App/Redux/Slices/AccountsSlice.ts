import {createSlice, Dispatch} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {LoginCredentials, LoginUser} from '../../Models';
import {accountService} from '../../Services';
import {AppThunk} from '../store';
import {RootState} from './index';

const Accounts = createSlice({
  name: 'accounts',
  initialState: null,
  reducers: {
    setAccount(state, action) {
      return action.payload;
    },
  },
});

export const {setAccount} = Accounts.actions;

export const login =
  (loginForm: LoginCredentials): AppThunk =>
  async (dispatch: Dispatch) => {
    const user = await accountService.login(loginForm);
    if (!user) {
      Alert.alert('Wrong email or password, please try again');
    }
    dispatch(setAccount(user));
    return user;
  };

export const accountSelectors = {
  select: (state: RootState): LoginUser | null => state.accounts,
};

export default Accounts.reducer;
