interface SurveyData {
  name?: string;
  email?: string;
  age: number;
  gender: 'female' | 'male' | 'others';
  book: string;
  colors: string[];
}

interface SurveyState {
  step: number;
  data: SurveyData;
}

export type {
  SurveyData,
  SurveyState,
};
