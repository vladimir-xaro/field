import { I_EventEmitter } from "@xaro/event-emitter";

export interface I_Field {
  el:       I_FieldEls;

  emitter:  I_EventEmitter;

  // input():  void;
  // lock():   void;
  // unlock(): void;
  validate(): boolean;
}

export interface I_FieldEls {
  wrapper:  HTMLElement;
  input:    HTMLInputElement;
  error:    HTMLElement;
}

export interface I_FieldConstructorConfig {
  el:   string | Element;
  on?:  {
    beforeInput?: (field: I_Field) => void;
    input?:       (field: I_Field, event: InputEvent) => void;
    lock?:        (field: I_Field) => void;
    unlock?:      (field: I_Field) => void;
  };
  validate?:      ((field: I_Field) => boolean) | ((field: I_Field) => boolean)[];
}

export interface I_FieldValidate {
  success:  boolean;
  msg:      string;
  data:     any;
}