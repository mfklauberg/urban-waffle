import React, { Fragment, ReactElement } from 'react';

import { Checkbox, Col, Form, Input, Row } from 'antd';
import { capitalize } from '../../../utils';

const availableColors = [
  ['black', 'blue', 'green', 'orange'],
  ['purple', 'red', 'white', 'yellow'],
];

function FavoritesForm(): ReactElement {
  return (
    <Fragment>
      <Form.Item label="What's your favorite book?" name="book" rules={[{ required: true, message: 'Please enter your favorite book.' }]}>
        <Input placeholder="Enter your favorite book" />
      </Form.Item>

      <Form.Item label="What are your favorite colors?" name="colors" rules={[{ required: true, message: 'Please select your favorite colors.' }]}>
        <Checkbox.Group>
          {
            availableColors.map((colors, index) => (
              <Row key={index}>
                {
                  colors.map((color, index) => (
                    <Col key={index} span={12}>
                      <Checkbox value={color} style={{ lineHeight: '32px' }}>
                        {capitalize(color)}
                      </Checkbox>
                    </Col>
                  ))
                }
              </Row>
            ))
          }
        </Checkbox.Group>
      </Form.Item>
    </Fragment>
  );
}

export {
  FavoritesForm,
};
