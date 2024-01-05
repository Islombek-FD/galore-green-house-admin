import React from 'react';
import cx from 'classnames';
import TextareaBase from 'react-textarea-autosize';

import cls from './Textarea.module.scss';

export interface IProps {
  id: string;
  value: string;
  state?: 'default' | 'error';
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
  maxRows?: number;
  onChange?: (value: string) => void;
  onBlur?: any;
  message?: string | React.ReactNode;
}

const Textarea: React.FC<IProps> = ({
  id,
  value,
  state = 'default',
  placeholder,
  disabled,
  rows,
  onChange,
  onBlur,
  message,
  maxRows,
}) => (
  <div className={cx(cls.wrapper, state && cls[`wrapper--state-${state}`])}>
    <label className={cls.wrapperInner}>
      <TextareaBase
        {...{ id, value, placeholder, disabled, maxRows }}
        minRows={rows}
        className={cls.textarea}
        onChange={e => onChange && onChange(e.target.value)}
        onBlur={e => onBlur && onBlur(e)}
      >
        {value}
      </TextareaBase>
    </label>
    {!!message && <div className={cls.message}>{message}</div>}
  </div>
);

export default Textarea;
