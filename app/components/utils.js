export const isInteger = num => {
  return !num.includes('.');
};

export const hasDecimalPoint = value => {
  return value.includes('.');
};