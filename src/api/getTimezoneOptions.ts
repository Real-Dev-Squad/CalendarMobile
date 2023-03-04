import {API_ENDPOINT} from '@env';
import axios from 'axios';

export default async function getTimezoneOptions(userTz: string): Promise<{
  success: boolean;
  data: {
    tzOptions: {label: string; value: string}[];
    initialValueIndex: number;
  };
}> {
  const {data} = await axios.get(
    `${API_ENDPOINT}/get-tz-options?userTz=${userTz}`,
  );
  return data;
}
