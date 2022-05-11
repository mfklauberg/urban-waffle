import React, { Fragment } from 'react';
import type { ReactElement } from 'react';

import { Descriptions } from 'antd';

import type { SurveyData } from '../../../types';
import { capitalize, formatList } from '../../../utils';

interface SummaryProps {
  data: SurveyData;
}

function Summary(props: SummaryProps): ReactElement {
  const { data } = props;

  return (
    <Fragment>
      <Descriptions title="Identity">
        <Descriptions.Item label="Name">{props.data.name ?? 'N/A'}</Descriptions.Item>
        <Descriptions.Item label="Email">{props.data.email ?? 'N/A'}</Descriptions.Item>
      </Descriptions>

      <Descriptions title="Details">
        <Descriptions.Item label="Age">{data.age}</Descriptions.Item>
        <Descriptions.Item label="Gender">{capitalize(data.gender)}</Descriptions.Item>
      </Descriptions>

      <Descriptions title="Favorites">
        <Descriptions.Item label="Favorite Book">{data.book}</Descriptions.Item>
        <Descriptions.Item label="Favorite Colors">{formatList(data.colors)}</Descriptions.Item>
      </Descriptions>
    </Fragment>
  );
}

export {
  Summary,
};
