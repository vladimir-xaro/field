(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("$", [], factory);
	else if(typeof exports === 'object')
		exports["$"] = factory();
	else
		root["$"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/index.dev.scss":
/*!*********************************!*\
  !*** ./src/scss/index.dev.scss ***!
  \*********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@xaro/css-class-animations/src/CSSClassAnimations.ts":
/*!***************************************************************************!*\
  !*** ./node_modules/@xaro/css-class-animations/src/CSSClassAnimations.ts ***!
  \***************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CSSClassAnimations
/* harmony export */ });
/* harmony import */ var _xaro_event_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xaro/event-emitter */ "./node_modules/@xaro/event-emitter/src/index.ts");
/* harmony import */ var _xaro_micro_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xaro/micro-dom */ "./node_modules/@xaro/micro-dom/src/index.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "./node_modules/@xaro/css-class-animations/src/variables.ts");



class CSSClassAnimations {
    constructor(config) {
        this.emitter = new _xaro_event_emitter__WEBPACK_IMPORTED_MODULE_0__.default(config.on);
        if (Array.isArray(config.el)) {
            this.els = (0,_xaro_micro_dom__WEBPACK_IMPORTED_MODULE_1__.default)(...config.el);
        }
        else {
            this.els = (0,_xaro_micro_dom__WEBPACK_IMPORTED_MODULE_1__.default)(config.el);
        }
        if (config.allow) {
            this.allow = (Array.isArray(config.allow) ? config.allow : [config.allow]).filter(value => _variables__WEBPACK_IMPORTED_MODULE_2__.events.includes(value));
        }
        else if (config.disallow) {
            this.allow = (Array.isArray(config.disallow) ? config.disallow : [config.disallow]).filter(value => _variables__WEBPACK_IMPORTED_MODULE_2__.events.includes(value));
        }
        else {
            this.allow = _variables__WEBPACK_IMPORTED_MODULE_2__.events;
        }
        for (const key in _variables__WEBPACK_IMPORTED_MODULE_2__.eventsListeners) {
            this[_variables__WEBPACK_IMPORTED_MODULE_2__.eventsListeners[key]] = this[_variables__WEBPACK_IMPORTED_MODULE_2__.eventsListeners[key]].bind(this);
        }
        for (const el of this.els) {
            for (const event of this.allow) {
                el.addEventListener(event, this[_variables__WEBPACK_IMPORTED_MODULE_2__.eventsListeners[event]]);
            }
        }
    }
    __mutationStartListener(event) {
        this.emitter.emit('start', this, event);
    }
    __mutationCancelListener(event) {
        this.emitter.emit('cancel', this, event);
    }
    __mutationEndListener(event) {
        this.emitter.emit('end', this, event);
    }
    __mutationIterationListener(event) {
        this.emitter.emit('iteration', this, event);
    }
    __mutationRunListener(event) {
        this.emitter.emit('run', this, event);
    }
    addEvent(domEventKey) {
        if (!this.allow.includes(domEventKey)) {
            return;
        }
        for (const el of this.els) {
            el.addEventListener(domEventKey, this[_variables__WEBPACK_IMPORTED_MODULE_2__.eventsListeners[domEventKey]]);
        }
    }
    removeEvent(domEventKey) {
        if (!this.allow.includes(domEventKey)) {
            return;
        }
        for (const el of this.els) {
            el.removeEventListener(domEventKey, this[_variables__WEBPACK_IMPORTED_MODULE_2__.eventsListeners[domEventKey]]);
        }
    }
    on(eventKey, cb) {
        this.emitter.subscribe(eventKey, cb);
    }
}


/***/ }),

/***/ "./node_modules/@xaro/css-class-animations/src/index.ts":
/*!**************************************************************!*\
  !*** ./node_modules/@xaro/css-class-animations/src/index.ts ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _CSSClassAnimations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSClassAnimations */ "./node_modules/@xaro/css-class-animations/src/CSSClassAnimations.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CSSClassAnimations__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./node_modules/@xaro/css-class-animations/src/variables.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@xaro/css-class-animations/src/variables.ts ***!
  \******************************************************************/
