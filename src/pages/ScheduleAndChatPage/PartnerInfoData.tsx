import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export type MeetingTimesType = {
  id: number;
  time: object;
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
  color: string;
  native: string;
  learning: string;
  localTime: string;
  city: string;
  timeZone: string;
  nationality: string;
  email: string;
  univ: string;
  major: string;
  meetingTimes: MeetingTimesType[];
  partnerChat: ChatType[];
  myChat: ChatType[];
};

export const PartnerInfoData: PartnerType[] = [
  {
    id: 1,
    firstName: "Samuel",
    lastName: "Jeong",
    initial: "SJ",
    color: "tealBlue",
    native: "KOR",
    learning: "ENG",
    localTime: "Seoul +14hrs",
    city: "New York",
    timeZone: "America/New_York",
    nationality: "Korean",
    email: "sammy98@snu.ac.kr",
    univ: "Seoul National University",
    major: "German Education",
    meetingTimes: [],
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
    color: "red",
    native: "KOR",
    learning: "ENG",
    localTime: "New York +3hrs",
    city: "New York",
    timeZone: "America/New_York",
    nationality: "Korean",
    email: "sc98@cu.com",
    univ: "The Cooper Union",
    major: "Design",
    meetingTimes: [],
    partnerChat: [
      { id: 1, chat: "how" },
      { id: 2, chat: "are" },
      { id: 3, chat: "you?" },
    ],
    myChat: [
      { id: 1, chat: "I'm" },
      { id: 2, chat: "okay" },
    ],
  },
];
