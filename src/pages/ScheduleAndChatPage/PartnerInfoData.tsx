import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

type TasteType = {
  id: number;
  isValid: boolean;
  taste: string;
};
export type MeetingTimesType = {
  id: number;
  time: object;
};
export type TimesType = {
  id: number;
  time: object;
  isPartnerPick: boolean;
  isChecked: boolean;
  state: string;
  print: string;
};
type ChatType = {
  id: number;
  chat: string;
};
type PartnerType = {
  id: number;
  firstName: string;
  lastName: string;
  initial: string;
  native: string;
  learning: string;
  localTime: string;
  timeZone: string;
  nationality: string;
  email: string;
  univ: string;
  major: string;
  taste: TasteType[];
  meetingTimes: MeetingTimesType[];
  timesData: TimesType[];
  partnerChat: ChatType[];
  myChat: ChatType[];
};

export const PartnerInfoData: PartnerType[] = [
  {
    id: 1,
    firstName: "Samuel",
    lastName: "Jeong",
    initial: "SJ",
    native: "KOR",
    learning: "ENG",
    localTime: "Seoul +14hrs",
    timeZone: "Asia/Seoul",
    nationality: "Korean",
    email: "sammy98@snu.ac.kr",
    univ: "Seoul National University",
    major: "German Education",
    taste: [
      { id: 1, isValid: true, taste: "reading" },
      { id: 2, isValid: true, taste: "for" },
      { id: 3, isValid: true, taste: "fun" },
      { id: 4, isValid: false, taste: "interests" },
      { id: 5, isValid: false, taste: "are" },
      { id: 6, isValid: true, taste: "various" },
      { id: 7, isValid: true, taste: "are" },
      { id: 8, isValid: false, taste: "various" },
      { id: 9, isValid: true, taste: "fields" },
    ],
    meetingTimes: [],
    timesData: [
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
    ],
    partnerChat: [
      { id: 1, chat: "hello! how are you doing?" },
      { id: 2, chat: "it is really nice to meet you!" },
      { id: 3, chat: "im looking forward to meeting you soon!!" },
    ],
    myChat: [
      { id: 1, chat: "im good, its nice to meet you!" },
      { id: 2, chat: "when would you like to meet for our first session?" },
    ],
  },

  {
    id: 2,
    firstName: "Sungmin",
    lastName: "Choi",
    initial: "SC",
    native: "KOR",
    learning: "ENG",
    localTime: "New York +3hrs",
    timeZone: "America/New_York",
    nationality: "Korean",
    email: "sc98@cu.com",
    univ: "The Cooper Union",
    major: "Design",
    taste: [
      { id: 1, isValid: true, taste: "cooking" },
      { id: 2, isValid: true, taste: "for" },
      { id: 3, isValid: true, taste: "fun" },
      { id: 4, isValid: false, taste: "interests" },
      { id: 5, isValid: false, taste: "are" },
      { id: 6, isValid: true, taste: "various" },
      { id: 7, isValid: true, taste: "are" },
      { id: 8, isValid: false, taste: "various" },
      { id: 9, isValid: true, taste: "fields" },
    ],
    meetingTimes: [],
    timesData: [
      {
        id: 1,
        time: dayjs().set("day", 3).set("hour", 8).set("minute", 0),
        isPartnerPick: false,
        isChecked: false,
        state: "",
        print: "",
      },
      {
        id: 2,
        time: dayjs().set("day", 3).set("hour", 9).set("minute", 0),
        isPartnerPick: true,
        isChecked: false,
        state: "Finalize",
        print: "Finalize",
      },
      {
        id: 3,
        time: dayjs().set("day", 3).set("hour", 10).set("minute", 0),
        isPartnerPick: true,
        isChecked: false,
        state: "Finalize",
        print: "Finalize",
      },
    ],
    partnerChat: [
      { id: 1, chat: "a" },
      { id: 2, chat: "b" },
      { id: 3, chat: "c" },
    ],
    myChat: [
      { id: 1, chat: "d" },
      { id: 2, chat: "e" },
    ],
  },
];
