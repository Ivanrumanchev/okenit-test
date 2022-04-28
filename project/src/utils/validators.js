export const checkLength = (len) => (v) => (v || '').length <= len || `Invalid character length, max ${len}`;
export const checkRequired = (v) => !!v?.trim() || 'This field is required';
