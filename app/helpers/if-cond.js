import { helper } from '@ember/component/helper';

export function ifCond(params/*, hash*/) {
  return params[0] || params[1];
}

export default helper(ifCond);
