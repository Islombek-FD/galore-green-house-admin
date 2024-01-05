import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import message from 'antd/lib/message';

import * as Forms from '@/modules/user/forms';
import * as Hooks from '@/modules/user/hooks';

import Icon from '@/components/Icon';
import Button from '@/components/Button';
import Spacer from '@/components/Spacer';
import Spinner from '@/components/Spinner';
import PageHeader from '@/components/PageHeader';

import Form from './components/Form';

const Update: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { item } = Hooks.useSingle({ id });

  return (
    <>
      <Forms.Update
        id={id}
        values={{
          firstName: item.firstName,
          lastName: item.lastName,
          username: item.username,
          password: item.password,
          role: item.role,
          status: item.status,
        }}
        onSuccess={() => {
          navigate(-1);
          message.success(t('successfully_updated'));
        }}
      >
        {({ isSubmitting }) => (
          <>
            {isSubmitting && <Spinner full />}

            <PageHeader
              title={t('title_user_update')}
              breadcrumb={{
                routes: [
                  {
                    to: '/',
                    icon: 'Home',
                  },
                  {
                    to: '/users',
                    name: t('title_users'),
                  },
                  {
                    name: t('title_user_update'),
                  },
                ],
              }}
              buttons={[
                <Button
                  title={t('action_cancel')}
                  variant='white'
                  prefixIcon={<Icon name='CloseCircle' />}
                  onClick={() => navigate(-1)}
                  key='cancel'
                />,
                <Button
                  title={t('action_save')}
                  variant='green'
                  htmlType='submit'
                  prefixIcon={<Icon name='CheckmarkCircle' />}
                  key='save'
                />,
              ]}
              onBack={() => navigate(-1)}
            />

            <Spacer size={24} />

            <Form mode='update' />
          </>
        )}
      </Forms.Update>
    </>
  );
};

export default Update;
