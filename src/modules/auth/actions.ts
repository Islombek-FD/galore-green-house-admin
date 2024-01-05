import { action } from 'typesafe-actions';

import * as Types from './types';
import * as Constants from './constants';

export const Login = {
  request: (args: Types.IAction.Login.Request) => action(Constants.LOGIN.REQUEST, args),
};

export const Profile = {
  request: () => action(Constants.PROFILE.REQUEST),
  success: (args: Types.IAction.Profile.Request) => action(Constants.PROFILE.SUCCESS, args),
};

export const Logout = {
  request: () => action(Constants.LOGOUT.REQUEST),
  success: () => action(Constants.LOGOUT.SUCCESS),
};
