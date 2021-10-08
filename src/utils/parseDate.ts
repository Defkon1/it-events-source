import { parse } from 'date-fns';
import { it } from 'date-fns/locale';

export const parseEventDate = (date: string) => {
  try {
    return parse(date, 'yyyy-MM-dd HH:mm:ss', 0, { locale: it });
  } catch (ex) {
    return new Date(2021, 1, 1);
  }
};
