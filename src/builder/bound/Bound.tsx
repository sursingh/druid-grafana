import React, { FC } from 'react';
import { QueryBuilderProps } from '../types';
import { QueryBuilderComponentSelector } from '../abstract';
import { Polygon, Radius, Rectangular } from './';

export const Bound: FC<QueryBuilderProps> = (props: QueryBuilderProps) => (
  <QueryBuilderComponentSelector
    name="Bound"
    components={{ Polygon: Polygon, Radius: Radius, Rectangular: Rectangular }}
    queryBuilderProps={props}
  />
);
