import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ROLE } from '@/helpers/enums';

import { useList } from '@/modules/user/hooks';
import { IEntity } from '@/modules/user/types';

import TableContainer from '@/containers/Table';
import PaginationContainer from '@/containers/Pagination';

import Tag from '@/components/Tag';
import Icon from '@/components/Icon';
import Table from '@/components/Table';
import Modal from '@/components/Modal';
import Spacer from '@/components/Spacer';
import Button from '@/components/Button';
import PageHeader from '@/components/PageHeader';

import FilterList from './components/FilterList';
import ConfirmDelete from './components/ConfirmDelete';

import cls from '@/assets/styles/base/page.module.scss';

const List: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [query] = useSearchParams();
  const [selected, setSelected] = useState('');

  const { items, meta, isFetched } = useList({
    params: {
      page: +query.get('page')!,
      search: query.get('search') || '',
    },
  });

  return (
    <>
      <div>
        <PageHeader
          title={t('title_users')}
          breadcrumb={{
            routes: [
              {
                to: '/',
                icon: 'Home',
              },
              {
                name: t('title_users'),
              },
            ],
          }}
          buttons={[
            <Button
              title={t('action_add')}
              variant='green'
              size='medium'
              prefixIcon={<Icon name='AddCircle' />}
              onClick={() => navigate('/users/create')}
              key='create'
            />,
          ]}
        />

        <Spacer size={24} />

        <FilterList />

        <Spacer size={24} />

        <TableContainer<IEntity.Data>
          rowKey='id'
          columns={[
            {
              title: '№',
              width: '60px',
              render: (text, record, index) => (meta.current - 1) * meta.size + index + 1,
            },
            {
              key: 'firstName',
              title: t('column_first_name'),
              dataIndex: 'firstName',
            },
            {
              key: 'lastName',
              title: t('column_last_name'),
              dataIndex: 'lastName',
            },
            {
              key: 'username',
              title: t('column_username'),
              dataIndex: 'username',
            },
            {
              key: 'createdAt',
              title: t('column_created_at'),
              dataIndex: 'createdAt',
              width: 200,
            },
            {
              key: 'updatedAt',
              title: t('column_updated_at'),
              dataIndex: 'updatedAt',
              width: 200,
            },
            {
              key: 'role',
              title: t('column_role'),
              align: 'center',
              dataIndex: 'role',
              render: value => (
                <Tag variant='INFO' size='sm'>
                  {t(value)}
                </Tag>
              ),
            },
            {
              key: 'status',
              title: t('column_status'),
              dataIndex: 'status',
              align: 'center',
              width: 120,
              render: value => <Tag variant={value}>{t(value)}</Tag>,
            },
            {
              title: <Table.Content.Settings />,
              width: 45,
              fixed: 'right',
              align: 'center',
              onCell: () => ({
                onClick: e => e.stopPropagation(),
              }),
              render: (v, item) => (
                <Table.Content.More
                  items={[
                    {
                      title: t('action_edit'),
                      icon: <Icon name='Edit' />,
                      roles: [ROLE.ADMIN],
                      variant: 'blue',
                      onClick: () => navigate(`/users/update/${item.id}`),
                    },
                    {
                      title: t('action_delete'),
                      icon: <Icon name='Delete' />,
                      roles: [ROLE.ADMIN],
                      variant: 'danger',
                      onClick: () => setSelected(item.id),
                    },
                  ]}
                />
              ),
            },
          ]}
          dataSource={items}
          loading={!isFetched}
          scroll={{ x: true }}
        />

        <Spacer size={24} />

        <div className={cls.pagination}>
          <PaginationContainer total={meta.totalPages} current={meta.current} />
        </div>
      </div>

      <Modal open={!!selected} onCancel={() => setSelected('')} width={320}>
        <ConfirmDelete id={selected} onCancel={() => setSelected('')} />
      </Modal>
    </>
  );
};

export default List;
