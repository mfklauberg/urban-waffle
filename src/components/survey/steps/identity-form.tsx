import React, { Fragment } from 'react';
import type { ReactElement } from 'react';

import { Form, Input } from 'antd';

function IdentityForm(): ReactElement {
  return (
    <Fragment>
      <Form.Item label="Name" name="name">
        <Input placeholder="Enter your name (optional)" />
      </Form.Item>

      <Form.Item label="Email" name="email">
        <Input placeholder="Enter your email (optional)" type="email" />
      </Form.Item>
    </Fragment>
  );
}

export {
  IdentityForm,
};
