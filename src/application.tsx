import React, { useState } from 'react';
import type { ReactElement } from 'react';

import 'antd/dist/antd.css';

import { Survey } from './components';
import { Modal } from 'antd';

interface ApplicationProps {
  onFinish?: () => void;
}

function Application(props: ApplicationProps): ReactElement {
  const [visible, setVisible] = useState(true);

  const onSurveySubmit = (): void => {
    setVisible(false);

    if (props.onFinish) {
      props.onFinish();
    }
  };

  return (
    <Modal
      closable={false}
      footer={false}
      title="Survey!"
      visible={visible}
      width="1024px"
    >
      <Survey onSubmit={onSurveySubmit} />
    </Modal>
  )
}

export {
  Application,
};
