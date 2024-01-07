import React from 'react';
import cx from 'classnames';

import Icon from '@/components/Icon';

import Menu from './Menu';

import cls from './Filter.module.scss';

interface IProps {
  title: string;
  value: string;
  isActive?: boolean;
  onClear?: () => void;
}

interface IComponent extends React.FC<IProps> {
  Menu: typeof Menu;
}

const Filter: IComponent = ({ title, value, isActive, onClear }) => (
  <div className={cx(cls.wrapper, isActive && cls['wrapper--active'])}>
    <div className={cls.title}>{title}:</div>
    <div className={cls.value}>{value}</div>
    {isActive && (
      <div
        className={cls.clear}
        onClick={e => {
          e.stopPropagation();
          onClear && onClear();
        }}
      >
        <Icon name='DismissCircle' />
      </div>
    )}
  </div>
);

Filter.Menu = Menu;

export default Filter;
