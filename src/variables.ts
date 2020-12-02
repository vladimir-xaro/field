export const defaults = {
  el: undefined,
  
};

export const inputDomEvents = [
  'click',
  'change',
  'input'
];

export const domEventTypes = {
  'button': {
    events: [ 0 ],
    limit:  1
  },
  'checkbox': {
    events: [ 1, 2 ],
    limit:  0
  },
  'color': {
    events: [ 1, 2 ],
    limit:  1
  },
  'date': {
    events: [ 1, 2 ],
    limit:  1
  },
  'datetime-local': {
    events: [ 1, 2 ],
    limit:  1
  },
  'email': {
    events: [ 1, 2 ],
    limit:  1
  },
  'file': {
    events: [ 1, 2 ],
    limit:  1
  },
  'hidden': {
    events: [],
    limit:  1
  },
  'image': {
    events: [],
    limit:  1
  },
  'month': {
    events: [ 1, 2 ],
    limit:  1
  },
  'number': {
    events: [ 1, 2 ],
    limit:  1
  },
  'password': {
    events: [ 1, 2 ],
    limit:  1
  },
  'radio': {
    events: [ 1, 2 ],
    limit:  0
  },
  'range': {
    events: [ 1, 2 ],
    limit:  1
  },
  'reset': {
    events: [ 0 ],
    limit:  1
  },
  'search': {
    events: [ 1, 2 ],
    limit:  1
  },
  'submit': {
    events: [ 0 ],
    limit:  1
  },
  'tel': {
    events: [ 1, 2 ],
    limit:  1
  },
  'text': {
    events: [ 1, 2 ],
    limit:  1
  },
  'time': {
    events: [ 1, 2 ],
    limit:  1
  },
  'url': {
    events: [ 1, 2 ],
    limit:  1
  },
  'week': {
    events: [ 1, 2 ],
    limit:  1
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