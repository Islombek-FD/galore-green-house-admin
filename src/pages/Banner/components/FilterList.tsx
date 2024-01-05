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
