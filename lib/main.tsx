import React from 'react';
import ReactDOM from 'react-dom/client';

import { Application, SurveyService } from '../src';

(() => {
  if (SurveyService.isSurveyCompleted()) {
    return;
  }

  setTimeout(() => {
    const surveyContainer = document.createElement('div');
    surveyContainer.setAttribute('id', 'ys-survey-container');

    document.body.appendChild(surveyContainer);

    const onFinish = (): void => {
      document.body.removeChild(surveyContainer);
    };

    ReactDOM.createRoot(surveyContainer).render(
      <React.StrictMode>
        <Application onFinish={onFinish} />
      </React.StrictMode>
    );
  }, 2000);
})();