/*! namespace exports */
/*! export events [provided] [no usage info] [missing usage info prevents renaming] */
/*! export eventsListeners [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventsListeners": () => /* binding */ eventsListeners,
/* harmony export */   "events": () => /* binding */ events
/* harmony export */ });
const eventsListeners = {
    animationstart: '__mutationStartListener',
    animationcancel: '__mutationCancelListener',
    animationend: '__mutationEndListener',
    animationiteration: '__mutationIterationListener',
    transitionstart: '__mutationStartListener',
    transitioncancel: '__mutationCancelListener',
    transitionend: '__mutationEndListener',
    transitionrun: '__mutationRunListener'
};
const events = Object.keys(eventsListeners);


/***/ }),

/***/ "./node_modules/@xaro/event-emitter/src/EventEmitter.ts":
/*!**************************************************************!*\
  !*** ./node_modules/@xaro/event-emitter/src/EventEmitter.ts ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ EventEmitter
/* harmony export */ });
class EventEmitter {
    /**
     * Create Emitter
     */
    constructor(on = {}) {
        /**
         * Event list
         */
        this.events = {};
        for (let key in on) {
            if (on[key]) {
                this.subscribe(key, on[key]);
            }
        }
    }
    /**
     * Creates a key for the event and subscribes the passed callback to it.
     */
    subscribe(key, cb) {
        if (!this.has(key)) {
            this.events[key] = [];
        }
        let removes = [];
        if (Array.isArray(cb)) {
            for (const _cb of cb) {
                removes.push(...this.subscribe(key, _cb));
            }
        }
        else {
            this.events[key].push(cb);
            removes.push(() => this.removeListener(key, cb));
        }
        return removes;
    }
    /**
     * Unsubscribes all callback functions from the event and removes the event
     * key.
     */
    unsubscribe(...keys) {
        for (const key of keys) {
            if (this.events[key]) {
                delete this.events[key];
            }
        }
    }
    /**
     * Removes a specific event key callback function.
     */
    removeListener(key, cb) {
        // if (typeof this.events[key] === 'object') {
        if (Array.isArray(this.events[key])) {
            const idx = this.events[key].indexOf(cb);
            if (idx > -1) {
                this.events[key].splice(idx, 1);
            }
        }
    }
    /**
     * Calls the callback function only once, and then removes it.
     */
    once(key, cb) {
        const remove = this.subscribe(key, () => {
            remove[0]();
            if (Array.isArray(cb)) {
                for (const _cb of cb) {
                    _cb();
                }
            }
            else {
                cb();
            }
        });
    }
    /**
     * Checks for an event by key.
     * (Doesn't check for callback functions)
     */
    has(key) {
        return !!this.events[key];
    }
    /**
     * Returns the number of callback functions for the event key or "false" if
     * there is no key
     */
    listenerCount(key) {
        if (!this.events.hasOwnProperty(key)) {
            return false;
        }
        return this.events[key].length;
    }
    /**
     * Calls all callback functions on events using the event key.
     */
    emit(key, ...args) {
        const event = this.events[key];
        if (event) {
            for (let cb of event) {
                cb(...args);
            }
        }
    }
    /**
     * Just like "emit" calls all callback functions. However, the callback must
     * return a boolean value, which determines whether or not the next callback
     * will execute.
     * As a result, it returns the result of the last executed callback function.
     */
    validateEmit(key, ...args) {
        const event = this.events[key];
        if (!event) {
            return false;
        }
        for (const cb of event) {
            if (!cb(...args)) {
                return false;
            }
        }
        return true;
    }
    /**
     * Just like "emit" calls all callbacks, but unlike "emit" it passes the
     * result of the previous callback to the next one as an argument.
     * As aresult, it will return the result of the last callback.
     */
    seriesEmit(key, ...args) {
        const event = this.events[key];
        if (!event) {
            return;
        }
        let params;
        for (let i = 0; i < event.length; i++) {
            if (i === 0) {
                params = event[i](...args);
            }
            else {
                params = event[i](params);
            }
        }
        return params;
    }
}


