import { I_EventEmitter } from "@xaro/event-emitter";
import { I_MicroDOM } from "@xaro/micro-dom";
// interface I_FieldCollection {}

/** Field */

export interface I_Field {
  emitter:  I_EventEmitter;
  el:       I_MicroDOM;     // wrapper
  inputs:   I_MicroDOM;     // node input els
  type:     string;         // text, checkbox, radio, ...
  name:     string;

  validate(): I_FieldValidateFnObj;
}

export interface I_FieldConstructorConfig {
  el:       string | Element | I_MicroDOM;
  name?:    string;
  value?:   string;
  errors?:  number;

  validate?: ((value: string, field: I_Field) => I_FieldValidateFnObj) | ((value: string, field: I_Field) => I_FieldValidateFnObj)[];

  on?: {
    input?:   ((value: string, event: InputEvent) => void) | ((value: string, event: InputEvent) => void)[];
    change?:  ((value: string, event: Event) => void) | ((value: string, event: Event) => void)[];
    click?:   ((event: MouseEvent) => void) | ((event: MouseEvent) => void)[];
  }
}

export interface I_FieldConfig {
  
}


/** Error */

export interface I_FieldError {
  el:       I_MicroDOM;
  // messages: string[];

  set(messages?: string[]): void;
  // setSingle(messages?: string): void;
}

export interface I_FieldErrorConstructorConfig {
  el:   I_MicroDOM;
  max?: number
  on?: {

  }
}


/** Common */

export interface I_FieldValidateFnObj {
  success:          boolean;
  message?:         string;
  continueOnError?: boolean;
  // data?:    any;
}
export interface I_FieldValidateObj {
  success:  boolean;
  messages: string[];
}


/** Types */

export type T_FieldTypes = 'text' | 'checkbox' | 'radio' | 'button' | 'submit';