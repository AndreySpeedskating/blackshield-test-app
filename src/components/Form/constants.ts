import { IField } from './interfaces';

export const fieldsList: IField[] = [
  {
    id: 'first_name',
    type: 'inputText',
    label: 'First Name',
    defaultValue: 'Some first name',
  },
  {
    id: 'last_name',
    type: 'inputText',
    label: 'Last Name',
  },
  {
    id: 'email',
    type: 'inputEmail',
    label: 'Email',
    required: true,
  },
  {
    id: 'password',
    type: 'inputPassword',
    label: 'Password',
    required: true,
  },
];

export const fieldTypeAlias = {
  inputPassword: 'password',
  inputEmail: 'email',
  inputText: 'text',
};

export const placeholderAlias: { [key: string]: string } = {
  password: 'Введите пароль',
  email: 'Введите Email',
  first_name: 'Введите Ваше имя',
  last_name: 'Введите Вашу фамилию',
};

export const formValidationScheme: { [key: string]: RegExp } = {
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
  email: /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/,
};

export const errorMessage: { [key: string]: string } = {
  email: 'Укажите корректный email',
  password: 'Буквы верхнего и нижнего регистра, числа и 1 спецсимвол',
};