/***/ }),

/***/ "./node_modules/@xaro/event-emitter/src/index.ts":
/*!*******************************************************!*\
  !*** ./node_modules/@xaro/event-emitter/src/index.ts ***!
  \*******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitter */ "./node_modules/@xaro/event-emitter/src/EventEmitter.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./node_modules/@xaro/micro-dom/src/MicroDOM.ts":
/*!******************************************************!*\
  !*** ./node_modules/@xaro/micro-dom/src/MicroDOM.ts ***!
  \******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ MicroDOM
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./node_modules/@xaro/micro-dom/src/helpers.ts");

class MicroDOM extends Array {
    constructor(...args) {
        super(...args);
    }
    get(...args) {
        let newInstance = new MicroDOM;
        if (this.length) {
            for (const el of this) {
                newInstance.push(...(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEls)(el, ...args));
            }
        }
        else {
            newInstance.push(...(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEls)(document, ...args));
        }
        return newInstance;
    }
    create(...entities) {
        let newInstance = new MicroDOM;
        for (const entity of entities) {
            if (typeof entity === 'string') {
                newInstance.push(document.createElement(entity));
            }
            else if (entity instanceof Object) {
                const el = document.createElement(entity.tagName || 'div');
                if (entity.content) {
                    if (Array.isArray(entity.content)) {
                        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.recursiveAppend)(el, ...entity.content);
                    }
                    else {
                        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.recursiveAppend)(el, entity.content);
                    }
                }
                newInstance.push(el);
            }
        }
        return newInstance;
    }
    empty() {
        for (const el of this) {
            el.innerHTML = '';
        }
        return this;
    }
    append(...append) {
        for (const el of this) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.recursiveAppend)(el, ...append);
        }
        return this;
    }
    addClass(...classes) {
        for (const el of this) {
            el.classList.add(...classes);
        }
        return this;
    }
    removeClass(...classes) {
        for (const el of this) {
            el.classList.remove(...classes);
        }
        return this;
    }
    toggleClass(classname) {
        for (const el of this) {
            el.classList.toggle(classname);
        }
        return this;
    }
    hasClass(classname, reqtForAll = false) {
        if (reqtForAll) { // The presence of a class for each element of the set
            let number = 0;
            for (const el of this) {
                if (el.classList.contains(classname)) {
                    number++;
                }
            }
            return number === this.length;
        }
        else { // the presence of a class for at least one element of the set
            for (const el of this) {
                if (el.classList.contains(classname)) {
                    return true;
                }
            }
            return false;
        }
    }
    addEventListener(type, listener, options) {
        for (const el of this) {
            el.addEventListener(type, listener, options);
        }
        return this;
    }
    removeEventListener(type, listener, options) {
        for (const el of this) {
            el.removeEventListener(type, listener, options);
        }
        return this;
    }
    css(obj) {
        for (const el of this) {
            for (const key in obj) {
                el.style[key] = obj[key];
            }
        }
        return this;
    }
    attr(obj) {
        for (const el of this) {
            for (const key in obj) {
                el.setAttribute(key, obj[key]);
            }
        }
        return this;
    }
    nextTick(...cbs) {
        const arr = cbs;
        const current = cbs.shift();
        current && setTimeout(() => {
            current();
            if (arr.length) {
                this.nextTick(...arr);
            }
        }, 0);
        return this;
    }
}


/***/ }),

/***/ "./node_modules/@xaro/micro-dom/src/entry.ts":
/*!***************************************************!*\
  !*** ./node_modules/@xaro/micro-dom/src/entry.ts ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./node_modules/@xaro/micro-dom/src/helpers.ts");
/* harmony import */ var _MicroDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MicroDOM */ "./node_modules/@xaro/micro-dom/src/MicroDOM.ts");


