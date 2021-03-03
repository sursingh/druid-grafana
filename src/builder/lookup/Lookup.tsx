import React, { FC } from 'react';
import { QueryBuilderProps } from '../types';
import { QueryBuilderComponentSelector } from '../abstract';
import { Map } from './';

export const Lookup: FC<QueryBuilderProps> = (props: QueryBuilderProps) => (
  <QueryBuilderComponentSelector name="Lookup" components={{ Map: Map }} queryBuilderProps={props} />
);
