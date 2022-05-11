import React from 'react';
import ReactDOM from 'react-dom/client';

import { Application, SurveyService } from '../src';

(() => {
  if (SurveyService.isSurveyCompleted()) {
    return;
  }

  setTimeout(() => {
    ReactDOM.createRoot(document.body).render(
      <React.StrictMode>
        <Application />
      </React.StrictMode>
    );
  }, 2000);
})();
