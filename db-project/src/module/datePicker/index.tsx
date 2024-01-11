import { FC, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DatePickers: FC = () => {
  const [value, setValue] = useState<Date>(new Date());
  return (
    <div>
      <DatePicker
        value={value}
        render={(value: any) => {
          return <button  className="font-Yek-Bold">{value}</button>;
        }}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />
    </div>
  );
};

export default DatePickers;
