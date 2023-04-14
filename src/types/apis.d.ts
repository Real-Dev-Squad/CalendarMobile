type GetTimezoneOptionsResult = Promise<{
  success: boolean;
  data: {
    timeZones: {label: string; value: string}[];
    userTimeZoneIndex: number;
  } | null;
}>;
