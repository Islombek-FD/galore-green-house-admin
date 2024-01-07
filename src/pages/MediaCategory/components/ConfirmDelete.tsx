import React from 'react';
import { useTranslation } from 'react-i18next';
import message from 'antd/lib/message';

import { useDelete } from '@/modules/mediacategory/hooks';

import ConfirmDeleteBase from '@/containers/ConfirmDelete';

interface IProps {
  id: string;
  onCancel: () => void;
}

const ConfirmDelete: React.FC<IProps> = ({ id, onCancel }) => {
  const { t } = useTranslation();
  const { mutate, isLoading } = useDelete();

  const onConfirm = () => {
    mutate(
      { id },
      {
        onSuccess: () => {
          onCancel();
          message.success(t('successfully_deleted'));
        },
      },
    );
  };

  return <ConfirmDeleteBase {...{ isLoading, onCancel, onConfirm }} />;
};

export default ConfirmDelete;
