import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';

import { Button, Form, Spin, Steps } from 'antd';

import { SurveyService } from '../../services';
import type { SurveyData } from '../../types';

import { DetailsForm, FavoritesForm, IdentityForm, Summary } from './steps';

import './survey.css';

interface ButtonOptions {
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
  totalSteps: number;
}

function getButtons(options: ButtonOptions): ReactElement[] {
  const buttons: ReactElement[] = [
    <Button disabled={options.currentIndex === 0} key="prev" onClick={options.onPrevious}>Previous</Button>,
  ];

  if (options.currentIndex === options.totalSteps - 1){
    buttons.push(<Button key="submit" onClick={options.onSubmit}>Submit</Button>);
  } else {
    buttons.push(<Button key="next" onClick={options.onNext}>Next</Button>);
  }

  return buttons;
}

const steps = [
  { id: 'identity', title: 'Identity', content: IdentityForm, },
  { id: 'details', title: 'Details', content: DetailsForm, },
  { id: 'favorites', title: 'Favorites', content: FavoritesForm, },
  { id: 'summary', title: 'Summary', content: Summary, },
];

function Survey(): ReactElement {
  const [currentStep, setCurrentStep] = useState(0);

  // @ts-ignore
  const [surveyData, setSurveryData] = useState<SurveyData>({});

  const [isStateChecked, setIsStateChecked] = useState(false);

  useEffect(() => {
    const state = SurveyService.getSurveyState();

    if (!state) {
      setIsStateChecked(true);

      return;
    }

    setCurrentStep(state.step);
    setSurveryData(state.data);
    setIsStateChecked(true);
  }, []);

  const [form] = Form.useForm();

  if (!isStateChecked) {
    return (
      <div className="c-survey__loading">
        <Spin />
      </div>
    );
  }

  const onNextClick = (): void => {
    form.validateFields()
      .then((value) => {
        const updatedData = { ...surveyData, ...value };
        const nextStep = currentStep + 1;

        setSurveryData(updatedData);
        setCurrentStep(nextStep);

        SurveyService.saveSurveyState({
          data: updatedData,
          step: nextStep,
        });
      });
  };

  const onPreviousClick = (): void => {
    const previousStep = currentStep - 1;

    setCurrentStep(previousStep);

    SurveyService.saveSurveyState({
      data: surveyData,
      step: previousStep,
    });
  };

  const onSubmitClick = (): void => {
    SurveyService.saveSurveyState({
      data: surveyData,
      step: currentStep,
    });

    SurveyService.setSurveyCompleted();
  }

  const buttons = getButtons({
    currentIndex: currentStep,
    onNext: onNextClick,
    onPrevious: onPreviousClick,
    onSubmit: onSubmitClick,
    totalSteps: steps.length,
  });

  const StepContent = steps[currentStep].content;

  return (
    <div className="c-survey">
      <div className="c-survery__steps">
        <Steps current={currentStep}>
          {steps.map((step) => (
            <Steps.Step key={step.id} title={step.title} />
          ))}
        </Steps>
      </div>

      <div className="c-survey__content">
        <Form
          autoComplete="off"
          form={form}
          labelCol={{ span: 8 }}
          layout="vertical"
          wrapperCol={{ span: 16 }}
          initialValues={surveyData}
        >
          {/* @ts-ignore */}
          <StepContent data={surveyData} />
        </Form>
      </div>

      <div className="c-survey__actions">
        {buttons}
      </div>
    </div>
  );
}

export {
  Survey,
};
