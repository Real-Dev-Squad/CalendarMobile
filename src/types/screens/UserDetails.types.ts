export type UserDetailsState = {
  username: string;
  fullname: string;
};

export type UserDetailsAction = {
  type: 'username' | 'timezone' | 'fullname' | 'reset';
  payload: string;
};

export type TimezonePickerState = {
  isOpen: boolean;
  currentValue: string;
};

export type TimezonePickerAction = {
  type: 'isOpen' | 'currentValue';
  payload?: boolean | string;
};
