import { AxiosPromise, CancelToken } from 'axios';

import { http } from '@/services';

import * as Types from './types';

export const Single = ({ id }: { id: string }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.get(`/files/${id}`);

export const Upload = ({
  values,
  onUploadProgress,
  cancelToken,
}: {
  values: Types.IForm.Upload;
  onUploadProgress: (e: any) => void;
  cancelToken: CancelToken;
}): AxiosPromise<Types.IApi.Single.Response> => {
  const data = new FormData();
  data.append('file', values.file);

  return http.request.post('/files/upload', data, {
    onUploadProgress,
    cancelToken,
  });
};

export const Download = ({ uuid }: { uuid: string }): AxiosPromise<Types.IApi.Single.Response> => {
  return http.request.get(`/files/download/${uuid}`, {
    responseType: 'blob',
  });
};

export const Delete = ({
  id,
}: {
  id: string;
}): AxiosPromise<{ data: Types.IApi.Single.Response }> => http.request.post(`/files/${id}`);
