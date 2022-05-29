export const match = key => (val, context) => val && val === context[key];
export const name = (val) => !val || /^(?=.*[A-Z])(?=.*[A-Z])(?=.*\d)[A-Z\d]{8,}$/.test(val);
export const address = (val) => !val || /^(?=.*[A-Z])(?=.*[A-Z])(?=.*\d)[A-Z\d]{8,}$/.test(val);