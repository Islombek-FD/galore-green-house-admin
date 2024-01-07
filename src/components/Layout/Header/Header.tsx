import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from 'antd/lib/layout';
import cx from 'classnames';

import { useAuth } from '@/modules/auth/hooks';

import Icon from '@/components/Icon';
import Dropdown from '@/components/Dropdown';

import cls from './Header.module.scss';

interface Language {
  key: 'oz' | 'uz' | 'ru' | 'en' | 'ar';
  name: string;
  flag: 'Uzbek' | 'Russian' | 'English';
}

interface Item {
  name: string;
  icon: string;
  onClick: () => void;
}

interface IProps {
  header?: string;
  onToggle: () => void;
}

const Header: React.FC<IProps> = ({ onToggle }) => {
  const { t, i18n } = useTranslation();
  const {
    profile: { username },
    methods: { logout },
  } = useAuth();

  const languages: Language[] = useMemo(
    () => [
      {
        key: 'oz',
        name: 'uzbek_oz',
        flag: 'Uzbek',
      },
      {
        key: 'uz',
        name: 'uzbek_uz',
        flag: 'Uzbek',
      },
      {
        key: 'ru',
        name: 'russian',
        flag: 'Russian',
      },
      {
        key: 'en',
        name: 'uzbek_en',
        flag: 'English',
      },
      {
        key: 'ar',
        name: 'uzbek_ar',
        flag: 'Uzbek',
      },
    ],
    [],
  );

  const items: Item[] = useMemo(
    () => [
      {
        name: t('profile'),
        icon: 'Person',
        onClick: () => {
          console.log('Test.tsx');
        },
      },
      {
        name: t('logout'),
        icon: 'Logout',
        onClick: () => logout(),
      },
    ],
    [],
  );

  const currentLanguage = useMemo(
    () => languages.find(language => language.key === i18n.language),
    [i18n.language],
  );

  return (
    <Layout.Header className={cls.wrapper}>
      <Icon className={cls.toggle} onClick={onToggle} name='Menu' size={28} />

      <div className={cls.settings}>
        <Dropdown
          menu={{
            items: [
              ...languages.map(item => ({
                key: item.name,
                label: (
                  <div
                    className={cx(cls.language, item.key === i18n.language && cls.active)}
                    onClick={() => i18n.changeLanguage(item.key)}
                  >
                    <Icon name={item.flag} type='flag' size={20} />
                    <div>{item.name}</div>
                  </div>
                ),
              })),
            ],
          }}
          overlayClassName={cls.overlay}
          placement='bottomRight'
          trigger={['click']}
        >
          <div className={cls.currentLanguage}>
            <Icon name={currentLanguage.flag} type='flag' variant='regular' size={32} />
          </div>
        </Dropdown>

        <Dropdown
          menu={{
            items: [
              ...items.map(item => ({
                key: item.name,
                label: (
                  <div className={cls.item} onClick={item.onClick}>
                    <Icon name={item.icon} size={16} />
                    <div>{item.name}</div>
                  </div>
                ),
              })),
            ],
          }}
          overlayClassName={cls.overlay}
          trigger={['click']}
        >
          <div className={cls.name}>{username.charAt(0)}</div>
        </Dropdown>
      </div>
    </Layout.Header>
  );
};

export default Header;
