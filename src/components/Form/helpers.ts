import { IField } from './interfaces';

export const prepearedFormInitialState = (list?: IField[]): { [key: string]: string } =>
  list ? list?.reduce((acc, field) => ({ ...acc, [field.id]: field?.defaultValue || '' }), {}) : {};

export const requiredFieldsList = (list?: IField[]): string[] =>
  list ? list?.filter((field) => field.required)?.map(({ id }) => id) : [];
