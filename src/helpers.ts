import { I_MicroDOM } from "@xaro/micro-dom";


/** Checkbox */
export function initCheckboxConfigValues(inputs: I_MicroDOM, configValue: string): string[] {
  let values: string[] = configValue.split(/\s*,\s*/);

  let exists: string[] = [];
  for (let idx = 0; idx < inputs.length; idx++) {
    for (const value of values) {
      const checkbox = (inputs[idx] as HTMLInputElement);
      if (value === checkbox.value) {
        checkbox.checked = true;
        exists.push(checkbox.value);
      }
    }
  }

  let idxsForDel: number[] = [];
  for (let idx = 0; idx < values.length; idx++) {
    if (! exists.includes(values[idx])) {
      idxsForDel.push(idx);
    }
  }

  for (let idx of idxsForDel) {
    values.splice(idx, 1);
  }

  return values;
}

export function initCheckboxInputValues(inputs: I_MicroDOM): string[] {
  let values: string[] = [];
  
  for (let idx = 0; idx < inputs.length; idx++) {
    const checkbox = (inputs[idx] as HTMLInputElement);
    if (checkbox.checked) {
      this.values.push(checkbox.value);
    }
  }

  return values;
}

/** Radio */
export function initRadioConfigValue(inputs: I_MicroDOM, configValue: string): string[] {
  let value: string[] = [];

  let isFound = false;
  for (let idx = inputs.length - 1; idx >= 0; idx--) {
    const radio = (inputs[idx] as HTMLInputElement);
    if (isFound) {
      radio.checked = false;
    } else if (radio.value === configValue) {
      value.push(radio.value)
      radio.checked = true;
      isFound = true;
    }
  }

  return value;
}

export function initRadioInputValue(inputs: I_MicroDOM): string[] {
  let value: string[] = [];

  let isFound = false;
  for (let idx = inputs.length - 1; idx >= 0; idx--) {
    const radio = (inputs[idx] as HTMLInputElement);
    if (isFound) {
      radio.checked = false;
    } else if (radio.checked) {
      value.push(radio.value);
      isFound = true;
    }
  }

  return value;
}