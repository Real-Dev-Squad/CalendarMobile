import {
  UserDetailsAction,
  UserDetailsState,
} from '../types/screens/UserDetails.types';

export default function userDetailsReducer(
  state: UserDetailsState,
  action: UserDetailsAction,
) {
  switch (action.type) {
    case 'username':
      return {...state, username: action.payload};
    case 'fullname':
      return {...state, fullname: action.payload};
    default:
      return state;
  }
}
