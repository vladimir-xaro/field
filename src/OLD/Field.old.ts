import EventEmitter, { I_EventEmitter } from "@xaro/event-emitter";
import { I_Field, I_FieldConstructorConfig, I_FieldEls } from "./types.old";

export default class Field implements I_Field {
  el:       I_FieldEls;
  emitter:  I_EventEmitter;

  constructor(config: I_FieldConstructorConfig) {
    if (config.el instanceof HTMLElement) {
      this.el = {
        wrapper:  config.el,
        input:    config.el.querySelector('.input') as HTMLInputElement,
        error:    config.el.querySelector('.error') as HTMLElement,
      };
    } else if (config.el instanceof Object) {
      this.el = {
        wrapper:  config.el.wrapper,
        input:    config.el.input && config.el.input instanceof HTMLElement ? config.el.input : config.el.wrapper.querySelector('.input') as HTMLInputElement,
        error:    config.el.error && config.el.error instanceof HTMLElement ? config.el.error : config.el.wrapper.querySelector('.error') as HTMLElement,
      };
    } else {
      throw new Error('[Field] Config is not correct');
    }

    this.emitter = new EventEmitter(config.on);

    this.el.input.addEventListener('input', this.input.bind(this) as EventListener);
  }

  get value() {
    return this.el.input.value;
  }

  set value(newValue: string) {
    this.el.input.value = newValue;
  }

  input(event: InputEvent) {
    this.emitter.emit('input', this, event);
  }

  lock() {
    // this.el.input.disable
    this.emitter.emit('lock', this);
  }

  unlock() {
    this.emitter.emit('unlock', this);
  }

  validate(): boolean {
    return this.emitter.validateEmit('validate', this);
  }

  reset(): void {
    this.el.input.value = '';
  }
}