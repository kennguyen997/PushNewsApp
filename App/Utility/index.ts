export * from './constants';
export * from './FixDefault';

export const Sleep = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
