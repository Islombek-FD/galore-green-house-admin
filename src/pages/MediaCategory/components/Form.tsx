import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { STATUS } from '@/helpers/enums';

import { MEDIA_TYPE } from '@/modules/mediacategory/constants';

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
          fields={['name']}
        />
      </Grid.Col>

      <Grid.Col xs={24} xl={16}>
        <Label title={t('field_name')} required>
          <Fields.Text name={`name[${activeLanguage}]`} validation={{ required: true }} />
        </Label>
      </Grid.Col>

      <Grid.Col xs={24} xl={8}>
        <Grid.Row gutter={[24, 24]}>
          <Grid.Col xs={24}>
            <Label title={t('field_type')}>
              <Fields.Select
                name='type'
                options={[
                  {
                    value: MEDIA_TYPE.AUDIO,
                    title: t(MEDIA_TYPE.AUDIO),
                  },
                  {
                    value: MEDIA_TYPE.VIDEO,
                    title: t(MEDIA_TYPE.VIDEO),
                  },
                  {
                    value: MEDIA_TYPE.PHOTO,
                    title: t(MEDIA_TYPE.PHOTO),
                  },
                ]}
              />
            </Label>
          </Grid.Col>

          <Grid.Col xs={24}>
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
      </Grid.Col>
    </Grid.Row>
  );
};

export default Form;
