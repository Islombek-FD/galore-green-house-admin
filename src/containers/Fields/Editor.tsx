import React from 'react';
import { useTranslation } from 'react-i18next';
import { useField } from 'formik';
import get from 'lodash/get';

import config from '@/config';

import { http } from '@/services';

import EditorBase, { IProps as EditorProps } from '@/components/Editor';
import { BlobInfo, UploadFailureOptions } from '@/components/Editor/types';

interface IProps extends Omit<EditorProps, 'id' | 'apiKey' | 'name' | 'onChange' | 'value'> {
  name: string;
  validation?: {
    required?: boolean;
    max?: number;
    min?: number;
  };
}

const Editor: React.FC<IProps> = ({ name, validation, ...props }) => {
  const { t } = useTranslation();

  const [field, meta, helper] = useField({
    name,
    validate: (value): string => {
      if (!validation) {
        return '';
      }

      if (validation.required && !value) {
        return t('validation_required');
      }

      if (validation.min && validation.min > (value || '').length) {
        return t('validation_min_length', { min: validation.min });
      }

      if (validation.max && validation.max < (value || '').length) {
        return t('validation_max_length', { max: validation.max });
      }

      return '';
    },
  });

  const hasError = !!(meta.error && meta.touched);

  const imagesUploadHandler = (
    blobInfo: BlobInfo,
    onSuccess: (url: string) => void,
    onError: (err: string, options?: UploadFailureOptions) => void,
    progress?: (percent: number) => void,
  ) => {
    const formData = new FormData();

    formData.append('file', blobInfo.blob());

    http.request
      .post('/file/open_source/upload', formData, {
        onUploadProgress: ({ total, loaded }) => {
          progress && progress((loaded / total) * 100);
        },
      })
      .then(({ data }) => {
        onSuccess(get(data, 'data.download_url'));
      })
      .catch(() => {
        onError('Error occurred', { remove: true });
      });
  };

  return (
    <EditorBase
      {...field}
      {...props}
      {...{ imagesUploadHandler }}
      apiKey={config.app.editorApiKey}
      id={field.name}
      value={field.value || ''}
      state={hasError ? 'error' : 'default'}
      message={hasError ? meta.error : ''}
      onChange={value => helper.setValue(value)}
    />
  );
};

export default Editor;
