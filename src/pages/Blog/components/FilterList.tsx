import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { STATUS } from '@/helpers/enums';

import { BLOG_TYPE } from '@/modules/blog/constants';

import * as Filters from '@/containers/Filters';

import * as Grid from '@/components/Grid';

const FilterList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const BLOG_TYPE_LIST = [BLOG_TYPE.NEW, BLOG_TYPE.ARTICLE];
  const STATUS_LIST = [STATUS.ACTIVE, STATUS.INACTIVE];

  const setParamValue = (name, value) => {
    searchParams.delete('page');
    if (value) searchParams.set(name, value);
    else searchParams.delete(name);
    setSearchParams(searchParams);
  };

  return (
    <Grid.Row gutter={[12, 12]}>
      <Grid.Col>
        <Filters.Input
          name='name'
          value={searchParams.get('name') || ''}
          setValue={value => setParamValue('name', value)}
        />
      </Grid.Col>

      <Grid.Col>
        <Filters.Input
          name='title'
          value={searchParams.get('title') || ''}
          setValue={value => setParamValue('title', value)}
        />
      </Grid.Col>

      <Grid.Col>
        <Filters.Select
          name='type'
          value={searchParams.get('type') || ''}
          setValue={value => setParamValue('type', value)}
          filterList={BLOG_TYPE_LIST}
        />
      </Grid.Col>

      <Grid.Col>
        <Filters.Select
          name='status'
          value={searchParams.get('status') || ''}
          setValue={value => setParamValue('status', value)}
          filterList={STATUS_LIST}
        />
      </Grid.Col>
    </Grid.Row>
  );
};

export default FilterList;
