import ScheduleSelector from 'react-schedule-selector'
import React, {useState} from 'react'

function Calendar({calendar, onChange}) {
  const [schedule, setSchedule] = useState([]);

  async function handleChange(schedule) {
    setSchedule(schedule);
    console.log(schedule);
    // console.log(calendar);
    onChange(schedule);
  }
  console.log("logging calendar");
  console.log(typeof calendar);
  console.log(calendar)
  console.log(calendar.length == 0);
  if (calendar.length != 0) {
    setSchedule(calendar);
  }

  return (
    <ScheduleSelector
      selection={schedule}
      numDays={5}
      minTime={9}
      maxTime={18}
      hourlyChunks={2}
      timeFormat={'hh:mm A'}
      dateFormat={'ddd'}
      startDate={'9-14-20'}
      margin={8}
      onChange={handleChange}
    />
  )
}

export default Calendar;
