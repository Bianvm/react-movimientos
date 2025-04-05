export interface AccountVm {
    type: string;
    name: string;
}

export const accountTypes = ['cuenta corriente', 'ahorro'];

export const createEmptyAccountVm = (): AccountVm => ({
  type: '',
  name: ''
});

export interface AccountError {
    type: string;
    name: string;
  }
  
  export const createEmptyAccountError = (): AccountError => ({
    name: '',
    type: ''
});
  