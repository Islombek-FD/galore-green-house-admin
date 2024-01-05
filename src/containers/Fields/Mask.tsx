import React from 'react';
import { useTranslation } from 'react-i18next';
import { useField } from 'formik';

import MaskBase, { IProps as InputProps } from '@/components/Input/Mask';

interface IProps extends Omit<InputProps, 'id' | 'value'> {
  name: string;
  caseUpper?: boolean;
  validation?: {
    required?: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
  };
  onChange?: (value: string) => void;
}

const Mask: React.FC<IProps> = ({ name, mask, caseUpper, validation, onChange, ...props }) => {
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

      if (!mask) {
        return t('validation_mask_not_valid');
      }

      if (validation.min && validation.min > Number(value)) {
        return t('validation_min', { min: validation.min });
      }

      if (validation.max && validation.max < Number(value)) {
        return t('validation_max', { max: validation.max });
      }

      if (validation.minLength && validation.minLength > (value || '').length) {
        return t('validation_min_length', { min: validation.minLength });
      }

      if (validation.maxLength && validation.maxLength < (value || '').length) {
        return t('validation_max_length', { max: validation.maxLength });
      }

      return '';
    },
  });

  const hasError = !!(meta.error && meta.touched);

  return (
    <MaskBase
      {...field}
      {...props}
      {...{ mask }}
      id={field.name}
      value={field.value || ''}
      state={hasError ? 'error' : 'default'}
      message={hasError ? meta.error : ''}
      onChange={value => {
        helper.setValue(caseUpper ? value.toUpperCase() : value);
        onChange && onChange(value);
      }}
    />
  );
};

export default Mask;
