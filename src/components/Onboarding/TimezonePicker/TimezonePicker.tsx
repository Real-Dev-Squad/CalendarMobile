import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import DropDownPicker, {ValueType} from 'react-native-dropdown-picker';
import {ActivityIndicator, Text, View} from 'react-native';
import {styles} from './TimezonePicker.styles';
import {colors} from '../../../constants/colors';
import {useQuery} from '@tanstack/react-query';
import getTimezoneOptions from '../../../api/getTimezoneOptions';

function TimezonePicker() {
  const userTz = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    [],
  );
  const [isOpen, setIsOpen] = useState(false);
  const [currentTzValue, setCurrentTzValue] = useState<ValueType | null>(null);
  const {isFetching, isLoading, data} = useQuery({
    queryKey: ['timezone-options'],
    queryFn: () => getTimezoneOptions(userTz),
    placeholderData: {
      success: false,
      data: {tzOptions: [], initialValueIndex: 0},
    },
    staleTime: Infinity,
  });

  const TzActivityIndication = useCallback(
    ({color, size}: {color: string; size: number}) => (
      <ActivityIndicator color={color} size={size} />
    ),
    [],
  );

  const {tzItems, initialValueIndex} = useMemo(
    () => ({
      tzItems: data?.data?.tzOptions || [],
      initialValueIndex: data?.data?.initialValueIndex || 0,
    }),
    [data?.data?.initialValueIndex, data?.data?.tzOptions],
  );

  useEffect(() => {
    if (tzItems.length > 0) {
      setCurrentTzValue(tzItems[initialValueIndex].value);
    }
  }, [initialValueIndex, tzItems]);

  const loading = useMemo(
    () => isFetching || isLoading,
    [isFetching, isLoading],
  );

  return (
    <View style={styles.pickerContainer}>
      <Text style={styles.label}>Timezone:</Text>

      <DropDownPicker
        open={isOpen}
        setOpen={setIsOpen}
        value={currentTzValue}
        setValue={setCurrentTzValue}
        items={tzItems}
        loading={loading}
        searchable={true}
        listMode="MODAL"
        style={styles.dropdown}
        containerStyle={styles.dropdownContainer}
        itemSeparator={true}
        itemSeparatorStyle={{
          backgroundColor: colors.inputBorderColor,
        }}
        listItemContainerStyle={styles.listItemContainer}
        ActivityIndicatorComponent={TzActivityIndication}
        activityIndicatorColor={colors.secondaryColor}
        activityIndicatorSize={30}
      />
    </View>
  );
}

export default memo(TimezonePicker);
