import { useState } from "react";
import DateSelect from "./DateSelect";

function Sample() {
  const [date, setDate] = useState("");

  return (
    <div className="birth-form-wrapper">
      <DateSelect value={date} onChange={setDate} />
    </div>
  );
}

export default Sample;
