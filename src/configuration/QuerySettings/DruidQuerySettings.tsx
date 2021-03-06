import React, { FC } from 'react';
import { DruidQueryContextSettings, DruidQueryFormatSettings } from './';
import { QuerySettingsProps } from './types';

export const DruidQuerySettings: FC<QuerySettingsProps> = (props: QuerySettingsProps) => {
  return (
    <>
      <DruidQueryContextSettings {...props} />
      <DruidQueryFormatSettings {...props} />
    </>
  );
};
