import {
  TimezonePickerAction,
  TimezonePickerState,
} from '../types/screens/UserDetails.types';

export default function timezoneReducer(
  state: TimezonePickerState,
  action: TimezonePickerAction,
) {
  switch (action.type) {
    case 'isOpen':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}
