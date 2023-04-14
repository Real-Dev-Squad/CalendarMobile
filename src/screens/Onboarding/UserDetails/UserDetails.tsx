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
  UserDetailsAction,
  UserDetailsState,
} from '../../../types/screens/UserDetails';
import {styles} from './UserDetails.styles';
import {UserDetailsProps} from '../../../types/global';
import TimezonePicker from '../../../components/Onboarding/TimezonePicker/TimezonePicker';

function UserDetails(userDetailsProps: UserDetailsProps) {
  const [{username, fullname}, userDetailsDispatch] = useReducer<
    Reducer<UserDetailsState, UserDetailsAction>
  >(userDetailsReducer, {username: '', fullname: ''});

  const setUsername = (text: string) =>
    userDetailsDispatch({type: 'username', payload: text});

  const setFullname = (text: string) =>
    userDetailsDispatch({type: 'fullname', payload: text});

  return (
    <View style={styles.container}>
      <View>
        <HeadingAndProgressStep step={1} />

        <View style={styles.userDetailsInputContainer}>
          <PrefixTextInput
            prefix="hap.day/"
            label="Username"
            inputValue={username}
            placeholder="EruditeJohnDoe"
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
          <TimezonePicker />
        </View>
      </View>

      <RCalButton
        btnText="Next Step"
        backgroundColor={colors.secondaryColor}
        textColor="white"
        onPress={() => userDetailsProps.navigation.navigate('ConnectCalendar')}
      />
    </View>
  );
}

export default UserDetails;
