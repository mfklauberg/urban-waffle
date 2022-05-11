import type { SurveyState } from '../types';

import { LocalStorageService } from './local-storage-service';

interface SurveyServiceInterface {
  getSurveyState: () => SurveyState | null;
  isSurveyCompleted: () => boolean;
  saveSurveyState: (state: SurveyState) => void;
  setSurveyCompleted: () => void;
}

const COMPLETED_KEY = 'survey.completed';
const STATE_KEY = 'survey.state';

function createService(): SurveyServiceInterface {
  const saveSurveyState = (state: SurveyState): void => {
    const stringified = JSON.stringify(state, null, 0);

    LocalStorageService.write(STATE_KEY, stringified);
  };

  const getSurveyState = (): SurveyState | null => {
    const savedState = LocalStorageService.read(STATE_KEY);

    if (!savedState) {
      return null;
    }

    const state = JSON.parse(savedState);

    return state;
  };

  const setSurveyCompleted = (): void => {
    LocalStorageService.write(COMPLETED_KEY, 'completed');
  };

  const isSurveyCompleted = (): boolean => {
    return Boolean(LocalStorageService.read(COMPLETED_KEY));
  };

  return {
    getSurveyState,
    isSurveyCompleted,
    saveSurveyState,
    setSurveyCompleted,
  };
}

const SurveyService = createService();

export type {
  SurveyServiceInterface,
};

export {
  SurveyService,
};
