import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

type ChatType = {
  id: number;
  user: string;
  chat: string;
  number: number;
  time: string;
};

export const ChatData: ChatType[] = [
  {
    id: 1,
    user: "SJ",
    chat: "hello! how are you doing?",
    number: 0,
    time: "04/30 09:11 am",
  },
  {
    id: 2,
    user: "SJ",
    chat: "it is really nice to meet you!",
    number: 0,
    time: "04/30 09:12 am",
  },
  {
    id: 3,
    user: "SC",
    chat: "im looking forward to meeting you soon!!",
    number: 0,
    time: "04/30 10:34 am",
  },
  {
    id: 4,
    user: "user",
    chat: "im good, its nice to meet you!",
    number: 1,
    time: "05/01 02:58 pm",
  },
  {
    id: 5,
    user: "user",
    chat: "when would you like to meet for our first session?",
    number: 1,
    time: "05/01 02:58 pm",
  },
];
