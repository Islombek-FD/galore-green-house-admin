import { AxiosPromise } from 'axios';

import { http } from '@/services';

import * as Types from './types';

export const Login = ({
  values,
}: {
  values: Types.IForm.Login;
}): AxiosPromise<Types.IApi.Login.Response> =>
  http.request.post('/login', {
    login: values.username,
    pass: values.password,
  });

export const Logout = (): AxiosPromise<Types.IApi.Profile.Response> => http.request.post('/logout');

export const Profile = ({ token }: { token: string }): AxiosPromise<Types.IApi.Profile.Response> =>
  http.request.post('/check_token', { token });
