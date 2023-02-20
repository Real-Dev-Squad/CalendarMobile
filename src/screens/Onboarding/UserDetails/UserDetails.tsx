import {View} from 'react-native';
import React, {Reducer, useReducer} from 'react';
import HeadingAndProgressStep from '../../../components/Onboarding/HeadingAndProgressStep/HeadingAndProgressStep';
import {
  PrefixTextInput,
  RCalTextInput,
} from '../../../components/Inputs/Inputs';
import {RCalButton} from '../../../components/Buttons/Buttons';
import {colors} from '../../../constants/colors';
import userDetailsReducer from '../../../reducers/userDetailsReducer';
import {
  TimezonePickerAction,
  TimezonePickerState,
  UserDetailsAction,
  UserDetailsState,
} from '../../../types/screens/UserDetails.types';
import {styles} from './UserDetails.styles';
import {UserDetailsProps} from '../../../types/global';
import TimezonePicker from 'react-native-dropdown-picker';
import timezoneReducer from '../../../reducers/timezoneReducer';

function UserDetails(userDetailsProps: UserDetailsProps) {
  const [{username, fullname}, userDetailsDispatch] = useReducer<
    Reducer<UserDetailsState, UserDetailsAction>
  >(userDetailsReducer, {username: '', fullname: ''});

  const [{isOpen, currentValue}, timezonePickerDispatch] = useReducer<
    Reducer<TimezonePickerState, TimezonePickerAction>
  >(timezoneReducer, {
    isOpen: false,
    currentValue: '',
  });

  const options = [{label: '', items: ''}];

  const setIsOpen = () => timezonePickerDispatch({type: 'isOpen'});

  const setCurrentValue = () => {};

  const setUsername = (text: string) =>
    userDetailsDispatch({type: 'username', payload: text});

  const setFullname = (text: string) =>
    userDetailsDispatch({type: 'fullname', payload: text});

  return (
    <View style={styles.container}>
      <HeadingAndProgressStep
        step={1}
        step1LineWidth={'49%'}
        step2LineWidth={'24%'}
        step3LineWidth={'24%'}
      />
      <View>
        <View>
          <PrefixTextInput
            prefix="hap.day/"
            label="Username"
            inputValue={username}
            placeholder="JackedJohnDoe"
            onChangeHandler={setUsername}
            errMessage="enter a valid username"
          />
          <RCalTextInput
            label="Full name"
            placeholder="John Doe"
            inputValue={fullname}
            onChangeHandler={setFullname}
            errMessage="enter a valid fullname"
          />
          <TimezonePicker
            open={isOpen}
            setOpen={setIsOpen}
            value={currentValue}
            items={options}
            setValue={setCurrentValue}
          />
        </View>
        <RCalButton
          backgroundColor={colors.secondaryColor}
          btnText="Next Step"
          textColor={'white'}
          onPress={() =>
            userDetailsProps.navigation.navigate('ConnectCalendar')
          }
        />
      </View>
    </View>
  );
}

export default UserDetails;
