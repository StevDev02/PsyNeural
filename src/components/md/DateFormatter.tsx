import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time className="font-semibold md:text-2xl" dateTime={dateString}>
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
};

export default DateFormatter;