function _(...args) {
    if (args instanceof _MicroDOM__WEBPACK_IMPORTED_MODULE_1__.default) {
        return args;
    }
    return new _MicroDOM__WEBPACK_IMPORTED_MODULE_1__.default(...(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEls)(document, ...args));
}


/***/ }),

/***/ "./node_modules/@xaro/micro-dom/src/helpers.ts":
/*!*****************************************************!*\
  !*** ./node_modules/@xaro/micro-dom/src/helpers.ts ***!
  \*****************************************************/
/*! namespace exports */
/*! export getEls [provided] [no usage info] [missing usage info prevents renaming] */
/*! export recursiveAppend [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEls": () => /* binding */ getEls,
/* harmony export */   "recursiveAppend": () => /* binding */ recursiveAppend
/* harmony export */ });
function getEls(target, ...els) {
    const arr = [];
    for (const el of els) {
        if (typeof el === 'string') {
            const nodes = target.querySelectorAll(el);
            arr.push(...nodes);
        }
        else if (el instanceof Element) {
            arr.push(el);
        }
    }
    return arr;
}
function recursiveAppend(el, ...content) {
    for (const entity of content) {
        if (Array.isArray(entity)) {
            recursiveAppend(el, ...entity);
        }
        else {
            el.append(entity);
        }
    }
}


/***/ }),

/***/ "./node_modules/@xaro/micro-dom/src/index.ts":
/*!***************************************************!*\
  !*** ./node_modules/@xaro/micro-dom/src/index.ts ***!
  \***************************************************/
/*! namespace exports */
/*! export MicroDOM [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@xaro/micro-dom/src/MicroDOM.ts .default */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "MicroDOM": () => /* reexport safe */ _MicroDOM__WEBPACK_IMPORTED_MODULE_1__.default
/* harmony export */ });
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entry */ "./node_modules/@xaro/micro-dom/src/entry.ts");
/* harmony import */ var _MicroDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MicroDOM */ "./node_modules/@xaro/micro-dom/src/MicroDOM.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_entry__WEBPACK_IMPORTED_MODULE_0__.default);
// ===




/***/ }),

/***/ "./src/Error.ts":
/*!**********************!*\
  !*** ./src/Error.ts ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FieldError
/* harmony export */ });
/* harmony import */ var _xaro_css_class_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xaro/css-class-animations */ "./node_modules/@xaro/css-class-animations/src/index.ts");
/* harmony import */ var _xaro_event_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xaro/event-emitter */ "./node_modules/@xaro/event-emitter/src/index.ts");
/* harmony import */ var _xaro_micro_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @xaro/micro-dom */ "./node_modules/@xaro/micro-dom/src/index.ts");



class FieldError {
    // errors: {
    //   message
    // }[]
    constructor(config) {
        this.animations = [];
        this.messages = [];
        this.els = new _xaro_micro_dom__WEBPACK_IMPORTED_MODULE_2__.MicroDOM;
        this.el = config.el;
        this.emitter = new _xaro_event_emitter__WEBPACK_IMPORTED_MODULE_1__.default(config.on);
        this.max = config.max || 1;
        // this.animation = new CSSClassAnimations({
        //   el: this.el,
        //   allow: [ 'animationend', 'transitionend' ],
        //   on: {
        //     end: this.__mutationEndListener.bind(this)
        //   }
        // });
    }
    __mutationEndListener(event) {
        this.emitter.emit('__mutationEnd__');
    }
    set(messages) {
        if (messages) {
            if (this.els.length) {
                for (let idx = 0; idx < this.els.length; idx++) {
                    if (!messages.includes(this.els[idx].textContent)) {
                        this.els[idx].remove();
                        this.els.splice(idx, 1);
                    }
                }
                for (const msg of messages) {
                    if (!this.messages.includes(msg)) {
                        const el = (0,_xaro_micro_dom__WEBPACK_IMPORTED_MODULE_2__.default)().create({ content: msg }).addClass('f-error', 'field__error');
                        this.animations.push(new _xaro_css_class_animations__WEBPACK_IMPORTED_MODULE_0__.default({
                            el,
                            allow: ['transitionend'],
                            on: {
                                end: () => {
                                    el.removeClass('f-error');
                                }
                            }
                        }));
                        this.el.append(...el);
                        el.addClass('f-error--show').nextTick(() => el.addClass('f-error--enter-to'));
                        this.els.push(...el);
                    }
                }
            }
            else {
                for (const msg of messages) {
                    // const el = _().create({ content: msg }).addClass('field__error');
                    // this.el.append(...el);
                    // this.els.push(...el);
                    const el = (0,_xaro_micro_dom__WEBPACK_IMPORTED_MODULE_2__.default)().create({ content: msg }).addClass('f-error', 'field__error');
                    this.animations.push(new _xaro_css_class_animations__WEBPACK_IMPORTED_MODULE_0__.default({
                        el,
                        allow: ['transitionend'],
                        on: {
                            end: () => {
                                el.removeClass('f-error');
                            }
                        }
                    }));
                    this.el.append(...el);
                    el.addClass('f-error--show').nextTick(() => el.addClass('f-error--enter-to'));
                    this.els.push(...el);
                }
            }
        }
        else {
            this.el.empty();
        }
        this.messages = messages || [];
    }
}


