export interface IField {
  id: string;
  label: string;
  type: 'inputEmail' | 'inputPassword' | 'inputText';
  defaultValue?: number | string;
  required?: boolean;
}

export interface IFormDataState {
  [key: string]: string;
}

export interface IFormChangePayload {
  name: string;
  value: string;
}
