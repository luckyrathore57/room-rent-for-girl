import  { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DateRangePickerComponent = () => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleSelect = (ranges:any) => {
    if(ranges.selection.startDate.getTime() > new Date().getTime()){
        setSelectionRange(ranges.selection);
    }
  };

  return (
    <div className="mt-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateRange">
        Select Dates
      </label>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        rangeColors={["#F94892"]}
        color='#F94892'
      />
    </div>
  );
};
export default DateRangePickerComponent;