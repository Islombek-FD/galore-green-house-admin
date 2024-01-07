import { AxiosPromise } from 'axios';

import { http } from '@/services';

import { getQuery } from '@/helpers/utils';
import { IParams } from '@/helpers/interfaces';

import * as Types from './types';

export const List = ({ params }: { params: IParams }): AxiosPromise<Types.IApi.List.Response> => {
  const query = getQuery(params.page, params.limit, params.search);
  return http.request.post(`/admin/banners/pageable?${query}`);
};

export const Single = ({ id }: { id: string }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.get(`/admin/banners/${id}`);

export const Create = ({
  values,
}: {
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.post('/admin/banners', {
    photo_id: values.photoId,
    status: values.status,
  });

export const Update = ({
  id,
  values,
}: {
  id: string;
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.put(`/admin/banners/${id}`, {
    photo_id: values.photoId,
    status: values.status,
  });

export const Delete = ({ id }: { id: string }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.delete(`/admin/banners/${id}`);
