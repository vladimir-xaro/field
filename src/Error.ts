import CSSClassAnimations, { I_CSSClassAnimations } from "@xaro/css-class-animations";
import EventEmitter, { I_EventEmitter } from "@xaro/event-emitter";
import _, { I_MicroDOM, MicroDOM } from "@xaro/micro-dom";
import { I_FieldError, I_FieldErrorConstructorConfig } from "./types";

export default class FieldError implements I_FieldError {
  el:         I_MicroDOM;
  emitter:    I_EventEmitter;
  animations: I_CSSClassAnimations[] = [];

  messages:   string[] = [];
  els:        I_MicroDOM = new MicroDOM;

  max:        number;
  // errors: {
    
  //   message
  // }[]

  constructor(config: I_FieldErrorConstructorConfig) {
    this.el = config.el;
    this.emitter = new EventEmitter(config.on);
    this.max = config.max || 1;
    // this.animation = new CSSClassAnimations({
    //   el: this.el,
    //   allow: [ 'animationend', 'transitionend' ],
    //   on: {
    //     end: this.__mutationEndListener.bind(this)
    //   }
    // });
  }

  __mutationEndListener(event: AnimationEvent | TransitionEvent): void {
    this.emitter.emit('__mutationEnd__');
  }

  set(messages?: string[]): void {
    if (messages) {
      if (this.els.length) {
        for (let idx = 0; idx < this.els.length; idx++) {
          if (! messages.includes(this.els[idx].textContent!)) {
            this.els[idx].remove();
            this.els.splice(idx, 1);
          }
        }
        for (const msg of messages) {
          if (! this.messages.includes(msg)) {
            const el = _().create({ content: msg }).addClass('f-error', 'field__error');
            this.animations.push(
              new CSSClassAnimations({
                el,
                allow: [ 'transitionend' ],
                on: {
                  end: () => {
                    el.removeClass('f-error')
                  }
                }
              }),
            );

            this.el.append(...el);

            el.addClass('f-error--show').nextTick(() => el.addClass('f-error--enter-to'));

            this.els.push(...el);
          }
        }
      } else {
        for (const msg of messages) {
          // const el = _().create({ content: msg }).addClass('field__error');
          // this.el.append(...el);
          // this.els.push(...el);

          const el = _().create({ content: msg }).addClass('f-error', 'field__error');
          this.animations.push(
            new CSSClassAnimations({
              el,
              allow: ['transitionend'],
              on: {
                end: () => {
                  el.removeClass('f-error')
                }
              }
            }),
          );

          this.el.append(...el);

          el.addClass('f-error--show').nextTick(() => el.addClass('f-error--enter-to'));

          this.els.push(...el);
        }
      }
    } else {
      this.el.empty();
    }

    this.messages = messages || [];
  }
}