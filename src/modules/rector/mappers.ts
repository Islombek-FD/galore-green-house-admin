import get from 'lodash/get';

import { getMultiName } from '@/helpers/mappers';

import * as Types from './types';

export const getData = (item?): Types.IEntity.Data => ({
  id: get(item, 'id') || '',
  name: getMultiName(get(item, 'name')),
  description: getMultiName(get(item, 'description')),
  photoId: get(item, 'photo_id') || '',
  photoUrl: get(item, 'uploadpath') || '',
  status: get(item, 'status') || '',
});
