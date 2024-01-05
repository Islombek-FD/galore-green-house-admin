import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import message from 'antd/lib/message';

import * as Forms from '@/modules/pageinfo/forms';
import * as Hooks from '@/modules/pageinfo/hooks';
import { PAGE_NAME } from '@/modules/pageinfo/constants';

import Icon from '@/components/Icon';
import Spacer from '@/components/Spacer';
import Button from '@/components/Button';
import PageHeader from '@/components/PageHeader';

import Form from './components/Form';

const PageInfo: React.FC = () => {
  const { t } = useTranslation();
  const [query] = useSearchParams();

  const { item } = Hooks.useSingle({ pageName: query.get('pageName') as PAGE_NAME });

  return (
    <>
      <Forms.Save
        values={{
          info: item.info,
          pageName: item.pageName,
        }}
        onSuccess={() => {
          message.success(t('successfully_saved'));
        }}
      >
        {() => (
          <>
            <PageHeader
              title={t('title_page_infos')}
              breadcrumb={{
                routes: [
                  {
                    to: '/',
                    icon: 'Home',
                  },
                  {
                    name: t('title_page_infos'),
                  },
                ],
              }}
              buttons={[
                <Button
                  title={t('action_save')}
                  variant='green'
                  htmlType='submit'
                  prefixIcon={<Icon name='CheckmarkCircle' />}
                  key='save'
                />,
              ]}
            />

            <Spacer size={24} />

            <Form />
          </>
        )}
      </Forms.Save>
    </>
  );
};

export default PageInfo;
