import React, { FC } from 'react';
import { QueryBuilderProps } from '../types';
import { QueryBuilderComponentSelector } from '../abstract';
import { Duration, Period, Simple } from './';

export const Granularity: FC<QueryBuilderProps> = (props: QueryBuilderProps) => (
  <QueryBuilderComponentSelector
    name="Granularity"
    components={{ Duration: Duration, Period: Period, Simple: Simple }}
    queryBuilderProps={props}
  />
);
