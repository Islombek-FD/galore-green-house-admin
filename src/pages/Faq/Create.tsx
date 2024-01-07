import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import message from 'antd/lib/message';

import * as Forms from '@/modules/faq/forms';

import Icon from '@/components/Icon';
import Spacer from '@/components/Spacer';
import Button from '@/components/Button';
import Spinner from '@/components/Spinner';
import PageHeader from '@/components/PageHeader';

import Form from './components/Form';

const Create: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Forms.Create
        onSuccess={() => {
          navigate(-1);
          message.success(t('successfully_created'));
        }}
      >
        {({ isSubmitting }) => (
          <>
            {isSubmitting && <Spinner full />}

            <PageHeader
              title={t('title_faq_create')}
              breadcrumb={{
                routes: [
                  {
                    to: '/',
                    icon: 'Home',
                  },
                  {
                    to: '/faqs',
                    name: t('title_faqs'),
                  },
                  {
                    name: t('title_faqs_create'),
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

            <Form />
          </>
        )}
      </Forms.Create>
    </>
  );
};

export default Create;
