import React, { FC } from 'react';
import { QueryBuilderProps } from '../types';
import { QueryBuilderComponentSelector } from '../abstract';
import { Expression } from './';

export const VirtualColumn: FC<QueryBuilderProps> = (props: QueryBuilderProps) => (
  <QueryBuilderComponentSelector
    name="VirtualColumn"
    components={{ Expression: Expression }}
    queryBuilderProps={props}
  />
);
