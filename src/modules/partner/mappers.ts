import get from 'lodash/get';

import * as Types from './types';

export const getData = (item?): Types.IEntity.Data => ({
  id: get(item, 'id') || '',
  url: get(item, 'url') || '',
  photoId: get(item, 'photo_id') || '',
  photoUrl: get(item, 'uploadpath') || '',
  status: get(item, 'status') || '',
});
