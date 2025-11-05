const MILLISECONDS_IN_MINUTE = 60000;
const MINUTES_IN_HOUR = 60;

type Thing =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export enum Days {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

type Day = Thing | Days;

interface Options {
  offsetHours?: number;
  when?: Date;
}

/** This function returns a boolean if a certain day. */
export function isit(someDay: Day, options: Options = {}): boolean {
  const offsetHours = options.offsetHours;
  const when = options.when || new Date();
  const localOffset = when.getTimezoneOffset();

  const offsetMinutes =
    offsetHours !== undefined ? offsetHours * MINUTES_IN_HOUR : -localOffset;

  const offsetTime = new Date(
    when.getTime() + (offsetMinutes + localOffset) * MILLISECONDS_IN_MINUTE
  );

  const offsetDay = offsetTime.getDay();

  if (offsetDay === -1) {
    return false;
  }

  return offsetDay === Days[someDay] || offsetDay === someDay;
}
