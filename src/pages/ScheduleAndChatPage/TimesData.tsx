import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export type TimesType = {
  id: number;
  time: object;
  isPartnerPick: boolean;
  isChecked: boolean;
  state: string;
  print: string;
};

export const TimesData: TimesType[] = [
  {
    id: 1,
    time: dayjs().set("day", 1).set("hour", 12).set("minute", 0),
    isPartnerPick: false,
    isChecked: false,
    state: "",
    print: "",
  },
  {
    id: 2,
    time: dayjs().set("day", 1).set("hour", 13).set("minute", 0),
    isPartnerPick: true,
    isChecked: false,
    state: "Finalize",
    print: "Finalize",
  },
  {
    id: 3,
    time: dayjs().set("day", 1).set("hour", 14).set("minute", 0),
    isPartnerPick: true,
    isChecked: false,
    state: "Finalize",
    print: "Finalize",
  },
];
