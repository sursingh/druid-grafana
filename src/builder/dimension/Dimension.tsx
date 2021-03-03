import React, { FC } from 'react';
import { QueryBuilderProps } from '../types';
import { QueryBuilderComponentSelector } from '../abstract';
import { Default, Extraction, ListFiltered, Lookup, RegisteredLookup, PrefixFiltered, RegexFiltered } from './';

export const Dimension: FC<QueryBuilderProps> = (props: QueryBuilderProps) => (
  <QueryBuilderComponentSelector
    name="Dimension"
    components={{
      Default: Default,
      Extraction: Extraction,
      ListFiltered: ListFiltered,
      Lookup: Lookup,
      RegisteredLookup: RegisteredLookup,
      PrefixFiltered: PrefixFiltered,
      RegexFiltered: RegexFiltered,
    }}
    queryBuilderProps={props}
  />
);
