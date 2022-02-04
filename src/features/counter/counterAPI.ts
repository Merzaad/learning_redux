/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
/* eslint-disable no-promise-executor-return */
// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) => setTimeout(() => resolve({ data: amount }), 500));
}
