import React from 'react';
import { useTranslation } from 'react-i18next';

import { STATUS } from '@/helpers/enums';

import * as Fields from '@/containers/Fields';

import * as Grid from '@/components/Grid';

import Label from '@/components/Label';

const Form: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Grid.Row gutter={[24, 24]}>
      <Grid.Col xs={24} xl={16}>
        <Label title={t('field_photo')} required>
          <Fields.Uploader
            name='photoId'
            type='image'
            accept={['image/*']}
            maxFileSize={10240}
            details={{ resolution: '512 x 512', extension: 'svg, png, jpg', size: '10 мб' }}
            validation={{ required: true }}
          />
        </Label>
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
