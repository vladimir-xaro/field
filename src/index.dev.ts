import './scss/index.dev.scss';

import Field from "./Field";
import { I_Field, I_FieldValidateFnObj } from './types';

const field = new Field({
  el:     '.field',
  name:   'test',
  // value:  '2',
  validate: [
    (value: string, field: I_Field): I_FieldValidateFnObj => {
      return {
        success:  /^\d+$/.test(value),
        message:  'Допустимы только цифры',
        continueOnError: true
      };
    },
    (value: string, field: I_Field): I_FieldValidateFnObj => {
      return {
        success:  /^(123)|(456)|(789)$/.test(value),
        message:  'Неверный формат',
        continueOnError: true
      };
    },
    (value: string, field: I_Field): I_FieldValidateFnObj => {
      return {
        success:  value.length >= 3,
        message:  'Длина меньше 3 символов',
        continueOnError: true
      };
    },
    (value: string, field: I_Field): I_FieldValidateFnObj => {
      return {
        success:  value.length <= 3,
        message:  'Длина больше 3 символов'
      };
    },
  ]
  // on: {
  //   input: (field: I_Field, event: InputEvent) => {
  //     console.log(field, event);
  //     console.log(field.validate());
  //   }
  // },
  // validate: [
  //   (field: I_Field): boolean => {
  //     const length = field.el.input.value.length;
  //     return length > 2 && length < 5;
  //   },
  //   (field: I_Field): boolean => {
  //     return /[0-9]+/.test(field.el.input.value);
  //   }
  // ]
});

console.log(field.values);

(window as any).field = field;