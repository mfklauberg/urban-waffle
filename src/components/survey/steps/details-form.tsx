import React, { Fragment } from 'react';

import { Form, Radio, Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { capitalize } from '../../../utils';

const ageEighteenToHundred = [...Array(83)].map((_, index) => ({
  value: index + 18,
  label: String(index + 18),
}));

const genders = [
  'female', 'male', 'other',
];

function DetailsForm() {
  return (
    <Fragment>
      <Form.Item label="Age" name="age" rules={[{ required: true, message: 'Please inform your age.' }]}>
        <Select placeholder="Enter your age">
          {
            ageEighteenToHundred.map((age) => (
              <Select.Option key={age.value} value={age.value}>{age.label}</Select.Option>
            ))
          }
        </Select>
      </Form.Item>

      <FormItem label="Gender" name="gender" rules={[{ required: true, message: 'Please enter your gender.' }]}>
        <Radio.Group>
          {
            genders.map((gender) => (
              <Radio value={gender}>{capitalize(gender)}</Radio>
            ))
          }
        </Radio.Group>
      </FormItem>
    </Fragment>
  );
}

export {
  DetailsForm,
};
