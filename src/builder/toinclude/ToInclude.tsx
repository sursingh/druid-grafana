import React, { FC } from 'react';
import { QueryBuilderProps } from '../types';
import { QueryBuilderComponentSelector } from '../abstract';
import { All, List, None } from './';

export const ToInclude: FC<QueryBuilderProps> = (props: QueryBuilderProps) => (
  <QueryBuilderComponentSelector
    name="ToInclude"
    components={{ All: All, List: List, None: None }}
    queryBuilderProps={props}
  />
);