/***/ }),

/***/ "./src/Field.ts":
/*!**********************!*\
  !*** ./src/Field.ts ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Field
/* harmony export */ });
/* harmony import */ var _xaro_event_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xaro/event-emitter */ "./node_modules/@xaro/event-emitter/src/index.ts");
/* harmony import */ var _xaro_micro_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xaro/micro-dom */ "./node_modules/@xaro/micro-dom/src/index.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "./src/variables.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Error */ "./src/Error.ts");





class Field {
    constructor(config) {
        this.values = [];
        this.validates = [];
        this.validateOn = {
            input: true,
            change: true
        };
        this.el = config.el instanceof _xaro_micro_dom__WEBPACK_IMPORTED_MODULE_1__.MicroDOM ? config.el : (0,_xaro_micro_dom__WEBPACK_IMPORTED_MODULE_1__.default)(config.el);
        if (!this.el.length) {
            throw new Error('Config.el is not valid');
        }
        this.emitter = new _xaro_event_emitter__WEBPACK_IMPORTED_MODULE_0__.default(config.on);
        this.inputs = this.el.get('.field__input');
        if (!this.inputs.length) {
            throw new Error('No input elements found');
        }
        this.type = this.inputs[0].type;
        // ===
        const domEvents = _variables__WEBPACK_IMPORTED_MODULE_2__.domEventTypes[this.type].events.map(_idx => {
            return _variables__WEBPACK_IMPORTED_MODULE_2__.inputDomEvents[_idx];
        });
        const limit = _variables__WEBPACK_IMPORTED_MODULE_2__.domEventTypes[this.type].limit;
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
        }
        else {
            this.name = this.inputs[0].name;
        }
        // ===
        if (config.value) {
            if (this.type === 'checkbox') {
                this.values = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.initCheckboxConfigValues)(this.inputs, config.value);
            }
            else if (this.type === 'radio') {
                this.values = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.initRadioConfigValue)(this.inputs, config.value);
            }
            else {
                this.value = config.value;
                this.input.value = this.value;
            }
        }
        else {
            if (this.type === 'checkbox') {
                this.values = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.initCheckboxInputValues)(this.inputs);
            }
            else if (this.type === 'radio') {
                this.values = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.initRadioInputValue)(this.inputs);
            }
            else {
                this.value = this.input.value;
            }
        }
        // ===
        if (config.validate !== undefined) {
            this.validates = Array.isArray(config.validate) ? config.validate : [config.validate];
            // this.emitter.subscribe('__validate__', config.validate);
        }
        // ===
        if (typeof config.errors === 'undefined') {
            this.error = new _Error__WEBPACK_IMPORTED_MODULE_4__.default({
                el: this.el.get('.field__errors')
            });
        }
    }
    /** Returns a value depending on the field type */
    get value() {
        if (this.type === 'checkbox') {
            return this.values;
        }
        else {
            return this.values[0];
        }
    }
    /** Sets the correct value of the values array */
    set value(value) {
        this.values = Array.isArray(value) ? value : [value];
    }
    /** Returns first input element from inputs array */
    get input() {
        return this.inputs[0];
    }
    /** DOM Listeners */
    __inputListener(event) {
        window.event = event;
        this.emitter.emit('input', this, event);
        // console.log('[Field] input', event);
        const validator = this.validate();
        console.log(validator);
        this.error?.set(!validator.success ? validator.messages : undefined);
        // if (! validator.success) {
        //   this.error?.set(validator.messages);
        // } else {
        //   this.error?.set();
        // }
    }
    __changeListener(event) {
        this.emitter.emit('change', this, event);
        console.log('[Field] change', event);
    }
    __clickListener(event) {
        this.emitter.emit('click', this, event);
        console.log('[Field] click', event);
    }
    /** Validate series */
    validate() {
        let success = true;
        let messages = [];
        for (const fn of this.validates) {
            const validator = fn(this.input.value, this);
            if (!validator.success) {
                validator.message && messages.push(validator.message);
                success = false;
                if (!validator.continueOnError) {
                    break;
                }
            }
        }
        return {
            success,
            messages
        };
    }
}


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! namespace exports */
/*! export initCheckboxConfigValues [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initCheckboxInputValues [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initRadioConfigValue [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initRadioInputValue [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCheckboxConfigValues": () => /* binding */ initCheckboxConfigValues,
/* harmony export */   "initCheckboxInputValues": () => /* binding */ initCheckboxInputValues,
/* harmony export */   "initRadioConfigValue": () => /* binding */ initRadioConfigValue,
/* harmony export */   "initRadioInputValue": () => /* binding */ initRadioInputValue
/* harmony export */ });
/** Checkbox */
function initCheckboxConfigValues(inputs, configValue) {
    let values = configValue.split(/\s*,\s*/);
    let exists = [];
    for (let idx = 0; idx < inputs.length; idx++) {
        for (const value of values) {
            const checkbox = inputs[idx];
            if (value === checkbox.value) {
                checkbox.checked = true;
                exists.push(checkbox.value);
            }
        }
    }
    let idxsForDel = [];
    for (let idx = 0; idx < values.length; idx++) {
        if (!exists.includes(values[idx])) {
            idxsForDel.push(idx);
        }
    }
    for (let idx of idxsForDel) {
        values.splice(idx, 1);
    }
    return values;
}
function initCheckboxInputValues(inputs) {
    let values = [];
    for (let idx = 0; idx < inputs.length; idx++) {
        const checkbox = inputs[idx];
        if (checkbox.checked) {
            this.values.push(checkbox.value);
        }
    }
    return values;
}
/** Radio */
function initRadioConfigValue(inputs, configValue) {
    let value = [];
    let isFound = false;
    for (let idx = inputs.length - 1; idx >= 0; idx--) {
        const radio = inputs[idx];
        if (isFound) {
            radio.checked = false;
        }
        else if (radio.value === configValue) {
            value.push(radio.value);
            radio.checked = true;
            isFound = true;
        }
    }
    return value;
}
function initRadioInputValue(inputs) {
    let value = [];
    let isFound = false;
    for (let idx = inputs.length - 1; idx >= 0; idx--) {
        const radio = inputs[idx];
        if (isFound) {
            radio.checked = false;
        }
        else if (radio.checked) {
            value.push(radio.value);
            isFound = true;
        }
    }
    return value;
}


