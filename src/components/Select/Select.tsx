import React, { useState } from 'react';
import SelectBase, { SelectProps } from 'antd/lib/select';
import cx from 'classnames';

import Icon from '@/components/Icon';

import './Select.scss';
import cls from './Select.module.scss';

interface IOption {
  title: string;
  value: number | string;
  disabled?: boolean;
}

interface IOptionGroup {
  title: string;
  children: IOption[];
}

export interface IProps extends Omit<SelectProps, 'options' | 'onFocus' | 'onBlur'> {
  options: IOption[] | IOptionGroup[];
  state?: 'default' | 'error';
  message?: string;
}

export function hasChildren(option: any): option is IOptionGroup {
  return !!option?.children;
}

const Select: React.FC<IProps> = ({ options, state = 'default', message, disabled, ...props }) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <div
      className={cx(
        cls.wrapper,
        state && cls[`wrapper--state-${state}`],
        isFocused && cls['wrapper--focused'],
        disabled && cls['wrapper--disabled'],
      )}
    >
      <SelectBase
        className={cls.select}
        {...props}
        {...{ disabled }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onDropdownVisibleChange={open => setFocused(open)}
        suffixIcon={<Icon name='ChevronDown' size={14} />}
      >
        {options.map((option, index) => {
          if (hasChildren(option)) {
            return (
              <SelectBase.OptGroup label={option.title} key={index}>
                {option.children.map(option => (
                  <SelectBase.Option key={option.value} value={option.value}>
                    {option.title}
                  </SelectBase.Option>
                ))}
              </SelectBase.OptGroup>
            );
          }

          return (
            <SelectBase.Option value={option.value} disabled={option.disabled} key={index}>
              {option.title}
            </SelectBase.Option>
          );
        })}
      </SelectBase>
      {!!message && <div className={cls.message}>{message}</div>}
    </div>
  );
};

export default Select;
