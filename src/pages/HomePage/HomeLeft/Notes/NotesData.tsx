type NotesType = {
  id: number;
  accounts: string[];
  date: string;
  num: number;
  word: string;
};

export const NotesData: NotesType[] = [
  {
    id: 1,
    accounts: ["S", "N"],
    date: "3 days ago",
    num: 11,
    word: "looking forward to it",
  },
  {
    id: 2,
    accounts: ["S", "N"],
    date: "2 days ago",
    num: 10,
    word: "agree to disagree",
  },
];
