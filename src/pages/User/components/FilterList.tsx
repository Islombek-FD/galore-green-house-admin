import React from 'react';

import { STATUS } from '@/helpers/enums';

import useFilter from '@/hooks/useFilter';

import * as Filters from '@/containers/Filters';

import * as Grid from '@/components/Grid';

const FilterList: React.FC = () => {
  const [query, setParamValue] = useFilter();

  return (
    <Grid.Row gutter={[12, 12]}>
      <Grid.Col>
        <Filters.Input
          name='first_name'
          value={query.get('first_name') || ''}
          setValue={value => setParamValue('first_name', value)}
        />
      </Grid.Col>

      <Grid.Col>
        <Filters.Input
          name='last_name'
          value={query.get('last_name') || ''}
          setValue={value => setParamValue('last_name', value)}
        />
      </Grid.Col>

      <Grid.Col>
        <Filters.Input
          name='username'
          value={query.get('username') || ''}
          setValue={value => setParamValue('username', value)}
        />
      </Grid.Col>

      <Grid.Col>
        <Filters.Select
          name='status'
          value={query.get('status') || ''}
          setValue={value => setParamValue('status', value)}
          filterList={[STATUS.ACTIVE, STATUS.INACTIVE]}
        />
      </Grid.Col>
    </Grid.Row>
  );
};

export default FilterList;
