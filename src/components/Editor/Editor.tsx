import React, { useRef } from 'react';
import { Editor as BaseEditor, IAllProps } from '@tinymce/tinymce-react';
import kebabCase from 'lodash/kebabCase';
import cx from 'classnames';

import { BlobInfo, UploadFailureOptions } from './types';

import './Editor.scss';
import cls from './Editor.module.scss';

export interface IProps extends Omit<IAllProps, 'onChange'> {
  id: string;
  state?: 'default' | 'error';
  placeholder?: string;
  disabled?: boolean;
  minHeight?: number;
  value: string;
  height?: number;
  apiKey: string;
  message?: string | undefined;
  onChange: (value: string) => void;
  imagesUploadHandler?: (
    blobInfo: BlobInfo,
    onSuccess: (url: string) => void,
    onError: (err: string, options?: UploadFailureOptions) => void,
    progress?: (percent: number) => void,
  ) => void;
}

const Editor: React.FC<IProps> = ({
  id,
  placeholder,
  disabled,
  state = 'default',
  value,
  apiKey,
  message,
  onChange,
  imagesUploadHandler,
  minHeight = 400,
  ...props
}) => {
  const ref = useRef<any>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const editorId = kebabCase(id);

  return (
    <div
      className={cx(
        cls.wrapper,
        state && cls[`wrapper--state-${state}`],
        disabled && cls['wrapper--disabled'],
      )}
      ref={wrapperRef}
    >
      <div className={cls.editor}>
        <BaseEditor
          ref={ref}
          {...{ props }}
          {...{ id: editorId, apiKey, placeholder, disabled }}
          onInit={(_evt, editor) => (ref.current = editor)}
          onEditorChange={newValue => onChange && onChange(newValue || '')}
          value={value || ''}
          onFocus={() =>
            wrapperRef?.current && wrapperRef?.current?.classList.add(cls['wrapper--focused']!)
          }
          onBlur={() =>
            wrapperRef?.current && wrapperRef?.current?.classList.remove(cls['wrapper--focused']!)
          }
          init={{
            min_height: minHeight,
            readonly: disabled,
            placeholder,
            statusbar: false,
            menubar: false,
            image_title: true,
            automatic_uploads: true,
            plugins: [
              'autoresize',
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            file_picker_types: 'image',
            toolbar:
              ' undo redo | formatselect | ' +
              'bold italic underline blockquote forecolor backcolor | alignleft aligncenter ' +
              'alignright alignjustify | link image media | bullist numlist outdent indent | ' +
              'removeformat | table | code',
            images_upload_handler: imagesUploadHandler,
          }}
        />
      </div>
      {!!message && <div className={cls.message}>{message}</div>}
    </div>
  );
};

export default Editor;
