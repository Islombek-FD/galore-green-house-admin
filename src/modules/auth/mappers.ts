import get from 'lodash/get';

import type * as Types from './types';

export const Profile = (item?): Types.IEntity.Profile => ({
  id: get(item, 'id') || '',
  username: get(item, 'user_name') || '',
  role: get(item, 'user_role') || '',
});

export const Token = (item?): Types.IEntity.Token => ({
  token: get(item, 'token') || '',
});
