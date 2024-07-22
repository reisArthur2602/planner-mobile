export type DateTimeProps = {
  mode: 'date' | 'time';
  value: Date;
  onChange: (date: Date) => void;
};
