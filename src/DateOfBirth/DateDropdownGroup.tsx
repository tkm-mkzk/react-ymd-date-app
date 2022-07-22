import React from "react";
import { Options } from "./types";
import "../styles.css";

export interface DateDropdownGroupProps {
  yearValue: string;
  monthValue: string;
  dayValue: string;
  yearOptions: Options;
  monthOptions: Options;
  dayOptions: Options;
  onYearChange: React.ChangeEventHandler<HTMLSelectElement>;
  onMonthChange: React.ChangeEventHandler<HTMLSelectElement>;
  onDayChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const DateDropdownGroup = React.forwardRef<
  HTMLSelectElement,
  DateDropdownGroupProps
>((props, ref) => {
  return (
    <div className="birth-form">
      <select
        value={props.yearValue}
        onChange={props.onYearChange}
        className="year-form"
      >
        <option value="" disabled>
          年
        </option>
        {props.yearOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <select
        value={props.monthValue}
        onChange={props.onMonthChange}
        ref={undefined}
        className="month-form"
      >
        <option value="" disabled>
          月
        </option>
        {props.monthOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <select
        value={props.dayValue}
        onChange={props.onDayChange}
        ref={ref}
        className="day-form"
      >
        <option value="" disabled>
          日
        </option>
        {props.dayOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
});
DateDropdownGroup.displayName = "DateDropdownGroup";

export default DateDropdownGroup;
