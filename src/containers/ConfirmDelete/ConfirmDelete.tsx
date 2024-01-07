import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/components/Button';
import Spinner from '@/components/Spinner';

import cls from './ConfirmDelete.module.scss';

interface IProps {
  isLoading: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmDelete: React.FC<IProps> = ({ isLoading, onCancel, onConfirm }) => {
  const { t } = useTranslation();

  return (
    <Spinner spinning={isLoading}>
      <div className={cls.wrapper}>
        <div className={cls.name}>{t('are_you_delete_this')}</div>
        <div className={cls.buttons}>
          <Button
            title={t('action_cancel')}
            variant='neutral'
            onClick={onCancel}
            size='small'
            block
          />
          <Button title={t('action_delete')} variant='red' onClick={onConfirm} size='small' block />
        </div>
      </div>
    </Spinner>
  );
};

export default ConfirmDelete;
