import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyDatepickerComponent = (props) => {
    
    const onChangeHandler = (start) => {
        props.setEndDate( new Date(start));
    }

    return (
        <div>
            <DatePicker 
                selected={props.endDate} 
                minDate={props.now}
                value={props.endDate}
                returnValue='start'
                onChange={ onChangeHandler }
                showYearDropdown
                dateFormat="MM/dd/yyyy EE  hh:mm a" 
            />
        </div>
    )
}

export default MyDatepickerComponent;
 