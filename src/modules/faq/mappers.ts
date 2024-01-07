import get from 'lodash/get';

import { getMultiName } from '@/helpers/mappers';

import * as Types from './types';

export const getData = (item?): Types.IEntity.Data => ({
  id: get(item, 'id') || '',
  title: getMultiName(get(item, 'title')),
  description: getMultiName(get(item, 'description')),
  status: get(item, 'status') || '',
});
