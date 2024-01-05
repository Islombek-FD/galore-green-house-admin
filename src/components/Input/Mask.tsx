import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';

import { MASK_TYPE, MaskInputProps } from './Types';
import Wrapper from './Wrapper';

export type IProps = MaskInputProps;

const maskTypeFn = (type?: MASK_TYPE | string) => {
  switch (type) {
    case MASK_TYPE.NUMBER:
      return /^\d+$/;
    case MASK_TYPE.EMAIL:
      return /^[A-Za-z\d._%+-]+@[a-z\d.-]+\.[a-z]{2,4}$/;
    case MASK_TYPE.ONLY_TEXT:
      return /^[a-zA-Zа-яА-ЯёЁ]$/;
    case MASK_TYPE.TEXT:
    default:
      return /^\w+$/;
  }
};

const Mask: React.FC<IProps> = ({
  id,
  size = 'medium',
  state = 'default',
  mask,
  maskType = MASK_TYPE.TEXT,
  unmask = true,
  lazy,
  placeholderChar = '_',
  value,
  placeholder,
  disabled,
  readOnly,
  autoFocus,
  onChange,
  onBlur,
  prefix,
  suffix,
  iconPrefix,
  onIconPrefix,
  iconSuffix,
  onIconSuffix,
  prepare,
  message,
  ...props
}) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <Wrapper
      {...{
        size,
        state,
        isFocused,
        disabled,
        prefix,
        suffix,
        iconPrefix,
        onIconPrefix,
        iconSuffix,
        onIconSuffix,
        message,
      }}
    >
      <IMaskInput
        {...{
          id,
          lazy,
          mask,
          unmask,
          placeholder,
          placeholderChar,
          disabled,
          readOnly,
          autoFocus,
          prepare,
        }}
        {...props}
        value={String(value || '')}
        type={maskType === MASK_TYPE.NUMBER ? 'tel' : 'text'}
        onAccept={(value: string) => onChange && onChange(value)}
        onFocus={() => setFocused(true)}
        onBlur={e => {
          setFocused(false);
          onBlur && onBlur(e);
        }}
        definitions={{ '#': maskTypeFn(maskType) }}
        autoComplete='off'
        autoCorrect='off'
        autoCapitalize='off'
        spellCheck='false'
      />
    </Wrapper>
  );
};

export default Mask;