/***/ }),

/***/ "./src/index.dev.ts":
/*!**************************!*\
  !*** ./src/index.dev.ts ***!
  \**************************/
/*! namespace exports */
/*! export default [not provided] [used in Field] [usage prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_dev_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.dev.scss */ "./src/scss/index.dev.scss");
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ "./src/Field.ts");


const field = new _Field__WEBPACK_IMPORTED_MODULE_1__.default({
    el: '.field',
    name: 'test',
    // value:  '2',
    validate: [
        (value, field) => {
            return {
                success: /^\d+$/.test(value),
                message: 'Допустимы только цифры',
                continueOnError: true
            };
        },
        (value, field) => {
            return {
                success: /^(123)|(456)|(789)$/.test(value),
                message: 'Неверный формат',
                continueOnError: true
            };
        },
        (value, field) => {
            return {
                success: value.length >= 3,
                message: 'Длина меньше 3 символов',
                continueOnError: true
            };
        },
        (value, field) => {
            return {
                success: value.length <= 3,
                message: 'Длина больше 3 символов'
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
window.field = field;


/***/ }),

/***/ "./src/variables.ts":
/*!**************************!*\
  !*** ./src/variables.ts ***!
  \**************************/
/*! namespace exports */
/*! export defaults [provided] [no usage info] [missing usage info prevents renaming] */
/*! export domEventTypes [provided] [no usage info] [missing usage info prevents renaming] */
/*! export inputDomEvents [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaults": () => /* binding */ defaults,
/* harmony export */   "inputDomEvents": () => /* binding */ inputDomEvents,
/* harmony export */   "domEventTypes": () => /* binding */ domEventTypes
/* harmony export */ });
const defaults = {
    el: undefined,
};
const inputDomEvents = [
    'click',
    'change',
    'input'
];
const domEventTypes = {
    'button': {
        events: [0],
        limit: 1
    },
    'checkbox': {
        events: [1, 2],
        limit: 0
    },
    'color': {
        events: [1, 2],
        limit: 1
    },
    'date': {
        events: [1, 2],
        limit: 1
    },
    'datetime-local': {
        events: [1, 2],
        limit: 1
    },
    'email': {
        events: [1, 2],
        limit: 1
    },
    'file': {
        events: [1, 2],
        limit: 1
    },
    'hidden': {
        events: [],
        limit: 1
    },
    'image': {
        events: [],
        limit: 1
    },
    'month': {
        events: [1, 2],
        limit: 1
    },
    'number': {
        events: [1, 2],
        limit: 1
    },
    'password': {
        events: [1, 2],
        limit: 1
    },
    'radio': {
        events: [1, 2],
        limit: 0
    },
    'range': {
        events: [1, 2],
        limit: 1
    },
    'reset': {
        events: [0],
        limit: 1
    },
    'search': {
        events: [1, 2],
        limit: 1
    },
    'submit': {
        events: [0],
        limit: 1
    },
    'tel': {
        events: [1, 2],
        limit: 1
    },
    'text': {
        events: [1, 2],
        limit: 1
    },
    'time': {
        events: [1, 2],
        limit: 1
    },
    'url': {
        events: [1, 2],
        limit: 1
    },
    'week': {
        events: [1, 2],
        limit: 1
    },
};
// export const eventTypes = {
//   'button':         [ 'click' ],
//   'checkbox':       [ 'change', 'input' ],
//   'color':          [ 'change', 'input' ],
//   'date':           [ 'change', 'input' ],
//   'datetime-local': [ 'change', 'input' ],
//   'email':          [ 'change', 'input' ],
//   'file':           [ 'change', 'input' ],
//   'hidden':         [],
//   'image':          [],
//   'month':          [ 'change', 'input' ],
//   'number':         [ 'change', 'input' ],
//   'password':       [ 'change', 'input' ],
//   'radio':          [ 'change', 'input' ],
//   'range':          [ 'change', 'input' ],
//   'reset':          [ 'click' ],
//   'search':         [ 'change', 'input' ],
//   'submit':         [ 'click' ],
//   'tel':            [ 'change', 'input' ],
//   'text':           [ 'change', 'input' ],
//   'time':           [ 'change', 'input' ],
//   'url':            [ 'change', 'input' ],
//   'week':           [ 'change', 'input' ],
// }


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.dev.ts");
/******/ })()
.default;
});
//# sourceMappingURL=Field.dev.js.map