import React, { FC } from 'react';
import { QueryBuilderProps } from '../types';
import { QueryBuilderComponentSelector } from '../abstract';
import { Default } from './';

export const LimitSpec: FC<QueryBuilderProps> = (props: QueryBuilderProps) => (
  <QueryBuilderComponentSelector name="LimitSpec" components={{ Default: Default }} queryBuilderProps={props} />
);
