export const PartnerInfoData = [
  {
    id: 1,
    name: "Samuel Jeong",
    localTime: "Seoul +14hrs 4:20pm",
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
        main: "Tuesday 1:00 pm",
        sub: "Wednesday 2:00 am KST",
        isPartnerPick: false,
        isChecked: false,
        state: "",
        print: "",
      },
      {
        id: 2,
        main: "Tuesday 2:00 pm",
        sub: "Wednesday 3:00 am KST",
        isPartnerPick: true,
        isChecked: false,
        state: "Finalize",
        print: "Finalize",
      },
      {
        id: 3,
        main: "Tuesday 3:00 pm",
        sub: "Wednesday 4:00 am KST",
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
    name: "Sungmin Choi",
    localTime: "New York +3hrs 4:20pm",
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
        main: "Wednesday 1:00 pm",
        sub: "Thursday 2:00 am KST",
        isPartnerPick: false,
        isChecked: false,
        state: "",
        print: "",
      },
      {
        id: 2,
        main: "Wednesday 2:00 pm",
        sub: "Thursday 4:00 am KST",
        isPartnerPick: true,
        isChecked: false,
        state: "Finalize",
        print: "Finalize",
      },
      {
        id: 3,
        main: "Wednesday 3:00 pm",
        sub: "Thursday 5:00 am KST",
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
