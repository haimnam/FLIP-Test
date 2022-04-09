type ConverterTimeType = {
  id: number;
  format: string;
  unit: string;
};
type ConverterDateType = {
  id: number;
  format: string;
  unit: string;
  slash: string;
};
type ConverterType = {
  time: ConverterTimeType[];
  date: ConverterDateType[];
};

export const ConverterData: ConverterType = {
  time: [
    { id: 1, format: "hh", unit: "h" },
    { id: 2, format: "mm", unit: "m" },
  ],
  date: [
    { id: 1, format: "MM", unit: "M", slash: "/" },
    { id: 2, format: "DD", unit: "D", slash: "" },
  ],
};
