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
                value={props.endDate}
                returnValue='start'
                onChange={ onChangeHandler }
                showTimeSelect
                showYearDropdown
                dateFormat="MM/dd/yyyy EE  hh:mm a"
            />
        </div>
    )
}

export default MyDatepickerComponent;
 