type GetTimezoneOptionsResult = Promise<{
  success: boolean;
  data: {
    tzOptions: {label: string; value: string}[];
    initialValueIndex: number;
  } | null;
}>;
