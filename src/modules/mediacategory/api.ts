import { AxiosPromise } from 'axios';

import { http } from '@/services';

import { getQuery } from '@/helpers/utils';
import { STATUS } from '@/helpers/enums';
import { IParams } from '@/helpers/interfaces';

import * as Types from './types';

export const List = ({ params }: { params: IParams }): AxiosPromise<Types.IApi.List.Response> => {
  const query = getQuery(params.page, params.limit, params.search);
  return http.request.post(`/admin/media-category/pageable?${query}`);
};

export const Single = ({ id }: { id: string }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.get(`/admin/media-category/${id}`);

export const Create = ({
  values,
}: {
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.post('/admin/media-category', {
    name: values.name,
    type: values.type,
    status: values.status === STATUS.ACTIVE,
  });

export const Update = ({
  id,
  values,
}: {
  id: string;
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.put(`/admin/media-category/${id}`, {
    name: values.name,
    type: values.type,
    status: values.status === STATUS.ACTIVE,
  });

export const Delete = ({ id }: { id: string }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.delete(`/admin/media-category/${id}`);
