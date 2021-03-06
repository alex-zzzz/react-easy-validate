import {
  isBlank, numeric, size, testRegex,
} from './helpers';

export const rules = {
  accepted: { message: 'Field must be accepted.', rule: val => val === true, required: true },
  alpha: {
    message: 'Field may only contain letters.',
    rule: val => testRegex(val, /^[A-Z]*$/i),
  },
  alpha_space: {
    message: 'Field may only contain letters and spaces.',
    rule: val => testRegex(val, /^[A-Z\s]*$/i),
  },
  alpha_num: {
    message: 'Field may only contain letters and numbers.',
    rule: val => testRegex(val, /^[A-Z0-9]*$/i),
  },
  alpha_num_space: {
    message: 'Field may only contain letters, numbers, and spaces.',
    rule: val => testRegex(val, /^[A-Z0-9\s]*$/i),
  },
  alpha_num_dash: {
    message: 'Field may only contain letters, numbers, and dashes.',
    rule: val => testRegex(val, /^[A-Z0-9_-]*$/i),
  },
  alpha_num_dash_space: {
    message: 'Field may only contain letters, numbers, dashes, and spaces.',
    rule: val => testRegex(val, /^[A-Z0-9_-\s]*$/i),
  },
  array: {
    message: 'Field must be an array.',
    rule: val => Array.isArray(val),
  },
  between: {
    message: 'Field must be between values',
    rule: (val, params) => size(val, params[2]) >= parseFloat(params[0]) && size(val, params[2]) <= parseFloat(params[1]),
  },
  boolean: {
    message: 'Field must be a boolean.',
    rule: val => val === false || val === true,
  },
  email: {
    message: 'Field must be a valid email address.',
    // eslint-disable-next-line
        rule: val => testRegex(val, /^\w+([(\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,10})+$/i),
  },
  numeric: {
    message: 'Field must be a number.',
    rule: val => numeric(val),
  },
  required: {
    message: 'Field is required.',
    rule: val => !isBlank(val),
  },
  // url: {
  //   message: 'Field must be a url.',
  //   rule: val => testRegex(val, /^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$/i),
  // },
  default: {
    message: 'Field is invalid',
  },
};
