import get from 'lodash/get';

import { getMultiName } from '@/helpers/mappers';

import * as Types from './types';

export const getData = (item?): Types.IEntity.Data => ({
  id: get(item, 'id') || '',
  author: getMultiName(get(item, 'author')),
  position: getMultiName(get(item, 'position')),
  title: getMultiName(get(item, 'title')),
  status: get(item, 'status') || '',
});
