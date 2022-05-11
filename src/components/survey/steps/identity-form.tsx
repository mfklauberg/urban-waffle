import React, { Fragment } from 'react';

import { Form, Input } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

function IdentityForm() {
  return (
    <Fragment>
      <Form.Item label="Name" name="name">
        <Input placeholder="Enter your name (optional)" />
      </Form.Item>

      <FormItem label="Email" name="email">
        <Input placeholder="Enter your email (optional)" type="email" />
      </FormItem>
    </Fragment>
  );
}

export {
  IdentityForm,
};
