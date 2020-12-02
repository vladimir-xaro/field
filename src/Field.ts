import EventEmitter, { I_EventEmitter } from "@xaro/event-emitter";
import _, { MicroDOM, I_MicroDOM } from "@xaro/micro-dom";
import { I_Field, I_FieldConstructorConfig, I_FieldError, I_FieldValidateFnObj, I_FieldValidateObj } from "./types";
import { domEventTypes, inputDomEvents } from "./variables";
import { initCheckboxConfigValues, initCheckboxInputValues, initRadioConfigValue, initRadioInputValue } from "./helpers";
import FieldError from "./Error";

export default class Field implements I_Field {
  el:         I_MicroDOM;
  emitter:    I_EventEmitter;
  inputs:     I_MicroDOM;
  error?:     I_FieldError;
  values:     string[] = [];
  type:       string;
  name:       string;
  validates:  ((value: string, field: I_Field) => I_FieldValidateFnObj)[] = [];
  validateOn: { input:  boolean, change: boolean } = {
    input:  true,
    change: true
  }

  constructor(config: I_FieldConstructorConfig) {
    this.el = config.el instanceof MicroDOM ? config.el : _(config.el as string | Element);

    if (! this.el.length) {
      throw new Error('Config.el is not valid');
    }

    this.emitter = new EventEmitter(config.on);

    this.inputs = this.el.get('.field__input');

    if (! this.inputs.length) {
      throw new Error('No input elements found');
    }

    this.type = (this.inputs[0] as HTMLInputElement).type;

    // ===

    const domEvents = domEventTypes[this.type].events.map(_idx => {
      return inputDomEvents[_idx];
    });

    const limit = domEventTypes[this.type].limit;
    if (limit > 0) {
      this.inputs.splice(limit, this.inputs.length);
    }

    for (const event of domEvents) {
      const methodName = `__${event}Listener`;
      this[methodName] = this[methodName].bind(this);

      for (const input of this.inputs) {
        input.addEventListener(event, this[methodName]);
      }
    }

    // ===
    
    if (config.name) {
      this.inputs.attr({ name: config.name });
      this.name = config.name;
    } else {
      this.name = (this.inputs[0] as HTMLInputElement).name;
    }

    // ===

    if (config.value) {
      if (this.type === 'checkbox') {
        this.values = initCheckboxConfigValues(this.inputs, config.value);
      } else if (this.type === 'radio') {
        this.values = initRadioConfigValue(this.inputs, config.value);
      } else {
        this.value = config.value;
        this.input.value = this.value;
      }
    } else {
      if (this.type === 'checkbox') {
        this.values = initCheckboxInputValues(this.inputs);
      } else if (this.type === 'radio') {
        this.values = initRadioInputValue(this.inputs);
      } else {
        this.value = this.input.value;
      }
    }

    // ===

    if (config.validate !== undefined) {
      this.validates = Array.isArray(config.validate) ? config.validate : [ config.validate ];
      // this.emitter.subscribe('__validate__', config.validate);
    }

    // ===

    if (typeof config.errors === 'undefined') {
      this.error = new FieldError({
        el: this.el.get('.field__errors')
      })
    }
  }


  /** Returns a value depending on the field type */
  get value(): string | string[] {
    if (this.type === 'checkbox') {
      return this.values;
    } else {
      return this.values[0];
    }
  }

  /** Sets the correct value of the values array */
  set value(value: string | string[]) {
    this.values = Array.isArray(value) ? value : [ value ];
  }

  /** Returns first input element from inputs array */
  get input(): HTMLInputElement {
    return this.inputs[0] as HTMLInputElement;
  }


  /** DOM Listeners */
  __inputListener(event: InputEvent) {
    (window as any).event = event;

    this.emitter.emit('input', this, event);
    
    // console.log('[Field] input', event);

    const validator: I_FieldValidateObj = this.validate();
    console.log(validator);

    this.error?.set(!validator.success ? validator.messages : undefined);
    // if (! validator.success) {
    //   this.error?.set(validator.messages);
    // } else {
    //   this.error?.set();
    // }
  }
  __changeListener(event: Event) {
    this.emitter.emit('change', this, event);
    
    console.log('[Field] change', event);
  }
  __clickListener(event: MouseEvent) {
    this.emitter.emit('click', this, event);

    console.log('[Field] click', event);
  }


  /** Validate series */
  validate(): I_FieldValidateObj {
    let success:  boolean   = true;
    let messages: string[]  = [];
    
    for (const fn of this.validates) {
      const validator = fn(this.input.value, this);
      if (! validator.success) {
        validator.message && messages.push(validator.message);
        success = false;

        if (! validator.continueOnError) {
          break;
        }
      }
    }

    return {
      success,
      messages
    }
  }
}