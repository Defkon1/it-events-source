import { parse } from 'date-fns';
import { it } from 'date-fns/locale';

 export const parseEventDate = (date: string) => parse(date, 'yyyy-MM-dd HH:mm:ss', 0, { locale: it });