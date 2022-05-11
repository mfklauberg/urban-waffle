import React from 'react';
import type { ReactElement } from 'react';

import 'antd/dist/antd.css';

import { Survey } from './components';

function Application(): ReactElement {
  return (
    <Survey />
  )
}

export {
  Application,
};
