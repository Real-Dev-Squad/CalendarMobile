import React, {memo, useMemo, useRef, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {getTimeZones} from '@vvo/tzdb';
import {Text, View} from 'react-native';
import {getCities, getUtcOffset} from '../../../utils/timezonePicker.utils';
import {styles} from './TimezonePicker.styles';

function TimezonePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const initialValueIndex = useRef(0);
  const timeZonesWithUtc = useMemo(
    () =>
      getTimeZones({includeUtc: true}).map((tz, index) => {
        if (tz.name === Intl.DateTimeFormat().resolvedOptions().timeZone) {
          initialValueIndex.current = index;
        }
        return {
          label: `${getCities(tz.rawFormat)}, ${
            tz.alternativeName
          } (GMT ${getUtcOffset(tz.rawFormat)})`,
          value: tz.name,
        };
      }),
    [],
  );

  const [currentTzValue, setCurrentTzValue] = useState(
    timeZonesWithUtc[initialValueIndex.current].value,
  );

  return (
    <View style={styles.pickerContainer}>
      <Text style={styles.label}>Timezone:</Text>
      <DropDownPicker
        open={isOpen}
        value={currentTzValue}
        items={timeZonesWithUtc}
        setOpen={setIsOpen}
        setValue={setCurrentTzValue}
        searchable={true}
        listMode="MODAL"
        style={styles.dropdown}
        containerStyle={styles.dropdownContainer}
        itemSeparator={true}
        listItemContainerStyle={styles.listItemContainer}
      />
    </View>
  );
}

export default memo(TimezonePicker);
