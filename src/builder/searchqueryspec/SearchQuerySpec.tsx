import React, { FC } from 'react';
import { QueryBuilderProps } from '../types';
import { QueryBuilderComponentSelector } from '../abstract';
import { All, Contains, Fragment, InsensitiveContains, Regex } from './';

export const SearchQuerySpec: FC<QueryBuilderProps> = (props: QueryBuilderProps) => (
  <QueryBuilderComponentSelector
    name="SearchQuerySpec"
    components={{
      All: All,
      Contains: Contains,
      Fragment: Fragment,
      InsensitiveContains: InsensitiveContains,
      Regex: Regex,
    }}
    queryBuilderProps={props}
  />
);
