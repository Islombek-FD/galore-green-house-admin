import React from 'react';
import { useTranslation } from 'react-i18next';
import { useField } from 'formik';

import Input, { IProps as InputProps } from '@/components/Input/Number';

export interface IProps extends Omit<InputProps, 'id' | 'value'> {
  name: string;
  validation?: {
    required?: boolean;
    max?: number;
    min?: number;
  };
}

const NumberField: React.FC<IProps> = ({ name, validation, ...props }) => {
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

      if (validation.min && validation.min > Number(value)) {
        return t('validation_min_length', { min: validation.min });
      }

      if (validation.max && validation.max < Number(value)) {
        return t('validation_max_length', { max: validation.max });
      }

      return '';
    },
  });

  const hasError = !!(meta.error && meta.touched);

  return (
    <Input
      {...field}
      {...props}
      id={field.name}
      value={field.value?.toString() || ''}
      state={hasError ? 'error' : 'default'}
      message={hasError ? meta.error : ''}
      onChange={value => {
        helper.setValue(value);
      }}
    />
  );
};

export default NumberField;
