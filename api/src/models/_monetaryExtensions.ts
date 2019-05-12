export const toReadable = (number: number) => (number / 100).toFixed(2);

export const toStoreable = (number: number) => number * 100;
