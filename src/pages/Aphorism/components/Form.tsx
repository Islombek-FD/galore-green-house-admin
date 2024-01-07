import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { STATUS } from '@/helpers/enums';

import * as Fields from '@/containers/Fields';

import * as Grid from '@/components/Grid';

import Label from '@/components/Label';

const Form: React.FC = () => {
  const { t } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState('oz');

  return (
    <Grid.Row gutter={[24, 24]}>
      <Grid.Col xs={24} xl={16}>
        <Fields.LanguageSwitcher
          active={activeLanguage}
          onChange={value => setActiveLanguage(value)}
          fields={['author', 'position', 'title']}
        />
      </Grid.Col>

      <Grid.Col xs={24} xl={16}>
        <Grid.Row gutter={[24, 24]}>
          <Grid.Col xs={24}>
            <Label title={t('field_author')} required>
              <Fields.Text name={`author[${activeLanguage}]`} validation={{ required: true }} />
            </Label>
          </Grid.Col>

          <Grid.Col xs={24}>
            <Label title={t('field_position')} required>
              <Fields.Text name={`position[${activeLanguage}]`} validation={{ required: true }} />
            </Label>
          </Grid.Col>

          <Grid.Col xs={24}>
            <Label title={t('field_title')} required>
              <Fields.Editor name={`title[${activeLanguage}]`} validation={{ required: true }} />
            </Label>
          </Grid.Col>
        </Grid.Row>
      </Grid.Col>

      <Grid.Col xs={24} xl={8}>
        <Label title={t('field_status')}>
          <Fields.Select
            name='status'
            options={[
              {
                value: STATUS.ACTIVE,
                title: t(STATUS.ACTIVE),
              },
              {
                value: STATUS.INACTIVE,
                title: t(STATUS.INACTIVE),
              },
            ]}
          />
        </Label>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Form;
