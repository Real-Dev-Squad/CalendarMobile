export type UserDetailsState = {
  username: string;
  fullname: string;
};

export type UserDetailsAction = {
  type: 'username' | 'timezone' | 'fullname' | 'reset';
  payload: string;
};
