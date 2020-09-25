import ScheduleSelector from 'react-schedule-selector';
import React, {useState} from 'react';
import { API } from "aws-amplify";

function loadCalendar() {
  return API.get("notes", "/calendar");
}

export default class Calendar extends React.Component {
  // const [loop, setLoop] = useState(0);
  constructor(props) {
    super(props);
    console.log("constructor props received = " + JSON.stringify(this.props));
    this.state = {
      schedule: this.props.calendar
      // preFilledSchedule:[],
      // isLoaded: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (newSchedule) => {
    console.log("handleChange");
    // this.setState({ schedule: newSchedule.length !== 0 ?
    //   newSchedule :
    //   JSON.parse(JSON.stringify(this.props.calendar).substring(12,JSON.stringify(this.props.calendar).length - 1))
    // });
    console.log(newSchedule);
    this.props.handleSubmitCalendar(newSchedule);
  };

  render() {
    console.log(this.props);
    if(this.props.calLoad === true) {
      return <div> loading </div>
    }
    console.log(this.props.calendar);
    return (
    <div>
      <ScheduleSelector
        selection={this.props.calendar}
        numDays={5}
        minTime={9}
        maxTime={18}
        hourlyChunks={2}
        timeFormat={'hh:mm A'}
        dateFormat={'ddd'}
        startDate={'9-14-20'}
        margin={8}
        onChange={this.handleChange}
      />
    </div>
    );
  }
}


// const [schedule, setSchedule] = useState([]);
//
// function handleChange(schedule) {
  //   setSchedule(schedule);
  // }

  // async function handleChange(schedule) {
    //   setSchedule(schedule);
    //   console.log(schedule);
    //   onChange(schedule);
    // }
    // console.log("logging calendar");
    // console.log(typeof calendar);
    // console.log(calendar)
    // console.log(calendar.length == 0);
    // // if (calendar.length != 0) {
      // //   setSchedule(calendar);
      // // }
